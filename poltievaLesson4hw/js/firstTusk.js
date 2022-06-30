let x = parseInt(prompt('Введіть будь ласка начальне значення'))

let y = parseInt(prompt('Введіть будь ласка кінцеве значення'))

if ((x > y) && ((x % 1 === 0) && (y % 1 === 0))) {

    for (let i = x; i > y; i--) {
        alert(i);
    }
}else {
    alert('Введіть ціле число будь ласка')
}

if ((x < y) && ((x % 1 === 0) && (y % 1 === 0))) {

    for (let i = x; i < y; i++) {
        alert(i);
    }
}else {
    alert('Введіть ціле число будь ласка')
}







