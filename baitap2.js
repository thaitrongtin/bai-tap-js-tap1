var height;
var weight;
var bmi = function(height, weight) {
    var kl = weight / (height * 2)
    return kl;
}
var mark = bmi(80, 168);
console.log(mark);
var join = bmi(95, 196);
const markHigherBMI = mark > join;
console.log(markHigherBMI);
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is " + { $ }
        mark + " higher than Mark's!");
}