var loginPortal = ["Admin", "Adil", "Asif", "okasha bhai", "Abdullah", "sir qasim", "sir bilal"];
function CheckAdmin() {
    loginPortal.map(function (items, i) {
        items = items.toLowerCase();
        items.match("admin") ? ///// USE  ternary operator,
            console.log(" Hello admin, would you like to see a status report? \n") :
            console.log(" Hello ".concat(items, ", thank you for logging in again \n"));
    });
}
CheckAdmin();
