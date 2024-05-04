

let student: object =
{
    name: "Adil Malik",
    age: 17,
    roll_numer: 110,
    class: 10
}
let students: Array<typeof student> = []

let student2: object = {
    name: "abdullah",
    class: 6,
    age: 13
}
students.push(
    {
        name: "asif ",
        age: 20,
        class: "pata nh"
    }
)
students.push(student)
students.push(student2)
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
    }
)
products.push(
    {
        product_Name: "Apple Vision Pro",
        product_Price: 400000,
        product_Detail: " I dont know "
    }
)

products.push(
    {
        product_Name: "Apple Vision Pro",
        product_Price: 400000,
        product_Detail: " I dont know "
    }
)

const DisplayCard = (products: Array<typeof product>) => {

    products.forEach((product) => {
        console.log(`
          product: ${product.product_Name},
          price : ${product.product_Price},
          description : ${product.product_Detail}
        `);
    })
}

DisplayCard(products)