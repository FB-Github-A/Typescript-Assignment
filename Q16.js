// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more 
// guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.
// name array
var guestArray = ["vicky", "sahar", "hamza"];
// can not make dinner
var canNotAttend = "hamza";
// invite new guest
var newGuest = "nabeel";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
// send message
// guestArray.map((item)=> console.log(`Hello,${item} you are invited to dinner`));
console.log("Welcome all we found a bigger dinner table!");
guestArray.unshift("shahood");
var middleGuest = "farwa";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("maha");
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " You are invited to dinner")); });
