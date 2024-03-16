
// name array
let guestArray:string[] = ["vicky","sahar","hamza"];

// can not make dinner
let canNotAttend:string = "hamza";
// invite new guest
let newGuest :string = "nabeel";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

guestArray.unshift("shahood");

let middleGuest:string = "farwa";
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);


guestArray.push("hamza");
console.log(guestArray);

console.log("we can invite only two people for dinner!");

while(guestArray.length>2){
let removeguest = guestArray.pop();
console.log(`\nSorry ${removeguest} we cant invite you to for dinner!`);
}

guestArray.map((item)=> console.log(`\n${item} You are stil invited to dinner!`));

guestArray.pop();
guestArray.pop();
console.log(guestArray);

