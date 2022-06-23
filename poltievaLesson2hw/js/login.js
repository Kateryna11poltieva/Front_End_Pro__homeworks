let userName = prompt ('Введіть ваш логін, будь ласка')

if (userName === 'admin') {

    let userPassword = prompt('Введіть ваш пароль, будь ласка')

    if (userPassword === 'qWeRty123') {
        alert( 'Доступ надано, вітаємо' );
    } else {
        alert('Ой, десь помилка. Перевітре ваш пароль, будь ласка ')
    }

} else {
    alert( "Ой, десь помилка. Перевітре ваш логін, будь ласка" )
}