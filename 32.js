var current_users = ["wali", "Asif", "Ali", "AZEEM", "Sahil", "talal"];
var new_users = ["abdullah", "Asif", "shahzaib", "azeem", "abid", "TALAL"];
function checkExistUser(current_users, new_users) {
    var cureentUsertoLower = current_users.map(function (exist) { return exist.toLowerCase(); });
    new_users.forEach(function (item) {
        var newusertoLower = item.toLowerCase();
        if (cureentUsertoLower.includes(newusertoLower)) {
            console.log("".concat(item, " This username is alreay Exist \n"));
        }
        else {
            console.log("".concat(item, " This username is Availbe \n"));
        }
    });
}
checkExistUser(current_users, new_users);
