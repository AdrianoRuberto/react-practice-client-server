import { describe, it, expect } from 'vitest';
import { formatDate, parseDate } from './date';

describe('formatDate', () => {

  it('should format the date correctly for double digit month and day', () => {
    const date = new Date(2023, 10, 15); // November 15, 2023
    expect(formatDate(date)).toBe('2023-11-15');
  });

});

describe('parseDate', () => {
  it('should correctly parse a date string into a Date object', () => {
    const input = '2023-11-15';
    const expected = new Date(2023, 10, 15);
    const result = parseDate(input);
    expect(result).toEqual(expected);
  });

  it('should handle incorrect date formats gracefully', () => {
    const input = '2023-02-30'; // Invalid date
    const result = parseDate(input);
    expect(result.getDate()).not.toBe(30); // February 30 should not exist
  });

  it('should parse leap year dates correctly', () => {
    const input = '2024-02-29';
    const expected = new Date(2024, 1, 29);
    const result = parseDate(input);
    expect(result).toEqual(expected);
  });
});