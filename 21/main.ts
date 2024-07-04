/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/

interface Car {
    carName:string
    model:number
    colour:string
    function:string
    price:number
}

let car = {
    carname:"Corolla Grande",
    model:2024,
    colour:"PURE WHITE",
    Function:"Sunroof, power staring, limited Addition",
    price:8000000
}

console.log(car)