Function.prototype.bindMe = function () {
    let funcThis = [].shift.call(arguments);
    let thisA = this;
    let bindArgs = [].splice.call(arguments);
    console.log(bindArgs);
    return function () {
        return thisA.call(funcThis,[].shift.call(arguments), bindArgs);
    };
}

prop = 5;
function addPropToNumber(number) {
    return this.prop + number;
}
var bound = addPropToNumber.bindMe({prop: 9});
//bound(1)  // 10

console.log(addPropToNumber(3));
console.log(bound(1));
