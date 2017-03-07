// NEED to use require vs import to test module export for backward compatability
const mainModule = require('../../src/SpurString');

describe('Integration', () => {
  describe('Main Module Integration Tests', () => {
    it('main plugins are configured', () => {
      expect(mainModule.clean).to.exists;
      expect(mainModule.endsWith).to.exists;
      expect(mainModule.isBlank).to.exists;
      expect(mainModule.lines).to.exists;
      expect(mainModule.lines).to.exists;
      expect(mainModule.startsWith).to.exists;
      expect(mainModule.trim).to.exists;
      expect(mainModule.trimLeft).to.exists;
      expect(mainModule.trimRight).to.exists;
    });
  });
});
