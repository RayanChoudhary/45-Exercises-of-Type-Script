/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
 Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
number.forEach(function (onenumber) {
    var oridinalnumber;
    if (onenumber === "1")
        oridinalnumber = "st";
    else if (onenumber === "2")
        oridinalnumber = "nd";
    else if (onenumber === "3")
        oridinalnumber = "rd";
    else
        oridinalnumber = "th";
    console.log("".concat(onenumber).concat(oridinalnumber));
});
//declare an array
var member = ["Shayan", "Rayan", "Alishba", "Manan"];
for (var _i = 0, member_1 = member; _i < member_1.length; _i++) {
    var onemember = member_1[_i];
    var surname = void 0;
    if (onemember === "Shayan")
        surname = "jutt";
    else if (onemember === "Rayan")
        surname = "Choudhary";
    else if (onemember === "Alishba")
        surname = "Choudhary";
    else
        surname = "Jutt";
    console.log("".concat(onemember, " ").concat(surname));
}
