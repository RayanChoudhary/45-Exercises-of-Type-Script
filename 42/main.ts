/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by
 adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/ 

 function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
 };

 function make_great(magicians:string[]){
   return magicians.map(name => `The Great ${name}`)
 };

 let magiciansName = ["RAyan","Harry Potter","Shayan"];
 
 let GreatMagicians = make_great(magiciansName);
 
 show_magicians(GreatMagicians) 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//  function show_magicians(magicians:string[]){
//     magicians.forEach(name => console.log(name));
//  }

//  function make_great(magicians:string[]){
//      return magicians.map(name => `The Great ${name}`)
//  } 

//   let magiciansName = ["Shayan","Rayan","Noman"]; 

//   let GreatMagicians = make_great(magiciansName);

//  show_magicians(GreatMagicians) 