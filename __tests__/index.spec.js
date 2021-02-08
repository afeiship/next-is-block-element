(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.isBlockElement test nil should get false', function () {
      expect(nx.isBlockElement(null)).toBe(false);
    });

    test('nx.isBlockElement test div should be block', function () {
      var el = document.createElement('div');
      expect(nx.isBlockElement(el)).toBe(true);
    });
  });
})();
