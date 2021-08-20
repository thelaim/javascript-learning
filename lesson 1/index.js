'use strict'
// 1  переменные 
const firstName = 'Максим'
const lastName = 'Ковалев'
const age = 19

//2 мутирование
console.log(firstName + ' ' + lastName + ' возраст ' + age)

// 3 операторы
let one = 11
let two = 13

console.log(one + two)
console.log(one - two)
console.log(one * two)
console.log(one / two)
console.log(++one, --two)

// 4 типы данных 

const isTypeOff = true
const num = 90
const strExample = '111'

console.log(typeof isTypeOff,typeof num, typeof strExample)

// 5 приоритет оператора

const currentYear = 2021
const myBirthday = 2002

const isAge = (currentYear - myBirthday) >= 19

console.log(isAge)
