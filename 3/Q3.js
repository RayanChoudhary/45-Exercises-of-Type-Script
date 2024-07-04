/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
//replace(/\b\w/g, (titlecasee) =>   regular function rigix..
var personName = "Muhammad Rayan";
console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.replace(/\b\w/g, function (titlecasee) { return titlecasee.toLocaleUpperCase(); }));
var Name = "sHayn Jutt";
console.log(Name.toLocaleLowerCase());
console.log(Name.toLocaleUpperCase());
console.log(Name.replace(/\b\w/g, function (titlecase) { return titlecase.toLocaleUpperCase(); }));
var name1 = "Abdul manan";
console.log(name1.toLocaleLowerCase());
console.log(name1.toLocaleUpperCase());
console.log(name1.replace(/\b\w/g, function (titlecase) { return titlecase.toLocaleLowerCase(); }));
// let person_name = " Muhammad Rayan ";
// //in lower_case.
// console.log(person_name.toLocaleLowerCase());
// //inuppercase.
// console.log(person_name.toLocaleUpperCase());
// //inTitlecase.
// console.log(person_name.replace(/\b\w/g, (titlecasee) => titlecasee.toLocaleUpperCase()));
