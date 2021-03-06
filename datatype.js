/* В JS имеется 8 типов данных */

/* Примитивные типы данных (примитивы) */
const firstName = 'Alex' // Строка (string)
const age = 26 // Число (number)
const isProgrammer = true // Булев (boolean)
let lastName; //Не определенный (undefined). Для объявления переменной использовал let, потому что const нельзя (при использовании const необходимо сразу присваивать значение)
const abc = null // Нул (null). Но если через консоль проверить тип данных, он напишет, что это object (баг JS)

/* для того, чтобы определить тип данных, который в данный момент содержится в переменной, необходимо использовать оператор typeof */
console.log(typeof firstName) // Выведет результат "string"