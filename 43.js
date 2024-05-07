var magicianNames = ["David Copperfield", "Dynamo", "Houdini", "Penn", "Teller"];
console.log("This is all magician list :");
var show_magicians = function (magicianNames) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var name_1 = magicianNames_1[_i];
        console.log("".concat(name_1));
    }
};
function make_great(magicianNames) {
    var greet_message = magicianNames.map(function (greet) { return "hello how are you ".concat(greet); });
    return greet_message;
}
var modified_Array = make_great(magicianNames);
show_magicians(magicianNames);
console.log(" \nhere greet funtion ");
show_magicians(modified_Array);
console.log("\nthis is orginal array:");
console.log(magicianNames);
