function compose() {
   return Array.prototype.reduceRight.apply(arguments, [function (a, b) {
        return function(){
            return b.apply(this,[a.apply(this,arguments)]);
        }
    }]);
}


const toUpper = string => string.toUpperCase();
const classyGreeting = (firstName, lastName) =>
    "The name's " + lastName + ", " + firstName + " " + lastName;
const yellGreeting = compose(
    toUpper,
    classyGreeting
);
module.exports = compose;

console.log(yellGreeting('James', 'Bond'));


