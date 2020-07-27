var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hello World');
// Types
var myString = "Hello World";
myString = 22 + "";
var myNumber = 24;
var myBool = true;
var myVar = "hello";
myVar = false;
// Array
var StringArray = ["item1", "item2", ""];
var NumberArray = [1, 2, 3, 4];
var BooleanArray = [true, false, true, true, false];
var AnyArray = [true, 1, "tuhermana", [], {}];
// Tuple
var strNumTuple;
strNumTuple = ["hola", 22222];
strNumTuple = ["world", 143];
// void, undefined, null
//let myVoid: void = null;
//let myNull: null = null;
//let myUndefined: undefined = undefined;
// Functions
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
var myTodo = { title: 'Eat eat', text: 'lorem' };
showTodo(myTodo);
// Clases
var User = /** @class */ (function () {
    function User(name, email, lastname, age) {
        this.name = name;
        this.email = email;
        this.lastname = lastname;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.ageInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var john = new User('Yisus', 'Rodriguez', 'yisus@gmail.com', 23);
console.log(john.ageInYears());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, lastname, email, age) {
        var _this = _super.call(this, name, email, lastname, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoce = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var gordon = new Member(1, 'Gordon', 'Freeman', 'gordon@gmail.com', 44);
gordon.payInvoice();
