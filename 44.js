function makeSandwich(recipe) {
    if (recipe.length > 0) {
        console.log("this is the recipe :");
        recipe.forEach(function (make, i) {
            console.log("".concat(i + 1, ".").concat(make));
        });
        console.log('\n');
    }
    else {
        console.log("please write some recipe ");
    }
}
makeSandwich(["tomato", "chicken", "mayounise"]);
makeSandwich(["china", "cheese"]);
makeSandwich(["bannaa", "jelly", "mango", "pineapple"]);
makeSandwich([]);
