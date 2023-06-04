"use strict";
const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    onSale: false,
    price: 31660,
  },
];

// !Example 1 - Map method
// Let the getModels function return an array of models (model field) of all cars.
// const getModels = (cars) => {
//   const model = cars.map((element, index, arr) => {
//     return element.model;
//   });

//   return model;
// };

// // ["Explorer","Fusion"]
// console.log(getModels(cars));

//! Example 2 - Map method
// Let the makeCarsWithDiscount function return a new array of objects with a changed value of the price property depending on the discount passed.const makeCarsWithDiscount = (cars, discount) => {};

// const makeCarsWithDiscount = (cars, discount) => {
//   const carsWithDiscount = cars.map((car) => {
//     return {
//       ...car,
//       price: car.price - car.price * discount,
//     };
//   });

//   return carsWithDiscount;
// };

// console.log(makeCarsWithDiscount(cars, 0.2));

//! Example 3 -Filter method
// Let the filterByPrice function return an array of cars whose price is less than the value of the threshold parameter.

// const filterByPrice = (cars, threshold) => {
//   const filteredCars = cars.filter((car) => {
//     if (car.price < threshold) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   return filteredCars;
// };

// console.log(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// !Example 4 - Filter method
// Let the getCarsWithDiscount function return an array of cars whose onSale property is true.
// const getCarsWithDiscount = (cars) => {
//   const filteredCars = cars.filter(({ onSale }) => onSale);
//   return filteredCars;
// };

// console.log(getCarsWithDiscount(cars));

//! Example 5 - Filter method
// Let the getCarsWithType function return an array of cars whose type coincide with the value of the type parameter.

// const getCarsWithType = (cars, type) => {
//   const filteredCars = cars.filter((car) => car.type === type);

//   return filteredCars;
// };

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

//! Example 6 - The find method
// const getCarByModel = (cars, model) => {
//   const foundCar = cars.find((car) => {
//     if (car.model === model) return true;
//   });

//   return foundCar;
// };

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

//! Example 7 - Sort method
// Let the sortByAscendingAmount function return a new array of cars sorted in ascending order by the value of the amount property.

// const sortByAscendingAmount = (cars) => {
//   const sortedCars = [...cars];
//   sortedCars.sort((a, b) => {
//     return b.price - a.price;
//   });
//   return sortedCars;
// };

// console.table(sortByAscendingAmount(cars));

//! Example 8 - Sort method
// Let the sortByDescendingPrice function return a new array of cars sorted in descending order by the value of the price property.

// const sortByDescendingPrice = (cars) =>
//   [...cars].sort((a, b) => a.price - b.price);

// console.table(sortByDescendingPrice(cars));

//! Example 9 - Reduce method
// Let the getTotalAmount function return the total number of cars (the value of the amount properties).

// const getTotalAmount = (cars) => {
//   const total = cars.reduce((accumulator, currentCar) => {
//     accumulator += currentCar.price;
//     return accumulator;
//   }, 0);

//   return total;
// };

// console.log(getTotalAmount(cars));

//! Example 10 - Method chains
// Let the getAvailableCarNames function return an array of car models, but only those that are currently for sale.

// const getAvailableCarNames = (cars) =>
//   cars.filter((car) => car.onSale).map((car) => car.model);

// console.log(getAvailableCarNames(cars));

//! Example 11 - Method chains
// Let the getSortedCarsOnSale function return an array of cars for sale (onSale property), sorted by price ascending.

const getSortedCarsOnSale = (cars) => {
  const carsOnSale = cars.filter((car) => car.onSale);
  return carsOnSale.sort(
    (actualElement, urmatorulElement) =>
      actualElement.price - urmatorulElement.price
  );
};

console.table(getSortedCarsOnSale(cars));
