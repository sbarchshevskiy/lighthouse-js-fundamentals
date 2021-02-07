const chai = require('chai'); // 1
const assert = chai.assert;

const shouldIBuythiscar = require('../shouldIBuythiscar.js'); // 2

describe("#shouldIBuythiscar()", function() { // 3

  it("should return false if it's a hatchback", function() { // 4

  });

  it("should return true when the car is pink", function() {
    const car = {
      "color" : "pink"
    };
    const colorChoice = shouldIBuythiscar(car);
    assert.isTrue(colorChoice);

  });
  it("should return true when the car is 6litres/100km and is under or equal to 5000$", function() {
    const consumpOverPrice = {
      "litresPer100km" : 6,
      "price" : 5000
    };
    const consumptChoice = shouldIBuythiscar(consumpOverPrice);
    assert.isTrue(consumptChoice);

  });
  it("should return true when the car has 11litres/100km and is under or euqal to 5000$", function() {
    const priceOverConsump = {
      "litresPer100km" : 11,
      "price" : 5000
    };
    const priceOverConsumpYes = shouldIBuythiscar(priceOverConsump);
    assert.isTrue(priceOverConsumpYes);
  });
  it("should return undefined when there is no car", function() {

    const car = undefined;

    const carNotDefined = shouldIBuythiscar(car);
    assert.isUndefined(carNotDefined);
    
  });
  it("should return false when there are no details about the car", function() {
    const carDetails = {};

    const noCarDetails = shouldIBuythiscar(carDetails);
    assert.isFalse(noCarDetails);
  
  });
  it("should return false if the car IS a Hatchback and IS pink", function() {
    const carColorSelect = {
      "color" : "pink",
      "type" : "hatchback"
    };
    const noColorTypeMatch = shouldIBuythiscar(carColorSelect);
    assert.isFalse(noColorTypeMatch);
  });
  it("should return false if the car is 6litres/100km and is over 5000$", function() {
    const carDescr = {
      "litresPer100km" : 6,
      "price" : 5001
    };
    const noBuyDueToPrice = shouldIBuythiscar(carDescr);
    assert.isFalse(noBuyDueToPrice);
  });

  it("should return false if the car is 6litres/100km and is over 5000$", function() {
    const carDescrHighConsumpt = {
      "price" : 5000,
      "litresPer100km" : "11litres/100km"
    };
    const noBuyDueToPrice = shouldIBuythiscar(carDescrHighConsumpt);
    assert.isFalse(noBuyDueToPrice);
  });
  it("should return false if the car has 5litres/100km and is under or equal 5000$", function() {
    const noLowConsumpt = {
      "consumtion" : "5litres/100km",
      "price" : 5000
    };
    const willNotBuyAPrius = shouldIBuythiscar(noLowConsumpt);
    assert.isFalse(willNotBuyAPrius);
  });
  it("should return false if the car has 12litres/100km and is under 5000$", function() {
    const noHighConsumption = {
      "litresPer100km" : 12,
      "price" : 5000
    };
    const willNotBuyRangeRover = shouldIBuythiscar(noHighConsumption);
    assert.isFalse(willNotBuyRangeRover);
  });

});