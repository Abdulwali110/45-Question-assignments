type CarObject = {
     manufacturer: string;
     model: string;
     [key: string]: any
 }
 const CarProperties = (manifacurer: string, model: string, ...detail: [string, any][]):
     CarObject => {
     let carData: CarObject = {
         manufacturer: manifacurer,
         model: model
     }
     for (const [key, value] of detail) {
         carData[key] = value
     }
     return carData;
 }
 console.log(CarProperties("Honda", "Civic")); // here without detail paremeteer
 console.log(CarProperties("Honda", "Civic", ["color", "black"])); // here without detail paremeteer