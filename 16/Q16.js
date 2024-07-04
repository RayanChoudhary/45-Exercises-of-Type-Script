/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
 informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for each person in your list.*/
//Making guest List
var guestList = ["Sibtain", "Toshi", "Arsalan", "Irfan"];
//one guest whonot come
var dontCome = guestList[0];
//print a message of thier excuse 
console.log(dontCome, "cannot come due to of some emergency");
//add and removing person
guestList.splice(0, 1, "Noman");
//print a message for inform
console.log("GOod News! i found a big dinner table");
// add new guest in the beginning of an array
guestList.unshift("Wasi");
//add new guest in the last of an array
guestList.push("Haseeb");
//making variable for storing middleindex in an array
var middleIndex = Math.floor(guestList.length / 2);
//add new guest in the middle of an array
guestList.splice(middleIndex, 0, "Huzaifah");
//sending invitation every guest one by one seperately
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", you Are invited for today dinner at my home")); });
