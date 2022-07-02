let x = parseInt(prompt('Введіть будь ласка начальне значення'))

let y = parseInt(prompt('Введіть будь ласка кінцеве значення'))

function runDown () {
    for (let i = x; i > y; i--) {
        alert(i);
    }
}

function runUp () {
    for (let i = x; i < y; i++) {
        alert(i);
    }
}

(x > y) ? runDown() : runUp()