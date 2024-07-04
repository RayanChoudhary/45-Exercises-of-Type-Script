/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
//replace(/\b\w/g, (titlecasee) =>   regular function rigix..


let person_name = " Muhammad Rayan ";

//in lower_case.
console.log(person_name.toLocaleLowerCase());

//inuppercase.
console.log(person_name.toLocaleUpperCase());

//inTitlecase.
console.log(person_name.replace(/\b\w/g, (titlecasee) => titlecasee.toLocaleUpperCase()));
