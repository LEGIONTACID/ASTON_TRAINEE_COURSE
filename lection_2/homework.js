var resultOfClosureFunction = [];
for (var i = 0; i < 5; i++) {
  (function(i) {
    resultOfClosureFunction[i] = function () {
      console.log(i);
  }})(i)
}
console.log('Result: Closure function:')
for (let i = 0; i < 5; i++) {
  resultOfClosureFunction[i]()
}

/*
Array resultOfClosureFunction заполняется функциями
Используется функция замыкания, чтобы сохранить 
значения переменной i для каждой итерации цикла
*/
var resultWithLet = [];
for (let i = 0; i < 5; i++) {
  resultWithLet[i] = function () {
        console.log(i);
    };
}
console.log('Result: with let:')
for (let i = 0; i < 5; i++) {
  resultWithLet[i]()
}
/*
Создание блочной области видимости, каждая функция присвоенная 
resultWithLet будет иметь отдельную копию let i, соответствующей
конкретной операции цикла.
*/
function getGroup() {
  let students = [];
  let i = 0;
  while (i < 10) {
    (function(i) {
      students[i] = function() {
        console.log(i);
      }
    })(i);
    i++;
    }

    return students;
}

let group = getGroup();
console.log('Result: getGroup():')
for(let i = 0; i < 10; i++) {
  group[i]()
}
/*
Array group заполняется функциями
Используется функция замыкания, чтобы сохранить 
значения переменной i для каждой итерации цикла

Предыдущее решение ссылалось на внешнюю переменную i,
в следствии любой вызов ссылки на i приведет к последнему значению 
переменной объявленной как let i
*/
function multiply(a) {
  return function(b) {
    if (typeof b !== 'undefined') {
      return multiply(a * b);
    }
    return a;
  }
}
console.log('Result: Multiply():')
const resultOfMultiply = multiply(6)();
console.log(resultOfMultiply);
/*
Замыкание в JavaScript, функция multiply возвращает
внутренню функцию. Внутрення функция при отсутствии
следующей функции в вызове возвращает выражение вычисленное.
*/
console.log('Result: getUniqArray(array):')
const tempData = [1,2,3,24,61,2]
function getUniqArray(array) {
  array.forEach(elem => {
    if (!(typeof elem === 'number' && isFinite(elem)) ) {
      throw new Error(`В getUniqArray был передан невалидный параметр. 
                       Аргумент arr должен быть массивом чисел`)
    }
  })
  return Array.from(new Set(array));
}
const output = getUniqArray(tempData);
console.log(output)
/*
Ключевая особеность функции вывода массива уникальных чисел в первичной строгой
проверки на число.
Затем вызывается метод класса Array и создает новый массив на основе переданного
объекта "Множество"
*/