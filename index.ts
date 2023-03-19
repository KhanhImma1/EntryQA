// Inheritance
// Interface
interface Human {
    name: string;
    gender: string;
}

interface Member extends Human {
    id: number;
}

let mem1: Member = {
    id: 1,
    name: "Khanh",
    gender: "Male"
}
console.log(mem1.id + mem1.name + mem1.gender);

// Abstract
abstract class Person {
    abstract name: string;

    display(): void {
        console.log(this.name);
    }
}

class Employee extends Person {
    name: string;
    empCode: number;

    constructor(name: string, code: number) {
        super(); // class con phải gọi hàm super

        this.empCode = code;
        this.name = name;
    }
}

let emp: Person = new Employee("Imma", 100);
emp.display(); //kết quả: Imma

// Data Modifiers
class Student {
    private id: number;
    public name: string;
    protected style: string;
}

let Stu = new Student();
Stu.name = "Khanh"; // OK
// Stu.id = 12; // Compiler Error
// Stu.style = "Hiphop"; // Compiler Error

// Overloading
function add(a: string, b: string): string;

function add(a: number, b: number): number;

function add(a: any, b: any): any {
    return a + b;
}

add("Hello ", "World"); // returns "Hello World" 
add(10, 20); // returns 30 

// Overriding
class Vehicle {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    getPrice(price: number) {
        return `${this.name}'s price is ${price} dollards`
    }

}

class Motor extends Vehicle {

    price: number;

    constructor(name: string, price: number) {
        super(name)
        this.price = price
    }

    getPrice() {
        return super.getPrice(this.price)
    }

}

class Bike extends Vehicle {


    constructor(name: string) {
        super(name)
    }

    getPrice(price: number) {
        return `${this.name} worths ${price} dollards`
    }

}



let motorBike1 = new Motor("Motor Bike", 1000)
let bike1 = new Bike("Bicycle")

console.log(motorBike1.getPrice()) // Motor Bike's price is 1000 dollards
console.log(bike1.getPrice(500)) // Bicycle worths 500 dollards

// Static
class Circle {
    static pi = 3.14;

    static getArea(radius: number) {
        return this.pi * radius * radius;
    }

    getCircum(radius: number): number {
        return 2 * Circle.pi * radius;
    }
}

Circle.getArea(5); // returns 78.5

let circleObj = new Circle();
circleObj.getCircum(5) // returns 31.4000000
// circleObj.getArea(); // ko thể call static function