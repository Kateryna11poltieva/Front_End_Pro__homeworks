let n1 = parseInt(prompt('Введіть перше значення '))

let n2 = parseInt(prompt('Введіть друге значення '))

let n3 = parseInt(prompt('Введіть третє значення '))

let n4 = parseInt(prompt('Введіть четверте значення '))

let min = Math.min ( n1, n2, n3, n4);
let max = Math.max ( n1, n2, n3, n4);

let answer = min*max;

alert(`Добуток найбільшого і найменшого числа із заданих є ${answer}`)


