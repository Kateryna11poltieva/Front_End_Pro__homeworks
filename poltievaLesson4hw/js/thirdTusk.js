let length = parseInt(prompt('Введіть значення для довжини масиву'))

let arr = []

arr.length = length


for (let i = 0, n = length; i < n; i++) {
    arr [i] = prompt (`Введіть значення ${i+1}-го елементу масиву`)
}

alert (`Первісний масив : ${arr}`)

let max = arr[0]
let maxElement = 0
let min = arr[0]
let minElement = 0

for (let i = 1; i < length; i++) {

    if (arr[i] < min)
    {
        min = arr[i];
        minElement = i;
    }

    if (arr[i] > max)
    {
        max = arr[i];
        maxElement = i;
    }
}

arr[minElement] = max;
arr[maxElement] = min;

alert(`Оновлений масив : ${arr}`)