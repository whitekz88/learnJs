/*Базовый синтаксис функции*/
function getAge(year){
    const age = 2020 - year
    if (age > 0) {
        console.log ('Возраст человека: ' + age + ' лет')
    }else{
        console.log ('Мы заглянули в будущее')
    }
}