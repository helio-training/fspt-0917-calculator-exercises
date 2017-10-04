import Test from 'ava'
import { subtract } from '../src'

Test(`#subtract(...values) functions works with positive numbers`, async t => {
  t.is(subtract(1, 2, 3), -6)
})

Test('#subtract(...values) sums negative numbers', async t => {
  t.is(subtract(-1, -1, -1), -3)
})

Test('#subtract(...values) sums both positive and negative numbers', async t => {
  t.is(subtract(-1, 2), -3)
})
