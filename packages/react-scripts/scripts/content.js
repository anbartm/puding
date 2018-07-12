const fs = require('fs');
const { lstatSync, readdirSync } = fs;
const { join } = require('path');
// const md5 = require('md5');

const { loadFront } = require('yaml-front-matter');

const CONTENT_DIR = 'src/content';

function loadFrontMatter(path) {
  const file = fs.readFileSync(path);
  const matter = loadFront(file);

  return matter;
}

function getMDPath(name) {
  return `${CONTENT_DIR}/${name}.md`;
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

function sortByDate(a, b, order = 'ASC') {
  const aScore = new Date(a.date);
  const bScore = new Date(b.date);
  if (order.toUpperCase() === 'ASC') {
    return bScore - aScore;
  } else {
    return aScore - bScore;
  }
}

function sortByOrder(a, b, order = 'ASC') {
  const aScore = new Number(a.order);
  const bScore = new Number(b.order);
  if (order.toUpperCase() !== 'ASC') {
    return bScore - aScore;
  } else {
    return aScore - bScore;
  }
}

function getCollection(collection) {
  const items = [];

  fs.readdirSync(`${CONTENT_DIR}/${collection}`).forEach(file => {
    if (file.indexOf('.md') > -1) {
      const item = getItem(collection, file);

      if (!item.draft) {
        items.push(item);
      }
    }
  });

  if (items && items[0]) {
    if (items[0].date !== undefined) {
      console.log(`Sorting ${collection} by date field`);
      return items.sort(sortByDate);
    } else {
      if (items[0].order !== undefined) {
        console.log(`Sorting ${collection} by order field`);
        return items.sort(sortByOrder);
      } else {
        return items;
      }
    }
  }
}

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

const directories = getDirectories(CONTENT_DIR);
const folderName = path => path.split('/').slice(-1)[0];
const collectionNames = directories.map(path => folderName(path));

let collections = {};
for (name of collectionNames) {
  collections[name] = getCollection(name);
}

fs.writeFile(
  `${CONTENT_DIR}/index.json`,
  JSON.stringify({ ...collections }),
  err => {
    if (err) {
      throw err;
    }

    console.log(
      `Saved ${collectionNames.join(', ')} ` + `to ${CONTENT_DIR}/index.json`
    );
  }
);
