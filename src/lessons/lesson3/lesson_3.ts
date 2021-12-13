// console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// let pr = new Promise((resolve, reject) => {
//     let a = 10;
//     //some async code
//     resolve(1);
//     reject(0);
//     console.log(a);
// })
//
// console.log(pr)


// let pr = new Promise((resolve, reject) => {
//     //some async code
//     // resolve(1);
//     reject(0);
//     // resolve({name: 'Vasya', value: 1})
//
// })
//
// pr
//     .then(res => {
//         console.log('Then res', res);
//         return 10;
//     }, err => {
//         console.log('Then err', err);
//     })
//     .then(res2 => {
//         console.log('Then res2', res2);
//     })


let pr = new Promise((resolve, reject) => {
    //some async code
    // resolve(1);
    reject(0);
    // resolve({name: 'Vasya', value: 1})

})

pr
    .then(res => {
        console.log('Then res', res);
        return 10;
    })
    .then(res2 => {
        console.log('Then res2', res2);
    })
    .catch(err => {
        console.log('Then err', err);
    })




//

// just a plug
export default () => {
};