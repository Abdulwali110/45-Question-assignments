const new_shirt = (message: string, size: string):void => {
     console.log(`title:${message}, size:${size} \n `);
 }
 new_shirt("Keep Smiling", "Medium")
 let shirtObject: {
     name: string;
     size: string
 }
 let shirts: Array<typeof shirtObject> = []
 shirts.push(
     {
         name: "Stay positive",
         size: "Extra large"
     }
 ) 
 shirts.push(
     {
         name: "Keep Smiling",
         size: "large"
     }
 )
 shirts.push(
     {
         name: "Calm Down",
         size: "Madium"
     }
 )
 shirts.push(
     {
         name: "Keep it Up",
         size: "small"
     }
 )
 shirts.push(
     {
         name: "Hustle Hard",
         size: "Extra Hard"
     }
 )
 console.log('This is branded shirts:');

 const printShirt = (shirts: Array<typeof shirtObject>): void => {
     shirts.forEach((shirt) => {
         console.log(`
          title : ${shirt.name},
          Size : ${shirt.size}
          --------------------------\n
         `);
     });
 }
 printShirt(shirts)