/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let userName = ["Arsalan","Irfan","Admin","Shayan","Noman"]

userName = []

if (userName.length === 0){
    console.log("your array is empty we need to find some users")
} else {
userName.forEach(username => {
    if(username === "Admin")
        console.log(`Hello ${username}, would you like to see a status report?`)
    else {
        console.log(`Hello ${username},thank you for logining in again `)
    }
})};
