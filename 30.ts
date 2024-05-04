let loginPortal: Array<string> = ["Admin", "Adil", "Asif", "okasha bhai", "Abdullah", "sir qasim", "sir bilal"]


function CheckAdmin() {
    loginPortal.map((items, i) => {
        items = items.toLowerCase();
        items.match("admin") ? ///// USE  ternary operator,
            console.log(" Hello admin, would you like to see a status report? \n") :
            console.log(` Hello ${items}, thank you for logging in again \n`);
    })
}
CheckAdmin()