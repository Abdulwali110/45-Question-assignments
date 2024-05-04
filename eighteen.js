var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fav_Placecs = ["islamabad", "london", "tokyo", "america", "kalam", "paris"];
console.log('\nhere array original order :');
console.log(fav_Placecs);
console.log('\nPrint your array in alphabetical order without modifying the actual list.:');
console.log(__spreadArray([], fav_Placecs, true).sort());
console.log('\nhere array original order :');
console.log(fav_Placecs);
console.log('\nreverse alphabetical order without changing the order:');
console.log(__spreadArray([], fav_Placecs, true).sort().reverse());
console.log('\nhere array still original order :');
console.log(fav_Placecs);
console.log('\nReverse the order of your list. Print the array to show that its order has changed :');
console.log(fav_Placecs.reverse());
console.log('\nReverse the order of your list again. Print the list to show it’s back to its original order:');
console.log(fav_Placecs.reverse());
console.log('\nSort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed:');
console.log(fav_Placecs.sort());
console.log('array sorted and convert list reverse');
console.log(fav_Placecs.sort().reverse());
