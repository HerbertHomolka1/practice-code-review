import { difference } from './difference.js';

describe('all the tests', () => {
  it('works with no values in first array', () => {
    expect(difference([], [1, 2, 3, 4, 5])).toEqual([]);
  });
  it('works with no values in second array', () => {
    expect(difference([1, 2, 3, 4, 5], [])).toEqual([1, 2, 3, 4, 5]);
  });
  it('works with no values in either array', () => {
    expect(difference([], [])).toEqual([]);
  });
  it('gives proper values for a basic non-repeating arrays', () => {
    expect(difference([1, 2, 3, 11], [10, 11, 2, 4, 5])).toEqual([1, 3]);
  });
  it('works with repeated numbers in either array', () => {
    expect(
      difference(
        [1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5],
        [3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      ),
    ).toEqual([5]);
  });
});
