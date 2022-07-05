let arr = [1,2,3,4]

function funcShift(array) {
    let newArr = [];
    for (let i = 1; i < array.length; i++) {
        newArr[i-1] = array[i]
    }
    return newArr
}
arr = funcShift(arr);
console.log(arr)

function funcUnShift(array,number) {

    let newArr = number
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i-1]
    }
    array[0] = newArr;
}

funcUnShift(arr,5)
console.log(arr)

function funcPop(array) {

    let newArr = [];
    for (let i = 1; i < array.length; i++) {
        newArr[i-1] = array[i-1]
    }
    return newArr;
}

arr = funcPop(arr);
console.log(arr)

function funcPush(array,number) {

    let newArr = number
    for (let i = array.length; i < 0; i--) {
        array[i-1] = array[0];
    }

    array[array.length] = newArr

}

funcPush(arr,8)
console.log(arr)