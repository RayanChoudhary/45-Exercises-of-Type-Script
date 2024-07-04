/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects
 as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times,
  using a different number of arguments each time.*/ 

function MakeSandich (...items:string[]){
  console.log("\n Make a Sandwich with the following items")
  items.forEach(sandwich => console.log(sandwich))
   
console.log("\n Now Enjoy The Sandwich")
  
}

MakeSandich("Bread","Egg","Salad")
MakeSandich("Bread","Chiken","Mayo","Ketchep","Egg")
MakeSandich("BRead","Chiken")



