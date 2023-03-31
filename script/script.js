let arr = [];
let maxNumber = arr[1];
let minNumber = arr[1];
let counter = +prompt("задайте довжену масива", 3);
let arr1 = [];

while (!counter || isNaN(counter)) {
    alert("ви нічого не вели, або вели не число! ")
    counter = +prompt("задайте довжену масива", 3);
}


first: for (let i = 0; i < counter; i++) {
    let random = Math.floor(Math.random() * 500 + 1);
    arr[i] = random;

    let counter1 = 0;
    let arrnm = [];
    console.log(arrnm[0]);
    for (let j = 2; j < arr[i]; j++) {

        console.log(arr[i] % j == 0)
        if (arr[i] % j == 0) {

            arrnm[counter1] = j;
            counter1++;
        }

    }
    if (arrnm[0] == undefined) {
        arr1.push(arr[i]);
    }


}






for (let j = 0; j < arr.length; j++) {
    if (maxNumber < arr[j]) {

        maxNumber = arr[j];
    }
    if (minNumber > arr[j]) {

        minNumber = arr[j];
    }

}

document.write("масив чисел: " + arr);
document.write("<br> прості числа з цього масива: " + arr1);
document.write("<br>Максимальне число масива: " + maxNumber);
document.write("<br>Мінемальне число масива: " + minNumber);