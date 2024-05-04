var product;
var products = [];
products.push({
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
}, {
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
}, {
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
}, {
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
}, {
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
}, {
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
}, {
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
});
console.log(products);
var chkIndex = 9;
console.log("student NO : ".concat(chkIndex), products[chkIndex]);
products.forEach(function (pro, i) {
    console.log("\n         product: ".concat(pro.product_Name, ",\n         price : ").concat(pro.product_Price, ",\n         description : ").concat(pro.product_Detail, ",\n         indexIn :").concat(i, "\n     "));
});
