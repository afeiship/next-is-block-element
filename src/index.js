(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  // https://www.w3schools.com/html/html_blocks.asp
  var BLOCK_ELEMENTS = [
    'ADDRESS',
    'ARTICLE',
    'ASIDE',
    'BLOCKQUOTE',
    'CANVAS',
    'DD',
    'DIV',
    'DL',
    'DT',
    'FIELDSET',
    'FIGCAPTION',
    'FIGURE',
    'FOOTER',
    'FORM',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'HEADER',
    'HR',
    'LI',
    'MAIN',
    'NAV',
    'NOSCRIPT',
    'OL',
    'P',
    'PRE',
    'SECTION',
    'TABLE',
    'TFOOT',
    'UL',
    'VIDEO'
  ];

  nx.isBlockElement = function (inElement) {
    if (!inElement) return false;
    var tagName = inElement.nodeName;
    return BLOCK_ELEMENTS.includes(tagName);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isBlockElement;
  }
})();
