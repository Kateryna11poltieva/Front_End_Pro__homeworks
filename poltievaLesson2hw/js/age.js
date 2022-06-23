let userAge = +prompt('Вкажіть ваш вік будь ласка', )

let solution = userAge%10

if (userAge === 0){

    alert('Схоже вам замало років')
}

if (solution === 1) {

    alert(` Вам ${userAge} рік `)
} else if  (solution === 2 || solution === 3 || solution === 4) {
    alert(` Вам ${userAge} роки `)
} else {
    alert(` Вам ${userAge} років `)
}

