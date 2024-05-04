var favPizza = [
    "Mushroom and Olive Pizza", "Hawaiian Pizza",
    "Pepperoni Pizza", "BBQ Chicken Pizza"
];
for (var i = 0; i < favPizza.length; i++) {
    console.log("Pizza List : " + favPizza[i]);
}
for (var i = 0; i < favPizza.length; i++) {
    var message = "\n I like This ".concat(favPizza[i], "  so much");
    console.log(message);
}
console.log("\n such as I really love pizza!");
