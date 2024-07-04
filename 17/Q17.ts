/*Shrinking Guest List:You just found out that your new dinner table won’t arrive in time for the dinner,and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
 print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure
 you actually have an empty list at the end of your program.*/

 //Making guest List
 let guestList = ["Sibtain","Toshi","Arsalan","Irfan"];

 //one guest whonot come
 let dontCome =guestList[0];
 
 //print a message of thier excuse 
 console.log(dontCome, "cannot come due to of some emergency");
 
 //add and removing person
 guestList.splice(0,1,"Noman");
 
 //print a message for inform
 console.log("GOod News! i found a big dinner table");
 
 // add new guest in the beginning of an array
 guestList.unshift("Wasi");
 
 //add new guest in the last of an array
 guestList.push("Haseeb");
 
 //making variable for storing middleindex in an array
 let middleIndex:number =Math.floor(guestList.length /2);
 
 //add new guest in the middle of an array
 guestList.splice(middleIndex,0,"Huzaifah");
 
 //sending invitation every guest one by one seperately
 guestList.forEach(guest => console.log(`Salam ${guest}, you Are invited for today dinner at my home`));

 // inform guest that i have space for only two guests for dinner
 console.log("unfortunately dinner table wont arrive in time for the dinner,so i have space for only two guests.");

 //using while loop and pop for removing the guests from array
 while(guestList.length > 2){
    let removedGuests = guestList.pop()
 console.log(`${removedGuests}, sorry you cant invite them to dinner.`)
 }

 // invitation for remaining guests
 console.log("Invitation for remaining two guests");

guestList.forEach(twoguest => console.log(`${twoguest}you are still invited`))

 // removing remaining two guests
 guestList.pop();
 guestList.pop();

console.log(guestList);