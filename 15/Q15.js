/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite.

  Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
// invitation Guest List
var GuestList = ["Toshi", "Mashood", "Rehman", "Huzaifah", "Noman", "Shayan"];
// One guest which can not come 
var cantCome = GuestList[2];
console.log("\n", cantCome, "Cannot come due to of some emergency");
// Replace guest who cant come to a new guest
GuestList.splice(2, 1, "Sibtain");
// Using for Each method to print the invitation everyone seperatly with thier names
GuestList.forEach(function (guest) { return (console.log("\n HEllo ".concat(guest, " you are inviyed fro dinner today"))); });
// // Guest List Which are invited 
// let guestList = ["Toshi","Arsalan","Irfan","Mashood","Huzaifah"];
// // One Guest Which Can not come 
// let dontcome = guestList[4];
// console.log(dontcome, "canot come due to of some emergency");
// // Replace The Guest Which cannot come TO A new new guest
// guestList.splice(4,4,"Rehman");
// guestList.forEach(guest => console.log(`\nSalam ${guest}, you have invited for dinner tody at my home`));
