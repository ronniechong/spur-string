import SpurString from '../../../src/SpurString';

describe('helpers.escapeRegExp', () => {
  it('with lookahead', function () {
    this.expression = /hello(?=\sworld)/;
    expect(SpurString.escapeRegExp(this.expression.source)).to.equal('hello\\(\\?\\=\\\\sworld\\)');
  });

  it('with negative lookahead', function () {
    this.expression = /hello(?!\shell)/;
    expect(SpurString.escapeRegExp(this.expression.source)).to.equal('hello\\(\\?\\!\\\\shell\\)');
  });
});
