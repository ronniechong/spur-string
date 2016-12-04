import SpurString from '../../../src/SpurString';

describe('plugins.isBlank', () => {
  it('should be blank', () => {
    assert(SpurString.isBlank(''));
    assert(SpurString.isBlank(' '));
    assert(SpurString.isBlank('\n'));
    assert(SpurString.isBlank(''));
    assert(SpurString.isBlank(null));
    assert(SpurString.isBlank(void 0));
  });

  it('should not be blank', () => {
    assert(!SpurString.isBlank('a'));
    assert(!SpurString.isBlank('0'));
    assert(!SpurString.isBlank(0));
  });
});
