let x1 = parseInt(prompt('Будь ласка введєть координату дня значення x1?'))

let y1 = parseInt(prompt('Будь ласка введєть координату дня значення y1?'))

let x2 = parseInt(prompt('Будь ласка введєть координату дня значення x2?'))

let y2 = parseInt(prompt('Будь ласка введєть координату дня значення y2?'))

let checkOne = (x1>0 && x1<9) && (x2>0 && x2<9) && (y1>0 && y1<9) && (y2>0 && y2<9)

let differenceX = Math.abs(x1-x2)// тут можно было написать 4 переменные difX===2 && (difY===1 || difY === -1) и так 4 раза, но тогда ифов будет сильно много. А суть одинакова.
//Конь может двигаться хоть (2 вверх или вниз и тогда 1 вправо или влево), хоть (2 вправо или влево и тогда 1 клетку вверх или вниз). знак не имеет значения.
let differenceY= Math.abs(y1-y2)//При условии что все действия происходят в диапазоне больше нуля и меньше 9

if (checkOne) {

    if (differenceX === 2 && differenceY === 1) {
        alert('true')
    }else if (differenceY === 2 && differenceX === 1){
        alert('true')
    }else {
        alert('false')
    }

}else {
    alert('false')
}
