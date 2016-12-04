import SpurString from '../../../src/SpurString';

describe('plugins.clean', () => {
  it('should clean', () => {
    expect(SpurString.clean(' foo    bar   ')).to.equal('foo bar');
    expect(SpurString.clean(123)).to.equal('123');
    expect(SpurString.clean('')).to.equal('');
    expect(SpurString.clean(null)).to.equal('');
    expect(SpurString.clean(void 0)).to.equal('');
  });
});
