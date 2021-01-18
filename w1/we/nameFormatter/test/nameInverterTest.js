const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a single name when passed a single name', function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });


  it('should return an error for undefined', function() {
    const inputName = undefined;
    const expectedOutput = "Error :)";
  });

  it('should return a empty string when passed a specific honorific', function() {
    const inputName = "Dr.";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a empty string when passed a specific honorific', function() {
    const inputName = "first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a empty string when passed a specific honorific', function() {
    const inputName = "first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a empty string when passed a specific honorific', function() {
    const inputName = "Dr. first-name last-name";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return a empty string when passed a specific honorific', function() {
    const inputName = " Dr. first-name last-name ";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });




});