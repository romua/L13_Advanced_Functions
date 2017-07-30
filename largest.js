/**
 * Created by admin on 28.07.2017.
 */
function largest() {
    return Array.prototype.reduce.call(arguments,function (a,b) {
        return Math.max(a,b);
    })
}

console.log(largest(3,2,1,3,2));
module.exports = largest;