// Функция
export function greet(name) {
  return `Hello, ${name}!`
}
console.log(greet('Anna'));

// Стрелочная функция
export const farewell = name => {
  return `Goodbye, ${name}!`
}
console.log(farewell('Anna'));
