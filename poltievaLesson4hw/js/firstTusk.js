let x = parseInt(prompt('Введіть будь ласка начальне значення'))

let y = parseInt(prompt('Введіть будь ласка кінцеве значення'))

for (let i = x; i < y; i++) {
    if (i % 1 === 0) {
        alert( i );
    }else {
        alert('Введіть будь ласка ціле значення')
    }
}