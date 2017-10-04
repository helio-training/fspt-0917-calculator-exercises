export const add = (...values) => values.reduce((prev, current) => prev + current, 0)
export const subtract = (...values) => values.reduce((prev, current) => prev + (Math.abs(current) * -1), 0)
export const multiply = (...values) => values.reduce((prev, current) => prev * current, 1)
export const divide = (x, y) => {
  if(y===0) throw Error('Divide by 0 error')
  return x / y
}

export const calculator = {
  add,
  subtract,
  multiply,
  divide,
}
