import SpurString from '../../../src/SpurString';

describe('plugins.trimRight', () => {
  it('should trim', () => {
    expect(SpurString.trimRight('foo bar      ')).to.equal('foo bar');
    expect(SpurString.trimRight(' foo bar          ')).to.equal(' foo bar');
  });
});
