const fs = require('fs');
const md5 = require('md5');

const { loadFront } = require('yaml-front-matter');

const CONTENT_DIR = 'src/content';

function loadFrontMatter(path) {
  const file = fs.readFileSync(path);
  const matter = loadFront(file);

  return matter;
}

function getMDPath(name) {
  return `src/content/${name}.md`;
}

function loadFrontMatter(path) {
  const file = fs.readFileSync(path);
  const matter = loadFront(file);

  return matter;
}

function getName(file) {
  const len = file.length;
  const name = file.substring(0, len - 3);

  return name;
}

function getItem(collection, file) {
  const name = getName(file);
  const path = `${collection}/${name}`;
  const filePath = getMDPath(path);
  const frontMatter = loadFrontMatter(filePath);
  // const hash = md5(frontMatter.id).substring(0, 6)
  return { ...frontMatter };
}

function getCollection(collection, compareFunc) {
  const items = [];

  fs.readdirSync(`${CONTENT_DIR}/${collection}`).forEach(file => {
    if (file.indexOf('.md') > -1) {
      const item = getItem(collection, file);

      if (!item.draft) {
        items.push(item);
      }
    }
  });

  if (!compareFunc) {
    return items;
  } else {
    return items.sort(compareFunc);
  }
}

var articles = getCollection(
  'articles',
  (a, b) => new Date(b.date) - new Date(a.date)
);

module.exports = JSON.stringify({ articles });

const args = process.argv.slice(2);
if (true || args[0] == '--save') {
  fs.writeFile('src/content/index.json', module.exports, err => {
    if (err) {
      throw err;
    }
    // for(var i = 0; i < articles.length; i++) {
    //   var article = articles[i]
    //   console.log(`https://early.betaport.io?c=${article.hash} = ${article.id}`)
    // }
    console.log('Saved to src/content/index.json');
  });
}
