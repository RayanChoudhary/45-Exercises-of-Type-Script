let guestList = ["Toshi","Arsalan","Irfan"];

guestList.forEach(guest => console.log(`Salam ${guest}, You are invited for dinner`))

let dontCome = guestList[0]
console.log(dontCome, "can not come")

guestList.splice(0,1,"Wasi")

guestList.forEach(guest => console.log(`Salam ${guest}, You are Invited....`));

console.log("i Found i big diiner table for dinner")

guestList.unshift("Huzaifah")

guestList.push("Sibtain")

let middleIndex:number = Math.floor(guestList.length /2)
guestList.splice(middleIndex,0,"Haseeb")

guestList.forEach(guest => console.log(`Salam ${guest}, you are invited for dinner today`))

console.log("Unfortunately! i have less space so i invited only two guests for dinner");

while (guestList.length > 2) {
    let removedguest = guestList.pop();
    console.log(`${removedguest},  sorry you can’t invite them to dinner.`)
}

console.log("Invitation for remamining Two guests") 

guestList.forEach(guest => console.log(`${guest}, You are still invited`)) 

guestList.pop()
guestList.pop()

console.log("Empty:", guestList)