type Maybe<V> = V | null | undefined
type IsTruthyFn<V> = (v: V, i: number, vs: V[]) => Maybe<boolean>

export const isFirstDupe: IsTruthyFn<number> = (num, i, nums) => nums.indexOf(num) === i
export const deduper = filterFp(isFirstDupe)

export const isLastDupe: IsTruthyFn<number> = (num, i, nums) => nums.lastIndexOf(num) === i
export const deduperAlt = filterFp(isLastDupe)

// Functional filter
function filterFp<V>(fn: IsTruthyFn<V>) {
  return function (arr: V[]) {
    return arr.filter(fn)
  }
}