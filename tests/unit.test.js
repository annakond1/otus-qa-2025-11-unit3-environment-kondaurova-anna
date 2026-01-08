import { greet } from '../src/unit.js';

describe('функция greet', () => {
  it('проверка корректных данных для функции greet', () => {
    const result = greet('Anna')
    expect(result).toBe('Hello, Anna!')
  })

 // it('проверка пустого значения для функции greet', () => {
   // const result = greet('')
    //expect(result).toBe('Hello, !')
  //})
})

//describe('функция farewell', () => {
  //it('проверка корректных данных для функции farewell', () => {
    //const result = farewell('Anna')
    //expect(result).toBe('Goodbye, Anna!')
  //})
  //it('проверка пустого значения для функции farewell', () => {
    //const result = farewell('')
    //expect(result).toBe('Goodbye, !')
  //})
//})
