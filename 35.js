var animals = ["Cats", "Monkey", "Horses", "Dogs"];
console.log("This is Animals List:");
for (var i = 0; i < animals.length; i++) {
    var element = animals[i];
    console.log(element);
}
var catDetail = " often keep themselves clean and have an interest in playing.";
var monkeyDetail = "are intelligent and curious, exhibiting quite complex social behaviors.";
var hourseDetail = " strength and stamina make them great companions for racing or riding.";
var dogsDetail = " are known for their loyalty and affection towards their owners.";
animals.forEach(function (animal) {
    if (animal === "Cats") {
        console.log("\n ".concat(animal, " ").concat(catDetail, " "));
    }
    else if (animal === "Monkey") {
        console.log("\n ".concat(animal, " ").concat(monkeyDetail, " "));
    }
    else if (animal === "Horses") {
        console.log("\n ".concat(animal, " ").concat(hourseDetail, " "));
    }
    else if (animal === "Dogs") {
        console.log("\n ".concat(animal, " ").concat(dogsDetail, " "));
    }
});
console.log('\n  Any of these animals would make a great pet!');
