const contents = {
  title: 'newline.co',
  description: 'Learn blockchain'
};

const pages = [
  {
    output: 'index.html',
    content: contents,
    layout: 'layouts/index.hbs'
  },
  {
    output: 'about.html',
    content: contents,
    layout: 'layouts/index.hbs'
  }
];

module.exports = pages;
