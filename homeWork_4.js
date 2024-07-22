/*
Задание 1. 
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

const number = +prompt('Введите число до которого хотите увидеть вывод');


function showEvenAndOddNumbers(num) {
    if (isNaN(number) || num <= 0) {
        console.log('Введено неверное значение');
    } else {
        for (let i = 0; i <= num; i++) {
            if (i === 0) {
                console.log(`${i} - это ноль`);
            } else if (i % 2 === 1) {
                console.log(`${i} - это нечетное число`);
            } else {
                console.log(`${i} - это четное число`)
            }
        }
    }
}

showEvenAndOddNumbers(number);

/*
Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/

const arrayNumber = [1, 2, 3, 4, 5, 6, 7];

const deleteArrayElement = (arr) => {
    for (let i = 0; i < arr.length; i++) if (arrayNumber[i] === 5) delete arrayNumber[i];
    return arr;
}
// в данном случае удаляется элемент, а его позиция остается со значением  undefined
console.log(deleteArrayElement(arrayNumber));

const arrayNumber2 = [1, 2, 3, 4, 5, 6, 7];

const deleteArrayElement2 = (arr) => {
    for (let i = 0; i < arr.length; i++) if (arr[i] === 5) arr.splice(i, 1);
    return arr;
}
// удаляет элемент и его позицию 
console.log(deleteArrayElement2(arrayNumber2));

/*
Используя Math.random() вам необходимо генерировать цифры 
от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 
*/

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}



function getArrayNumber() {
    const arr = [];
    for (let i = 0; i <= 4; i++) {
        arr[i] = getRandomNumber(0, 9);
    }
    return arr;
}

function findMinNumber(arr) {
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (minNum > arr[i]) {
            minNum = arr[i];
        }
    }
    console.log(`В массиве ${arr} наименьшее число ${minNum}`);
}

function getSumArrayNumber(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    console.log(`Сумма всех чисел в массиве ${arr} равна ${result}`);
}




function findNumber(arr) {
    const num = 3;
    let foundNumber = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            console.log(`В массиве ${arr} есть число ${num}`);
            foundNumber = true
        }
    }

    if(!foundNumber) {
        console.log(`В массиве ${arr} нет числа ${num}`);
    }
}

    const arrNumber = getArrayNumber();
    getSumArrayNumber(arrNumber);
    findMinNumber(arrNumber);
    findNumber(arrNumber);


/*
*Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx

*/

function getApyramid() {
    let str = 'x';
    const pyromidRow = 20;
    for (let i = 1; i <= pyromidRow; i++) {
        console.log(str);
        str += 'x';
    }
}

getApyramid();