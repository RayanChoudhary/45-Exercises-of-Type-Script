/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs,
 such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/

 // createa function to store parametrs 
 function create_car (manufacturer,model,...options){
    // initialize the object for store parameters value
    let car = {
        manufacturer:manufacturer,
        model:model,
    };
//  Adding option parameter in the car
    options.forEach(option => {
       let [key, value]  = option.split(":");
       car [key.trim()]= value.trim()
    }) 
// return the value
    return car
 }
// create variable for calling function
 let my_car = create_car("Toyota","Corolla","colour:Black","Sunroof: true")

 // print the message
 console.log(my_car) 