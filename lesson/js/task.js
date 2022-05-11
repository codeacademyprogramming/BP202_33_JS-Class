class Car{
    constructor(brand,model,price,year){
        this.Brand = brand;
        this.Model = model;
        this.Price = price;
        this.Year = year;
    }
}

class CarStore{
    constructor(){
        this.Cars = [];
    }
    AddCar(car){
        this.Cars[this.Cars.length] = car;
    }
}



let count;

do{
    count = prompt("Nece masin var?");
}
while(isNaN(count))

let store = new CarStore();

for(let i=0;i<count;i++){
    let car = new Car();

    car.Brand = prompt(`${i+1}. nomreli masinin Brand deyeri:`);
    car.Model = prompt(`${i+1}. nomreli masinin Model deyeri:`);

    let price;
    do{
        price = prompt(`${i+1}. nomreli masinin Price deyeri:`);
    }
    while(isNaN(price))
    car.Price = Number(price);

    let year;
    do{
        year = prompt(`${i+1}. nomreli masinin Year deyeri:`);
    }
    while(isNaN(year))
    car.Year = Number(year);


    store.AddCar(car);
}


for(let i=0;i<store.Cars.length;i++){
    console.log(`Brand: ${store.Cars[i].Brand} - Model: ${store.Cars[i].Model} - Price: ${store.Cars[i].Price}`)
}

store.Cars.forEach(x=>{
    console.log(x.Brand)
})