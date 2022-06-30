let length = parseInt(prompt('Введіть значення для довжини масиву'))
let arr = []
arr.length = length

for (let i = 0, n = length; i < n; i++) {
    arr [i] = prompt (`Введіть значення ${i+1}-го елементу масиву`)
}

alert(`Введений вами масив зараз такий : ${arr}`)

function funcShift() {

    let newArr = [];
    for (let i = 1; i < length; i++) {
        newArr[i-1] = arr[i]
    }
    arr = newArr;
}
funcShift()
alert(`Після виконання функції Shift масив виглядаэ так : ${arr}`)


let lengthOne = parseInt(prompt('Введіть значення для довжини нового масиву '))
let arrOne = []
arrOne.length = lengthOne

for (let i = 0, n = lengthOne; i < n; i++) {
    arrOne [i] = prompt (`Введіть значення ${i+1}-го елементу масиву`)
}

alert(`Введений вами масив зараз такий : ${arrOne}`)

function funcUnShift() {

    let newArr = [prompt('Введіть значення елементу, що буде доданий на початок масиву')];
    for (let i = lengthOne; i > 0; i--) {
        arrOne[i] = arrOne[i-1]
    }
    arrOne[0] = newArr;
}

funcUnShift()
alert(`Після виконання функції UnShift масив виглядаэ так : ${arrOne}`)


let lengthTwo = parseInt(prompt('Введіть значення для довжини нового масиву '))
let arrTwo = []
arrTwo.length = lengthTwo

for (let i = 0, n = lengthTwo; i < n; i++) {
    arrTwo [i] = prompt (`Введіть значення ${i+1}-го елементу масиву`)
}

alert(`Введений вами масив зараз такий : ${arrTwo}`)

function funcPop() {

    let newArr = [];
    for (let i = 0; i < lengthTwo; i++) {
        newArr[i] = arrTwo[i-1]
    }
    arrTwo = newArr;
}

funcPop()
alert(`Після виконання функції Pop масив виглядаэ так : ${arrTwo}`)

let lengthThree = parseInt(prompt('Введіть значення для довжини нового масиву '))
let arrThree = []
arrThree.length = lengthThree

for (let i = 0, n = lengthThree; i < n; i++) {
    arrThree [i] = prompt (`Введіть значення ${i+1}-го елементу масиву`)
}

alert(`Введений вами масив зараз такий : ${arrThree}`)

function funcPush() {

    let newArr = [prompt('Введіть значення елементу, що буде доданий у кінець масиву')];
    for (let i = lengthThree; i < 0; i--) {
        arrThree[i-1] = arrThree[0];
    }

    arrThree[lengthThree] = newArr

}

funcPush()
alert(`Після виконання функції Push масив виглядаэ так : ${arrThree}`)