
var numbers = [10,5,3,13,30,41];


// console.log(`SumEven: ${SumEven(numbers)}`)
console.log(`SumEven: ${SumOfNumbers(numbers,IsEven)}`)
// console.log(`SumOdd: ${SumOdd(numbers)}`)
console.log(`SumOdd: ${SumOfNumbers(numbers,function(num){return num%2==1;})}`)

// console.log(`SumDividedBy3: ${SumDividedBy3(numbers)}`)
console.log(`SumDividedBy3: ${SumOfNumbers(numbers,x=>x%3==0)}`)




function IsEven(num){
    return num%2==0;
}

function SumEven(arr){
    let sum=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum+=arr[i];
        }
    }

    return sum;
}

function SumOdd(arr){
    let sum=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            sum+=arr[i];
        }
    }

    return sum;
}

function SumDividedBy3 (arr){
    let sum=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]%3==0){
            sum+=arr[i];
        }
    }

    return sum;
}


function SumOfNumbers(arr, check){
    let sum=0;

    for(let i=0;i<arr.length;i++){
        if(check(arr[i])){
            sum+=arr[i];
        }
    }

    return sum;
}


let std1 = {
    Name : "Hikmet",
    Surname : "Abbasov",
    "Exams Point":55,
    GetFullName: function(){
        return this.Name+" "+this.Surname;
    }
};

std1.Surname = "Abbasova";
std1.Gender = "Male";
console.log(std1.GetFullName())
console.log(std1["Gender"])
console.log(std1["Exams Point"])

class Employee{
    constructor(name,surname,position){
        this.Name = name;
        this.Surname = surname;
        this.Position = position,
        this.GetInfo = function(){
            return `FullName: ${this.Name} ${this.Surname} - Position: ${this.Position}`;
        }
    }
}

let emp1 = new Employee("Name1","Surname1","Muhasib");
emp1.Salary = 550;

console.log(emp1.Name+' - '+emp1.Salary)

let emp2 = new Employee("Name2","Surname2","Karguzar");

console.log(emp2.GetInfo())


class Department{
    constructor(name,limit){
        this.Name = name;
        this.Limit = limit;
        this.Employees = [];
        this.AddEmployee = function(emp){
            this.Employees[this.Employees.length] = emp;
        }
    }
}


let dep1 = new Department('IT',5);
dep1.AddEmployee(emp2);
dep1.AddEmployee(emp1);
dep1.AddEmployee(new Employee('Nermin','Abbaszade','Frontend dev'));



console.log("==============")
for(let i=0;i<dep1.Employees.length;i++)
{
    console.log(dep1.Employees[i].GetInfo())
}


class Human{
    constructor(name,surname){
        this.Name = name;
        this.Surname = surname;
    }
}

class Teacher extends Human{
    constructor(speciality,name,surname){
        super(name,surname);
        this.Speciality = speciality;
    }
}

let tch1 = new Teacher('Huquq','Hikmet','Abbasov');
