let magicianNames: Array<string> = ["David Copperfield", "Dynamo", "Houdini", "Penn", "Teller"]
const show_magicians = (magicianNames: string[]): void => {
    for (const name of magicianNames) {
        console.log(name);
    }
}
show_magicians(magicianNames)