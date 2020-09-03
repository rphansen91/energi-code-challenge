import { deduper, deduperAlt } from './deduper'

/**
 * Codetest 1: Deduper (30 minutes)
 * 
 * Remove duplicates from an array of numbers.
 *
 * Write a function that accepts an Array of numbers and will return a new Array that holds only unique numbers: any numbers that already appeared at a previous position should be ignored.
 *
 * Example:
 *
 * Given the Array [2, 6, 1, 2, 5, 2, 6, 4, 3]
 *
 * This should return: [2, 6, 1, 5, 4, 3]
 */


describe('Challenge 1', () => {
  it('Should implement the deduper', () => {
    const arr = [2, 6, 1, 2, 5, 2, 6, 4, 3]
    expect(deduper(arr)).toEqual([2, 6, 1, 5, 4, 3])
  })
})

/**
 * Codetest 2: Deduper alternative  (30 minutes)
 *
 * Write a function that accepts an Array of numbers and will return a new Array that holds only unique numbers: in case of duplicate numbers, it should show the last appearance: earlier positions should be ignored.
 *
 * Example:
 *
 * Given the Array [2, 6, 1, 2, 5, 2, 6, 4, 3]
 *
 * This should return: [1, 5, 2, 6, 4, 3]
 */


describe('Challenge 2', () => {
  it('Should implement the deduper alternative', () => {
    const arr = [2, 6, 1, 2, 5, 2, 6, 4, 3]
    expect(deduperAlt(arr)).toEqual([1, 5, 2, 6, 4, 3])
  })
})
