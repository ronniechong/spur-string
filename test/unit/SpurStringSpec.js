import SpurString from '../../src/SpurString';

describe('SpurString', () => {
  beforeEach(function () {
    this.expectedPlugins = 13;
  });

  it('should load plugins', function () {
    console.log('Plugins: ', SpurString.plugins.join(', '));
    expect(SpurString.plugins.length).to.equal(this.expectedPlugins);
  });
});
