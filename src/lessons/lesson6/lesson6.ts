console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// class Test {
//     name: string;
//     age: number;
//     //sayHi: Function;
//     //arrow: Function;
//     //sayHiBind: Function
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         //this.sayHi = function () {};
//         //this.sayHiBind = this.sayHi.bind(this);
//         //this.arrow = () => {}
//
//     }
//
//     sayHi() {
//         console.log(this.name);
//     }
//
//     arrow = () => {
//
//     }
// }
//
// let obj = new Test('Andrew', 31);
//
// console.log(obj);

// console.dir(function Test(){})
// console.dir(class Test{})

// class Test{
//     name: string
//
//      constructor(name: string) {
//         this.name = name;
//      }
// }
//
//
// class Test2 extends Test {
//     age: number;
//
//     constructor(name: string, age: number) {
//         super(name);
//         this.age = age;
//     }
// }
//
// let obj = new Test2('andrew', 31)
//
// console.log(obj);

// interface ITest {
//     name: string,
//     age: number,
//     sayHi: Function,
// }
// interface ITest2{
//     name: string,
//     city: string
// }
//
// class Test implements ITest, ITest2 {
//     name: string;
//     age: number;
//     city: string
//
//     constructor(name: string, age: number, city: string) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
//
//     sayHi() {
//     }
// }

// class Test {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name
//     }
//
//     sayName() {
//         console.log(this.name);
//     }
// }
//
// class Test2 extends Test {
//     constructor(name: string) {
//         super(name);
//     }
//
//     sayName(){
//         console.log('yo yo yo')
//         super.sayName()
//     }
// }
//
// let obj = new Test2('evgen')
// console.log(obj);
// obj.sayName()


// class Test {
//     constructor(public name: string, public age: number) {}
// }
//
// let obj = new Test('evgen', 31)

// class Test {
//     private testParam = 10;
//     constructor(public name: string, public age: number) {}
//     sayTestParam(){
//         console.log(this.testParam)
//     }
// }
// let obj = new Test('evgen', 31)
// console.log(obj)
// //@ts-ignore
// console.log(obj.testParam)

// class Test {
//     static testParam = 10;
//     constructor(public name: string) {
//
//     }
//
//     sayName() {
//         console.log(this.name);
//     }
//
//     static sayNames(arr: Array<Test>) {
//         arr.forEach(console.log)
//     }
// }
//
// let obj = new Test('Zazaza')
// let obj2 = new Test('bgggg')
// let obj3 = new Test('dfdfdfdf')
//
// console.log(obj);
//
// obj.sayName();
// obj2.sayName();
// obj3.sayName();
//
// Test.sayNames([obj,obj2,obj3])


// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.


// type studnentType = {
//     firstName: string;
//     lastName: string;
//     numberGroup: number;
//     performance: Array<number>
// }
// type studentsType =  Array<studnentType>
//
// const students: studentsType = [
//     {
//         firstName: 'Andrew',
//         lastName: 'Savchenkov',
//         numberGroup: 1,
//         performance: [10, 10, 10, 10, 10]
//     },
//     {
//         firstName: 'Stepan',
//         lastName: 'Volkov',
//         numberGroup: 1,
//         performance: [9, 5, 3, 7, 10]
//     },
//     {
//         firstName: 'Valera',
//         lastName: 'Brudov',
//         numberGroup: 3,
//         performance: [3, 8, 5, 5, 7]
//     },
//     {
//         firstName: 'Natalya',
//         lastName: 'Milohina',
//         numberGroup: 3,
//         performance: [4, 7, 4, 3, 7]
//     },
//     {
//         firstName: 'Irina',
//         lastName: 'Savchenkova',
//         numberGroup: 2,
//         performance: [9, 9, 9, 9, 9]
//     },
//     {
//         firstName: 'Valik',
//         lastName: 'Shapko',
//         numberGroup: 3,
//         performance: [4, 7, 2, 5, 4]
//     },
//     {
//         firstName: 'Marat',
//         lastName: 'Savchenkov',
//         numberGroup: 4,
//         performance: [9, 10, 9, 10, 9]
//     },
//     {
//         firstName: 'Zinaida',
//         lastName: 'Pupkina',
//         numberGroup: 3,
//         performance: [4, 8, 4, 5, 6]
//     },
//     {
//         firstName: 'Galina',
//         lastName: 'Vagner',
//         numberGroup: 2,
//         performance: [3, 5, 4, 3, 6]
//     },
//     {
//         firstName: 'Alexander',
//         lastName: 'Brig',
//         numberGroup: 1,
//         performance: [4, 5, 2, 9, 3]
//     },
// ]
//
// const sortedStudents = students.sort((a,b)=>{
//
//     if (a.performance.reduce((a, b) => (a + b)) < b.performance.reduce((a, b) => (a + b))) {
//         return 1; }
//     if (a.performance.reduce((a, b) => (a + b)) > b.performance.reduce((a, b) => (a + b))) {
//         return -1; }
//     return 0;
// })
//
//
// const theBestStudents = (students: studentsType) => {
//     let goodStudent: studentsType = [];
//     students.forEach(el => {
//         if((el.performance.reduce((a, b) => (a + b))/el.performance.length) >= 9) {
//             goodStudent.push(el)
//         }
//     })
//
//     goodStudent.map( el => {
//         console.log(`name: ${el.firstName} ${el.lastName}, number group: ${el.numberGroup}`)
//     })
//
// }
// theBestStudents(students)


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

class Test1 {
    constructor(public name: string,public age: number) {

    }
}

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию



// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

class Buer {
    constructor(public firstName: string, public lastName: string, public address: string, public bankAccount: string) {
    }
}

const buer1 = new Buer('andrey', 'savchenkov','grodno', '12d12');




// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};