import { describe, expect, it } from 'vitest';
import { calculateAverage } from './average';

describe('calculateAverage', () => {
  it('returns average from slice', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });

  it('returns avg with negative and decimal values', () => {
    expect(calculateAverage([-4, 8.5, 15, -16, 23.5, 5])).toBeCloseTo(32 / 6);
  });

  it('returns the first element in one-element array', () => {
    expect(calculateAverage([7])).toBe(7);
  });

  it('rejects empty arrays', () => {
    expect(() => calculateAverage([])).toThrow('EMPTY_ARRAY');
  });
});
