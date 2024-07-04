/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
  so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/

  //\n this is for new line in string
  //\t this is use for  add white spaces
  //trim is use for removing whitespaces.... 

  

  let whitespaceName = ("\n\t Muhammad Rayan \t\n ");
  console.log(whitespaceName)

  let withoutWhitespaces = (whitespaceName.trim());
  console.log(withoutWhitespaces) 