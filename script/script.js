let arr = [];

let counter = +prompt("задайте довжену масива", 3);
while (!counter || isNaN(counter)) {
    alert("ви нічого не вели, або вели не число! ")
    counter = +prompt("задайте довжену масива", 3);
}


for (let i = 0; i < counter; i++) {
    let random = Math.floor(Math.random() * 500 + 1);
    arr[i] = random;



}

let maxNumber = arr[1];
let minNumber = arr[1];
document.write("масив чисел: " + arr);

let arr1 = arr.filter(arr => arr % 2 == 0);

document.write("<br> парні числа з цього масива: " + arr1);
for (let j = 0; j < arr.length; j++) {
    if (maxNumber < arr[j]) {

        maxNumber = arr[j];
    }
    if (minNumber > arr[j]) {

        minNumber = arr[j];
    }

}

document.write("<br>Максимальне число масива: " + maxNumber);
document.write("<br>Мінемальне число масива: " + minNumber);