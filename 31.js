var loginPortalUser = ["Admin", "Adil", "Asif", "okasha bhai", "Abdullah", "sir qasim"];
function userHandler(loginPortalUser) {
    if (loginPortalUser.length === 0) {
        console.log("we are find to user !");
        return;
    }
    else {
        loginPortalUser.map(function (items, i) {
            items = items.toLowerCase();
            items.match("admin ameen alam") ?
                console.log(" Hello admin, would you like to see a status report?") :
                console.log(" Hello ".concat(items, ", thank you for logging in again \n"));
        });
    }
}
console.log("\n\n array is not empty : \n");
userHandler(loginPortalUser);
loginPortalUser = [];
console.log("\n\n array is empty : \n");
userHandler(loginPortalUser);
