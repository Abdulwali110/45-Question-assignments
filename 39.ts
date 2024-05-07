const city_country =
    (city: string, country: string)
        : string => {
        return `such a ${city} in ${country}`
    }
console.log(city_country("islamabad", "pakistan"));
console.log(city_country("paris", "France"));
console.log(city_country("Moscow", "Russia"));