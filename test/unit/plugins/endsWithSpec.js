import SpurString from '../../../src/SpurString';

describe('plugins.endsWith', () => {
  it('with match', () => {
    expect(SpurString.endsWith('http://www.opentable.com', 'com')).to.equal(true);
  });

  it('with match in position', () => {
    expect(SpurString.endsWith('http://www.opentable.com', 'opentable', 20)).to.equal(true);
  });

  it('without match', () => {
    expect(SpurString.endsWith('http://www.opentable.com', 'https')).to.equal(false);
  });

  it('without match in position', () => {
    expect(SpurString.endsWith('http://www.opentable.com', 'https', 20)).to.equal(false);
  });
});
