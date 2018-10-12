/*
This is module 2. Defines question, answer and
circumference function
*/

const { PI } = Math;

var question = "What is your quest?";
var answer = "To seek the holy grail.";

function findCircumference(radius) {
    /*
        Given radius of a circle, finds and returns its circumference.
    */
    return 2*Math.PI*radius;
}

/*   
Given radius of a circle, this funciton finds and returns its area.
*/

findArea = (radius) => PI * radius ** 2;

module.exports = { findCircumference, findArea};

//if (require.main == module) {
    console.log(`question: ${question}`);
    console.log(`answer: ${answer}`);
    var radius = 2;
    var circum = findCircumference(radius);
    console.log(`circumference = ${circum.toFixed(2)} unit`);
    // can't call area here because it's directly exported
    //console.log(`area = ${area.toFixed(2)} unit`);
    console.log(`area = ${findArea(radius).toFixed(2)} sq. unit`);
//}
