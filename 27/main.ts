/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

// declare variable
let alienColour = "Green";

// using if and else if condition
if (alienColour === "Green"){
    console.log("if You shot green colour alien you earned 5 points")
}
else if (alienColour === "Yellow"){
    console.log("if you shot yellow colour alien you earned 10 points")
}
else if(alienColour === "Red"){
    console.log("if you shot red colour alien you earned 15 points")
}

// version 2 

let alienColour2 = "Yellow";

if (alienColour2 === "Green"){
    console.log("if You shot green colour alien you earned 5 points")
}
else if (alienColour2 === "Yellow"){
    console.log("if you shot yellow colour alien you earned 10 points")
}
else if(alienColour2 === "Red"){
    console.log("if you shot red colour alien you earned 15 points")
}

// version 3

let alienColour3 = "Red";

if (alienColour3 === "Green"){
    console.log("if You shot green colour alien you earned 5 points")
}
else if (alienColour3 === "Yellow"){
    console.log("if you shot yellow colour alien you earned 10 points")
}
else if(alienColour3 === "Red"){
    console.log("if you shot red colour alien you earned 15 points")
}