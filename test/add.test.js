import Test from 'ava'
import { add } from '../src'

Test(`#add(...values)works with positive numbers`, async t => {
  t.is(add(1, 2, 3), 6)
})

Test('#add(...values) works with negative numbers', async t => {
  t.is(add(-1, -1, -1), -3)
})

Test('#add(...values) works with positive and negative numbers', async t => {
  t.is(add(-1, 1), 0)
})
