'use strict';
// let x = 15; //создаем переменную x
// x = 17;// произошла перезапись 
// console.log(x)// тут все понятно
// //и маленькая задачка с собеседований
// let obj = {x:1, y:2} // создаем объект
// let obj1 = obj; // присвоем obj к obj1
// obj1.x = 2; // поменяем значение у "младшего"
// console.log(obj1.x); // тут понятно, только присвоили
// console.log(obj.x) // и чему же сейчас равен obj.x 

let money = prompt("Ваш бюджет на месяц?"), 
    time = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {
    budjet: money,
    timeData: time,
    expense: {}, 
    optionalExprenses: {},
    income: [],
    savings: false
 };
let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = prompt("Во сколько обойдется?"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = prompt("Во сколько обойдется?");

appData.expense.a1 = a2;
appData.expense.a3 = a4;

alert(appData.budjet / 30);