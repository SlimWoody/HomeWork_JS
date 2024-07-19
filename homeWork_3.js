/*
Урок 6. Семинар. Знакомство с функциями в JavaScript
--------------------------------------------------------------------
Задание 1. Создайте функцию которая возводит переданное число в куб, 
необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/

const numberA = 2;
const numberB = 3;

function getNumberCube(num) {
    const degree = 3;
    return num ** degree;
}

console.log(getNumberCube(numberA));
console.log(getNumberCube(numberB));

/*
Задание 2. Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести 
что значение задано неверно. Создать фукнцию, которая высчитывает 13% от данного числа и
выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/

function getSalaryMinusTax() {
    const salary = +prompt('Введите размер заработной платы');
    const tax = 0.87;
    let salaryMinusTax;

    if (isNaN(salary) || salary <= 0) {
        alert('Значение задано неверно')
        salary = +prompt('Введите размер заработной платы');
    } else {
        salaryMinusTax = salary * tax;
        console.log(`Размер заработной платы за вычетом налогов равен ${salaryMinusTax}`);
    }
}

getSalaryMinusTax()


/*
Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, 
которая определяет максимальное значение среди этих чисел
*/

// Вариант 1. Без циклов.

const numA = +prompt('Введите первое число');
const numB = +prompt('Введите второе число');
const numC = +prompt('Введите третье число');

function getMaximalNumber(arg1, arg2, arg3) {
    let maxNum = arg1;
    if (arg2 > maxNum) {
        maxNum = arg2;
    }
    if (arg3 > maxNum) {
        maxNum = arg3;
    }
    return maxNum;
}

const maxNum = getMaximalNumber(numA, numB, numC);
console.log(maxNum);

//Вариант 2. С массивом чисел и циклом.
function getRequestForThreeNumbers() {
    const array = [];
    for (let i = 1; i <= 3; i++) {
        let number = +prompt(`Введите ${i} число`);
        array.push(number);
    }
    return array;
}

function getMaximalNumber2(array) {
    let maximalNumber = array[0];  
    for (let i = 1; i < array.length; i++) { 
        if (array[i] > maximalNumber) {  
            maximalNumber = array[i];  
        }
    }
    return maximalNumber;
}

const arrayNumber = getRequestForThreeNumbers();
const maximalNumber = getMaximalNumber2(arrayNumber);

console.log(maximalNumber);

/*
Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять 
одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций 
могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите 
внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если 
числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать 
не нужно.
*/

const argA = 2;
const argB = 8;

const sum = (numA, numB) => console.log(numA + numB);

const difference = (numA, numB) => (numA > numB) 
? console.log(numA - numB) : console.log(numB - numA);

const multiplication = (numA, numB) => console.log(numA * numB);

const division = (numA, numB) => console.log(numA / numB);

sum(argA, argB);
difference(argA, argB);
multiplication(argA, argB);
division(argA, argB);