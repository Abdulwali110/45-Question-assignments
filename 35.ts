let animals: string[] = ["Cats", "Monkey", "Horses", "Dogs"]
console.log("This is Animals List:");
for (let i = 0; i < animals.length; i++) {
    const element = animals[i];
    console.log(element);
}
let catDetail = " often keep themselves clean and have an interest in playing."
let monkeyDetail = "are intelligent and curious, exhibiting quite complex social behaviors."
let hourseDetail = " strength and stamina make them great companions for racing or riding."
let dogsDetail = " are known for their loyalty and affection towards their owners."
animals.forEach((animal) => {
    if (animal === "Cats") {
        console.log(`\n ${animal} ${catDetail} `);
    } else if (animal === "Monkey") {
        console.log(`\n ${animal} ${monkeyDetail} `);
    } else if (animal === "Horses") {
        console.log(`\n ${animal} ${hourseDetail} `);
    } else if (animal === "Dogs") {
        console.log(`\n ${animal} ${dogsDetail} `);
    }
})

console.log('\n  Any of these animals would make a great pet!');