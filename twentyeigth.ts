let age: number = 25

if (age < 2) {
    console.log(`Age is ${age} that the person  is a baby.`);
} else if (age >= 2 && age < 4) {
    console.log(`Age is ${age} that the person  is a toddler.`);
} else if (age >= 4 && age < 13) {
    console.log(`Age is ${age} that the person  is a kid.`);
} else if (age >= 13 && age < 20) {
    console.log(`Age is ${age} that the person  is a young.`);
} else if (age >= 13 && age < 20) {
    console.log(`Age is ${age} that the person  is a teenager.`);
} else if (age >= 25 && age < 50) {
    console.log(`Age is ${age} that the person  is a elder.`); // true beacuse both side are true
}