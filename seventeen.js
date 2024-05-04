var personal_Guest = [
    "Abdullah Rizvi", "Hamza Rizvi", "Wali Rizvi",
    "Hussain Shah", "Abdul wali", "Haris",
    "Abdul hadi",
];
console.log(personal_Guest);
for (var _i = 0, personal_Guest_1 = personal_Guest; _i < personal_Guest_1.length; _i++) {
    var guest = personal_Guest_1[_i];
}
while (personal_Guest.length > 2) {
    var removed_Person = personal_Guest.pop();
    console.log("Sorry ".concat(removed_Person, " I can't invite you For dinner."));
}
personal_Guest.forEach(function (stillGuest) {
    console.log("still you are ".concat(stillGuest, " invited for a dinner."));
});
var empty_Array = personal_Guest.splice(personal_Guest.length, 0);
console.log("guest list after dinner ".concat(empty_Array, ":"));
