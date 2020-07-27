console.log('Hello World');

// Types

var myString: string = "Hello World";

myString = 22 + "";

var myNumber: number = 24;

var myBool: boolean = true;

var myVar: any = "hello";

myVar = false;

// Array

var StringArray: string[] = ["item1", "item2", ""];
var NumberArray: number[] = [1, 2, 3, 4];
var BooleanArray: boolean[] = [true, false, true, true, false];
var AnyArray: any[] = [true, 1, "tuhermana", [], {}];

// Tuple

var strNumTuple: [string, number];

strNumTuple = ["hola", 22222];

strNumTuple = ["world", 143];

// void, undefined, null
//let myVoid: void = null;

//let myNull: null = null;

//let myUndefined: undefined = undefined;

// Functions

function getSum (num1: number, num2: number): number {
	return num1 + num2;
}


let mySum = function(num1: number | string, 
					num2: number | string): number {
	if(typeof(num1) === 'string'){
		num1 = parseInt(num1);
	}
	if(typeof(num2) === 'string') {
		num2 = parseInt(num2);
	}
	return num1 + num2;
}


/* function getName(firstName: string, 
				 lastName?: string): string {
	if(lastName == undefined) {
		return firstName;
	}
	return `${firstName} ${lastName}`;
}
*/

// function myVoidFunction() {
//	return;
//}

interface ITodo {
	title: string;
	text: string;
}

function showTodo(todo: ITodo) {
	console.log(`${todo.title} - ${todo.text}`);
}

let myTodo: ITodo = {title: 'Eat eat', text: 'lorem'};


showTodo(myTodo)

// Clases

class User {
	private name: string;
	private lastname: string;
	public email: string;
	protected age: number;

	constructor(name: string, 
				email: string, 
				lastname: string,
				age: number){
				this.name = name;
				this.email = email;
				this.lastname = lastname;
				this.age = age;
	}

	register() {
		console.log(`${this.name} is registered!`);
	}

	showMeAge() {
		return this.age;
	}

	public ageInYears(){
		return this.age + ' years';
	}

	payInvoice() {
		console.log(`${this.name} paide invoice`);
	}
}


var john = new User('Yisus', 'Rodriguez', 'yisus@gmail.com', 23);

console.log(john.ageInYears());

class Member extends User {
	id: number;


	constructor(id, name, lastname, email, age) {
		super(name, email, lastname, age);
		this.id = id;
	}

	payInvoce(){
		super.payInvoice();
	}
}

var gordon = new Member(1, 'Gordon', 'Freeman', 'gordon@gmail.com', 44);
gordon.payInvoice();