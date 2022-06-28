let n = parseInt(prompt('Введіть довжину масиву будь ласка', '0'))

let arr = []

arr.length = n

if ((n > 0) && (n % 1 === 0)) {

    for (let i = 0; i < n; i++) {
        arr[i] = Math.round(Math.random() * 10);
    }
}else {
    alert('Введіть ціле число більше за 0 будь ласка')
}

alert(arr);

function average (arr) {
   let sum = 0;

   for(let i = 0; i < arr.length; i++) {
       sum += arr[i];

   }
    return sum / arr.length;

}

alert(average (arr))