"use strict";
// Задание 1
var value = prompt('Введите слово для поиска его в массиве')
var array = ['Кот', 'Собака', 'Жираф'];

function searchArrayWord(){
    if (array.indexOf(value) !== -1) {
        return true;
      } else {
          return false;
      }
}

console.log(searchArrayWord(value, array));

// Задание 2
var arr = [1, 2, 3, 7, 6, 9];

var totalSum = 0;
for(var i = 0; i < arr.length; i++) {
    totalSum += arr[i];
}
var avg = totalSum / arr.length;

console.log(avg.toFixed(1));

// Задание 3
var arr2 = [1, 3, 5, 6, 7, 9];
function reverse(){
    var reversedArr = [];
    for (var i = arr2.length-1; i >= 0; i-=1){
        reversedArr.push(arr2[i]);
  }
  return reversedArr;
}
console.log(reverse(arr2));

// Задание 4
var obj = {
    html:'HTML', 
    css: 'CSS', 
    js: 'ECMA'
}
console.log(Object.keys(obj));

// Задание 5
var obj = {
    'name': '',
    'phone number': '',
    'address': '',
    'total sum': '',
    'total weight': '',
    'purchases': {
        '1 товар': {
            'purhase name': 'Чашка',
            'price': 100,
            'weight of purhase': 200
        },
        '2 товар': {
            'purhase name': 'Ложка',
            'price': 30,
            'weight of purhase': 100
        },
        '3 товар': {
            'purhase name': 'Чайник',
            'price': 550,
            'weight of purhase': 2000
        },
        '4 товар': {
            'purhase name': 'Кружка',
            'price': 150,
            'weight of purhase': 400
        }
    }
};

console.log(obj);