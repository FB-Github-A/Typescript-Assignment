
// name array
let guestArray:string[] = ["vicky","sahar","hamza"];

// can not make dinner
let canNotAttend:string = "hamza";
// invite new guest
let newGuest :string = "nabeel";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;


console.log("Welcome all we found a bigger dinner table!");

guestArray.unshift("shahood");

let middleGuest:string = "farwa";
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);


guestArray.push("maha");


guestArray.map((item)=> console.log(`\nDear ${item} You are invited to dinner`))


