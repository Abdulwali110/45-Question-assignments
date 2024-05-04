let favPizza: string[] =
    [
        "Mushroom and Olive Pizza", "Hawaiian Pizza",
        "Pepperoni Pizza", "BBQ Chicken Pizza"
    ]

for (let i = 0; i < favPizza.length; i++) {
    console.log("Pizza List : " + favPizza[i]);
}

for (let i = 0; i < favPizza.length; i++) {
    let message: String = `\n I like This ${favPizza[i]}  so much`
    console.log(message);

}
console.log("\n such as I really love pizza!");