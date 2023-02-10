//write a class to calculate the uber price.

class uberprice {
  constructor(city, cost, customerName) {
    this.city = city;
    this.cost = cost;
    this.customerName = customerName;
  }
}

let cityA = new uberprice("cityA", 600, "customer1");
let cityB = new uberprice("cityB", 300, "customer2");

console.log(cityA.cost); // 600
console.log(cityB.cost); // 300
