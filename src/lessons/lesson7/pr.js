// function Test(name) {
//     this.name = name;
// }
//
// Test.prototype.sayHi = function() {};
//
// let obj = new Test('yo')
// let obj2 = new Test('yo2')
//
//
// // console.log('obj',obj)
// // console.log('obj2',obj2)
// // console.log(obj.__proto__ === Test.prototype)
// // let objProto = Object.getPrototypeOf(obj)
// // console.log('objProto' , objProto)
// // console.log(objProto === Test.prototype)
// // console.log((obj.__proto__ === Test.prototype) && (obj2.__proto__ === Test.prototype) && (obj.__proto__ === obj2.__proto__))
//
//
// obj2.__proto__.testFunc = function (){
//     console.log('hi')
// };
//
//
// console.log('obj',obj)
// console.log('obj2',obj2)
// console.dir(Test)
//
// obj.testFunc()

// Array.prototype.someFunction = function() {
//     console.log('test')
// };
//
// [].someFunction();

// let potentioalProto = {
//     name: 'Yo',
//     sayName: function () {
//         console.log('potentioalProto ', this.name)
//     }
// }
//
// let regularObj = {
//     name: 'Evgen'
// }
//
// console.log('potentioalProto ', potentioalProto)
// console.log('regularObj ', regularObj)
//
// regularObj.__proto__ = potentioalProto;
//
// regularObj.sayName();

// class regularMixinss {
//     constructor() {
//
//     }
//     sayBye() {
//         console.log('Bye bye')
//     }
// }
//
// class Test  extends regularMixinss{
//     constructor(name) {
//         super()
//         this.name = name;
//     }
//     sayName() {
//         console.log(this.name)
//     }
// }
//
// let testObj = new Test ('Yo');
//
// console.log(testObj)
//
// testObj.sayBye()

// let testObj = {}
// testObj.__proto__ = null;
// console.log(testObj)

// class Test {
//     constructor(name) {
//         this.name = name;
//     }
//     sayName() {}
// }
//
// class SuperTest extends  Test {
//     constructor(name) {
//         super(name);
//     }
//     sayBye(){
//     }
// }
// let sObj = new SuperTest('yo')
// // console.log(sObj)
//
// function TestExample(name) {
//     this.name = name;
// }
//
// TestExample.prototype.sayName = function () {}
//
// let teObj2 = new TestExample('youuuu')
//
//
// function SuperTestExample(name, age) {
//     TestExample.call(this, name)
//     this.age = age;
//     console.log('this in SuperTestExample', this)
// }
//
// let steObj = new SuperTestExample('bla', 20)
//
// console.log(steObj)

Function.prototype.customBind = function (ctx, ...args) {
    let self = this;
    return function (...args2) {
        return self.apply(ctx, [...args])
    }
}

Function.prototype._bind = function (ctx, ...args) {
    ctx.___someStrangeKey___ = this;
    return function (...args2) {
        return ctx.___someStrangeKey___(...args, ...args2)
    }
}



let obj = {name: 'andrew'}
let obj2 = {name: 'hanna', sayName() {console.log(this.name)}}

obj2.sayName.customBind(obj)();
obj2.sayName._bind(obj)();