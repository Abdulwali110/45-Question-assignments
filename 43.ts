
let magicianNames: Array<string> = ["David Copperfield", "Dynamo", "Houdini", "Penn", "Teller"]
console.log("This is all magician list :");
const show_magicians = (magicianNames: string[]): void => {
    for (const name of magicianNames) {
        console.log(`${name}`);
    }
}
function make_great(magicianNames: string[]): string[] {
    let greet_message: Array<string> = magicianNames.map(greet => `hello how are you ${greet}`)
    return greet_message
}
let modified_Array: string[] = make_great(magicianNames)
show_magicians(magicianNames)
console.log(" \nhere greet funtion ");
show_magicians(modified_Array)
console.log("\nthis is orginal array:");
console.log(magicianNames);