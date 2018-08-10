import { PureComponent } from 'react';
import importAll from 'import-all.macro';
import PropTypes from 'prop-types';

class MarkdownLoader extends PureComponent {
  static propTypes = {
    item: PropTypes.string,
  };

  state = {
    loadedItems: {},
    item: null,
  };

  async fetch(name) {
    const fileName = `${name}.md`;
    const compareFunc = ([k, v]) => k.endsWith(fileName);
    const itemLoader = Object.entries(this.items).find(compareFunc)[1];
    const item = await itemLoader();
    return item;
  }

  async setItem(name) {
    if (!name) {
      return this.setState({ item: null });
    }
    const { loadedItems } = this.state;
    if (loadedItems[name]) {
      this.setState({
        item: loadedItems[name],
      });
    } else {
      const item = await this.fetch(name);
      this.setState({
        loadedItems: {
          ...loadedItems,
          [name]: item,
        },
        item: item,
      });
    }
  }

  componentWillMount() {
    const { item } = this.props;
    this.setItem(item);
  }
  // TODO: Get derived state from props
  componentWillReceiveProps(nextProps) {
    const { item: nextItem } = nextProps;
    this.setItem(nextItem);
  }

  render() {
    const { item } = this.state;
    if (!item) {
      return false;
    } else {
      const { attributes, default: Component } = item;
      const { children } = this.props;
      return children({ attributes, Component });
    }
  }

  constructor(props) {
    super(props);
    this.items = importAll.deferred('./**/*.md');
  }
}

export default MarkdownLoader;
