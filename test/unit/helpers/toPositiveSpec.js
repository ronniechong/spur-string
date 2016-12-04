import SpurString from '../../../src/SpurString';

describe('helpers.toPositive', () => {
  it('with negative', () => {
    expect(SpurString.toPositive(-3)).to.equal(0);
  });

  it('with positive', () => {
    expect(SpurString.toPositive(3)).to.equal(3);
  });
});
