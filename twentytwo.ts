let product: {
     product_Name: string,
     product_Price: number,
     product_Detail: string,
 }
 
 let products: Array<typeof product> = []
 
 products.push(
     {
         product_Name: "Oppo",
         product_Price: 29000,
         product_Detail: " I dont know "
     },
     {
         product_Name: "Oppo",
         product_Price: 29000,
         product_Detail: " I dont know "
     },
     {
         product_Name: "Oppo",
         product_Price: 29000,
         product_Detail: " I dont know "
     },
     {
         product_Name: "Oppo",
         product_Price: 29000,
         product_Detail: " I dont know "
     },
     {
         product_Name: "Oppo",
         product_Price: 29000,
         product_Detail: " I dont know "
     },
     {
         product_Name: "Oppo",
         product_Price: 29000,
         product_Detail: " I dont know "
     },
     {
         product_Name: "Oppo",
         product_Price: 29000,
         product_Detail: " I dont know "
     }
 )

 console.log(products);

 let chkIndex = 9
 console.log(`student NO : ${chkIndex}`, products[chkIndex]);
 
 products.forEach((pro, i) => {
     console.log(`
         product: ${pro.product_Name},
         price : ${pro.product_Price},
         description : ${pro.product_Detail},
         indexIn :${i}
     `);
 })