let guestlist1: string[] = ["Hayyan", "Abdullah", "Hussain"];
let canNotCome: string = guestlist1[0];

console.log(canNotCome + ' ' + "can't make the dinner");

let person: string = "Wali";
guestlist1[guestlist1.indexOf(canNotCome)] = person;

guestlist1.forEach(name => {
    console.log(`Dear ${name}, you are invited to dinner!`);
});

let name1: string = "Abdullah";
guestlist1.unshift(name1);

let name2: string = "Anas";
let index: number = Math.floor(guestlist1.length / 2);
guestlist1.splice(index, 0, name2);

let name3: string = "Ahmed"; // Added missing ":" after "name3"
guestlist1.push(name3);

guestlist1.forEach(name => {
    console.log(`Dear ${name}, you are invited for Dinner`);
});