class Animal{
	constructor(name){
		this.name = name;
	}
	getName(){
		return this.name;
	}
}
class Cat extends Animal{
	constructor(){
		super();
		// this.name = 'cat';
	}
}
let animal = new Animal();
let cat = new Cat();
console.log(animal.getName());
console.log(cat.getName());

var name = 'Cathy', age = 22;
var obj = {
	name: name,
	age: age,
	getName: function () {
		return this.name;
	},
	getAge: function(){
		return this.age;
	}
};

let name = 'Jal', age = 20;
let obj = {
	// 变量名可以直接用作对象的属性名
	name,
	age,
	// 对象里的方法可以简写
	getName(){
		return this.name;
	},
	// 表达式作为属性名或方法名
	['get' + 'Age'](){
		return this.age;
	}
}

// Object 对象的扩展
Object.keys(obj);
Object.assign({a:1, b: 2});





