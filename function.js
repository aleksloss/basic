const person = {
    name: "oleg",
    greetRegular: function() {
        console.log(`Hello from ${this.name} (regular)`);
    },
    greetArrow: () => {
        console.log(`Hello from ${this.name} arrow`); 
    }

}

person.greetRegular();
person.greetArrow();

// Параметры функций
console.log("---Параметры функций---");

//Параметры по умолчанию
function greet(name = "somebody") {
    console.log(`Welcome ${name}!`);
}
greet("Anna");
greet();

//REST-params
//Cобирают все переданые аргументы (параметры) а массив

function sumAll (...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log("Summa 1,2,3,4: ", sumAll(1,2,3,4));


//Классический пример callback
setTimeout(() => {
    console.log("зто сообщение появится через 2 сек");
}, 2000);

function operate (a, b, operationCallback) {
    return operationCallback(a, b);
}
const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
console.log("Вызов колбеком add: ", operate(10,5, add));
console.log("Вызов колбеком su: ", operate(10,5, subtract));

console.log("---Замыкания---");
//Замыкания - комбинация функций и её окружения.
//внутренняя функция помнит перемнные внешней функции
//даже после того как внешняя завершила свою работу

function createCounter() {
    let count = 0; //это переменная в лексическом окружении

    // внутр. ф-ция,к-рая будет возвращена
    return function() {
        count++;
        console.log(count);
        return count;
    }
}

const counter1 = createCounter();
counter1();
counter1();

const counter2 = createCounter();
counter2();

console.log("---самовызывающая функция---");
//IIFE
(function() {
    const secretMessage = "Это сообщение не доступно глобально";
    console.log(secretMessage);
})();