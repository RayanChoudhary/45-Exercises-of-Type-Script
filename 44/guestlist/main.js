var guestList = ["Toshi", "Arsalan", "Irfan"];
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", You are invited for dinner")); });
var dontCome = guestList[0];
console.log(dontCome, "can not come");
guestList.splice(0, 1, "Wasi");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", You are Invited....")); });
console.log("i Found i big diiner table for dinner");
guestList.unshift("Huzaifah");
guestList.push("Sibtain");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Haseeb");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", you are invited for dinner today")); });
console.log("Unfortunately! i have less space so i invited only two guests for dinner");
while (guestList.length > 2) {
    var removedguest = guestList.pop();
    console.log("".concat(removedguest, ",  sorry you can\u2019t invite them to dinner."));
}
console.log("Invitation for remamining Two guests");
guestList.forEach(function (guest) { return console.log("".concat(guest, ", You are still invited")); });
guestList.pop();
guestList.pop();
console.log("Empty:", guestList);
