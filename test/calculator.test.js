import Test from 'ava'
import { calculator } from '../src'

Test(`calculator exists`, async t => {
  t.truthy(calculator)
})

Test(`calculator has an add function`, async t => {
  t.truthy(calculator.add)
})

Test(`calculator has an subtract function`, async t => {
  t.truthy(calculator.subtract)
})

Test(`calculator has an multiply function`, async t => {
  t.truthy(calculator.multiply)
})

Test(`calculator has an divide function`, async t => {
  t.truthy(calculator.divide)
})
