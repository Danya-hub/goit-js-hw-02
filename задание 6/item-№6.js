'use strict';

function wordFunction() {
    let input;
    const numbers = [];
    let total = 0;
    while (input !== null) {
        input = prompt('Введите число: ');
        // if (input === null) {
        //     alert('Отменено пользователем')
        // }
        if (isNaN(input)) {
            alert('Было введено не число, попробуйте еще раз');
        } 
        if (!isNaN(input)) {
            numbers.push(Number(input));
        } 
    }
    for (const number of numbers) {
        total += number;
    }
    alert(`Общая сумма чисел равна ${total}`)
}

wordFunction();