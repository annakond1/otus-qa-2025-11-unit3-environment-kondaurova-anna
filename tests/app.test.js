import { nameIsValid, getTotal } from '../src/app.js'

describe('функция nameIsValid', () => {
    it('одно слово функции nameIsValid', () => {
        expect(nameIsValid('anna')).toBe(true)
    })
    it('два слова функции nameIsValid', () => {
        expect(nameIsValid('anna anna')).toBe(false)
    })
    it('заглавные буквы функции nameIsValid', () => {
        expect(nameIsValid('ANNA')).toBe(false)
    })
    it('пустое значение функции nameIsValid', () => {
        expect(nameIsValid('')).toBe(false)
    })
    it('цифровое значение функции nameIsValid', () => {
        expect(nameIsValid(111)).toBe(false)
    })
    it.each([
  ['anna', true],
  ['anna anna', false],
  ['ANNA', false],
  ['', false],
  [111, false]
])('параметризированный тест функции nameIsValid', (a, expected) => {
  expect(nameIsValid(a)).toBe(expected);
})
});

describe('Тестирование функции getTotal', () => {
    it('корректный расчёт суммы заказа', () => {
        expect(getTotal([{price: 10, quantity: 10}])).toBe(100)
    })
    it('скидка > 100', () => {
        expect(() => {
            getTotal([10, 10], 101);
        }).toThrow('Процент скидки должен быть от 0 до 99')
    })
})
