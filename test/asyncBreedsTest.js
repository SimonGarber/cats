// asyncBreedsTest.js
const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile',  () => {
  it("Provides via callback, the details for the bombay breed ", (done) => {
    breedDetailsFromFile('bombay',(bombay) => {
    const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";    
    console.log(bombay)
    assert.equal(expectedDesc,bombay);
    done();    
        });
    });
  it("Provides via callback, the details for the balinese breed", (done) => {
    breedDetailsFromFile('balinese', (balinese) => {
    const expectedDesc = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
    console.log(balinese)
    assert.equal(expectedDesc,balinese);
    done();
})
  })
});