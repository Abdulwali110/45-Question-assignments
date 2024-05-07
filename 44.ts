function makeSandwich(recipe: string[]): void {
     if (recipe.length > 0) {
         console.log("this is the recipe :");
         recipe.forEach((make, i) => {
             console.log(`${i + 1}.${make}`);
         })
         console.log('\n');
     }else{
         console.log("please write some recipe ");
         
     }
 }
 makeSandwich(["tomato", "chicken", "mayounise"]);
 makeSandwich(["china", "cheese"]);
 makeSandwich(["bannaa", "jelly", "mango", "pineapple"]);
 makeSandwich([]);
