const describe_city =
    (city: string, country: string = "Pakistan")
        : void => {
        console.log(`such a ${city} in ${country}`);
    }

describe_city("karachi")
describe_city("UAE", "Dubai")
describe_city("newyork", "America")