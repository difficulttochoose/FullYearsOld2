console.log('App was loaded...');
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let numbers = ['one', 'two', 'three', 'four', 'five', 'six'];
// const arr = [
//     ['one', 'two', 'three'],
//     [
//         ['four', 'five', 'six'],
//         ['четыре', 'пять', 'шесть'],
//     ],
//     ['seven', 'eight', 'nine'],
// ];
// let person = {
//     name: 'Oleh',
//     age: 37,
//     position: 'WebDev',
//     salary: 4500,
//     currency: "usd",
//     sex: 'male',
// };
// const staff = [{
//         name: 'Oleh',
//         age: 37,
//         position: 'WebDev',
//         salary: 4500,
//         currency: "usd",
//         sex: 'male',
//         tech: ['JS', 'PHP', 'Python', 'Bash'],
//     },
//     {
//         name: 'Ivan',
//         age: 25,
//         position: 'WebDev',
//         salary: 1500,
//         currency: "usd",
//         sex: 'male',
//         tech: ['JS', 'PHP'],
//     },
//     {
//         name: 'Maya',
//         age: 26,
//         position: 'WebDev',
//         salary: 1800,
//         currency: "usd",
//         sex: 'female',
//         tech: ['JS', 'PHP', 'Python'],
//     },
// ];
// const a = 10,
//     b = '10';
// const res = confirm('Есть ли Вам 18 лет?');
// const res = prompt('Enter your age');
// if (Number(res) === 17) {
//     console.log('+', res);
// } else {
//     console.log('-', res);
// }
// const months={
//     january:1,
//     february:2,
//     march:3,
//     april:4,
//     may:5,
//     june:6,
//     july:7,
//     august:8,
//     september:9,
//     october:10,
//     november:11,
//     december:12,
// }
const curyear = 2019;
const curmonth = 10;
const curday = 2;
let year = prompt('Enter your year of birth:');
let month = prompt('Enter your month of birth:');
let day = prompt('Enter your day of birth:');
let res;
if(month==curmonth){
    if(day>curday){
        res=2019-year-1;
    }
    else if(day<=curday){
        res=2019-year;
    }
}else if(month>curmonth){
    res=2019-year-1;
}else if(month<curmonth){
    res=2019-year;
}
// if(month==curmonth&&day>curday||month>curmonth){
//     res=2019-year-1;
// }else if(month==curmonth&&day<=curday||month<curmonth){
//     res=2019-year;
// }

console.log('You are full years old: ', res);