/**
 * Функция, возвращающая сумму двух чисел
 *
 * @param {Number} a - первое число
 * @param {Number} b - второе целое
 * @return {Number} сумма чисел a и b
 */
export function sum(a, b) {
  if (!a) { a = 0 }
  if (!b) { b = 0 }
  return a + b
}
