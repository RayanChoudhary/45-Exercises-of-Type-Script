/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
  so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
//\n this is for new line in string
//\t this is use for space in string
//trim is use for removing whitespaces....
var my_Name = "Rayan Choudhary";
console.log("\n\t".concat(my_Name, " \t\n"));
console.log(my_Name.trim());
var withwhitespace = "\n\tGoverner Sindh\t\n";
console.log(withwhitespace);
var withoutWhitespace = (withwhitespace.trim());
console.log(withoutWhitespace);
var whitespaceName = ("\n\t Muhammad Rayan \t\n ");
console.log(whitespaceName);
var withoutWhitespaces = (whitespaceName.trim());
console.log(withoutWhitespaces);
