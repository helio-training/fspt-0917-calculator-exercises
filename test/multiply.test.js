import Test from 'ava'
import { multiply } from '../src'

Test(`#subtract(...values) works with positive numbers`, async t => {
  t.is(multiply(1, 2, 3), 6)
})

Test('#subtract(...values) works negative numbers', async t => {
  t.is(multiply(-1, -1, -1), -1)
})

Test('#subtract(...values) works with positive and negative numbers', async t => {
  t.is(multiply(-1, 2), -2)
})
