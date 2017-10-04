import Test from 'ava'
import { divide } from '../src'

Test(`#divide(x,y) with positive numbers`, async t => {
  t.is(divide(1, 2), .5)
})

Test('#divide(x,y) with negative numbers', async t => {
  t.is(divide(-1, -1), 1)
})

Test('#divide(x,y) with both positive and negative numbers', async t => {
  t.is(divide(-1, 2), -0.5)
})

Test('#subtract(x,y) throws an error when y = 0', async t => {
  const { message } = t.throws(() => {
    divide(1, 0)
  }, Error)

  t.is(message, `Divide by 0 error`)
})
