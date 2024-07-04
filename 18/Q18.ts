/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/


// store favorite places and print in its original order.
let favoritePlaces: string[] = ["Dubai","Brazil","China","America"];
console.log("Orignal order:", favoritePlaces);

// print array in alphabetical order without modifying the original list.
console.log("Alphabetical order:", [...favoritePlaces].sort());

// Print still in its orignal order.
console.log("Still Orignal order:", favoritePlaces);

// print array in reverse alphabetical order without modifying the original order.
console.log("Reverse alphabetical order:",[...favoritePlaces].reverse());

// Print still in its orignal order.
console.log("Still Orignal order:", favoritePlaces);

// print reverse order of the array list to show that its has changed
console.log("Reverse order:", favoritePlaces.reverse());

// print Again reverse order for back to its orignal order.
console.log("Reverse order for back to its orignal order:", favoritePlaces.reverse());

// print in alphabetical order of array list to show that its change
console.log("Alphabetical Order:", favoritePlaces.sort());

// print again reverse order of the array list.to show that its order has changed.
console.log("again Reverse order:", favoritePlaces.reverse());