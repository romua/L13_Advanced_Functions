/**
 * Created by admin on 28.07.2017.
 */
function smallest() {
    return Array.prototype.reduce.call(arguments,function (a,b) {
        return Math.min(a,b);
    })
}

console.log(smallest(3,2,1,0,3,2));
module.exports = smallest;