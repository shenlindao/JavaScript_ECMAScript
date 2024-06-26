// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];

const minNumber = (arr) => Math.min(...arr);

console.log(minNumber(arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.


function createCounter(counter) {
    let value = counter;
    return {
        increment() {
            value += 1;
        },
        decrement() {
            value -= 1;
        },
        getResult() {
            return value;
        }
    }
}

const counter = createCounter(0);

counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.getResult();

console.log(counter.getResult());


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);


function findElementByClass(root, className) {
    if (root && root.classList && root.classList.contains(className)) {
        return root;
    }
    if (!root) {
        return null;
    }
    for (let child of root.children) {
        const result = findElementByClass(child, className);
        if (result) {
            return result;
        }
    }
    return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);


