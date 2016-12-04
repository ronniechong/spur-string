import SpurString from '../../../src/SpurString';

describe('plugins.lines', () => {
  it('should parse lines', () => {
    expect(SpurString.lines('')).to.deep.equal(['']);
    expect(SpurString.lines(null)).to.deep.equal([]);
    expect(SpurString.lines(void 0)).to.deep.equal([]);
    expect(SpurString.lines('Hello\rWorld')).to.deep.equal(['Hello\rWorld']);
    expect(SpurString.lines('Hello\r\nWorld')).to.deep.equal(['Hello', 'World']);
    expect(SpurString.lines('Hello\nWorld')).to.deep.equal(['Hello', 'World']);
    expect(SpurString.lines('Hello World')).to.deep.equal(['Hello World']);
  });

  it('should parse a number into a line', () => {
    expect(SpurString.lines(123).length).to.equal(1);
  });
});
