var guestlist1 = ["Hayyan", "Abdullah", "Hussain"];
var canNotCome = guestlist1[0];
console.log(canNotCome + ' ' + "can't make the dinner");
var person = "Wali";
guestlist1[guestlist1.indexOf(canNotCome)] = person;
guestlist1.forEach(function (name) {
    console.log("Dear ".concat(name, ", you are invited to dinner!"));
});
var name1 = "Abdullah";
guestlist1.unshift(name1);
var name2 = "Anas";
var index = Math.floor(guestlist1.length / 2);
guestlist1.splice(index, 0, name2);
var name3 = "Ahmed"; // Added missing ":" after "name3"
guestlist1.push(name3);
guestlist1.forEach(function (name) {
    console.log("Dear ".concat(name, ", you are invited for Dinner"));
});
