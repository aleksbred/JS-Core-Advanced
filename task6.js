class Member{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    salaryYear(){
        return this.salary*12;
    }
}

class Manager extends Member{
    constructor(name, salary, dep){
        super(name, salary);
        this.dep = dep;
    }

    salaryYearWithBonus(bonus){
        return this.salaryYear() + bonus*12;
    }
}

const person1 = new Manager('Petya', 100, 'Zavod');
const person2 = new Manager('Vasya', 1000, 'Dvornik');

console.log(person1.salaryYearWithBonus(5));
console.log(person2.salaryYearWithBonus(10));