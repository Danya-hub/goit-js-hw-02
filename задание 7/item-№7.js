'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const minNumber = 4;
const maxNumber = 16;

let loginsCopy = prompt('Введите логин: ');

if (loginsCopy === null) {
    alert('Отменено пользователем');
}

const isLoginValid = function (login) {
    if (login.length < minNumber || login.length > maxNumber) {
        return true;
    } else {
        return false;
    }
};

// isLoginValid(loginsCopy);
// =====================================

const isLoginUnique = function (allLogins, login) {
    if (allLogins.includes(login)) {
        return false;
    } else {
        return true;
    }
};

// isLoginUnique(logins, loginsCopy);
// =====================================

const addLogin = function (allLogins, login) {
    if (isLoginValid(loginsCopy)) {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
    } else {
        if (isLoginUnique(logins, loginsCopy) === false) {
            alert('Такой логин уже используется!');
        }
        if (isLoginUnique(logins, loginsCopy) === true) {
            allLogins.push(login);
            // console.log(allLogins);
            alert('Логин успешно добавлен!');
        }
    }
};

addLogin(logins, loginsCopy);