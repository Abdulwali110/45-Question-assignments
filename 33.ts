let oridanyNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < oridanyNumber.length; i++) {
    let compare: string = ""; 
    if (oridanyNumber[i] === 1) {
        compare = "st"
    } else if (oridanyNumber[i] === 2) {
        compare = "nd"
    } else if (oridanyNumber[i] === 3) {
        compare = "rd"
    } else {
        compare = "th"
    }
    console.log(`${oridanyNumber[i]}${compare}`);
}