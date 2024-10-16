console.log("welcome to typescript");
// function display(){
//     console.log("welcome")
// }
// display()
// var b="hai"
// console.log(b)
// function show(){
//     console.log("welcome")
//     var a = "hello"
//     console.log(a);
//     console.log(b);
// }
// show()
// console.log(a)
// function greet(name:string):string{
//     return "hello"+name;
// }
// console.log(greet("ammu"));
// var a:string="anu"
// console.log(a)
// var b:number=100;
// console.log(b)
// var c:boolean=true;
// console.log(c)
// var aa:any="anu";
// console.log(aa)
// var bb:any=100;
// console.log(bb)
// var cc:any=true;
// console.log(cc)
// var dd:any="hai"
// dd="hello"
// dd=10
// console.log(dd)
// let fruits:string[] =['apple','orange','banana'];
// console.log(fruit)
// function display()
// {
//     var fruits:string[] =['apple','orange','banana'];
//     console.log('arrays:' +fruits[0]);
// }
// display();
// for (let s of fruit){
//     console.log(s)
// }
// for (let u in fruit){
//     console.log(fruit[u])
// }
var obj = { "name": "ammu", "mark": 100 };
console.log(obj.name);
console.log(obj.mark);
for (var i in obj) {
    console.log(i);
}
for (var i in obj) {
    console.log(obj[i]);
}
var Student = /** @class */ (function () {
    function Student(id, name, mark) {
        this.id = id;
        this.name = name;
        this.mark = mark;
    }
    Student.prototype.show = function () {
        console.log(this.id + " " + this.name + " " + this.mark);
    };
    return Student;
}());
var obj1 = new Student(1002, "anu", 99);
// obj1.name="ammu"
// obj1.id=1001;
// obj1.mark=100;
obj1.show();
