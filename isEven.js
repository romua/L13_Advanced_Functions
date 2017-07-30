/**
 * Created by admin on 28.07.2017.
 */
function isEven(number) {
    return (number%2 ===0) ? true: !isEven(number-1);
}

console.log(isEven(191));

module.exports = isEven;