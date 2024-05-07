var describe_city = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("such a ".concat(city, " in ").concat(country));
};
describe_city("karachi");
describe_city("UAE", "Dubai");
describe_city("newyork", "America");
