// npm package compatibility
if(typeof module !== 'undefined' && module.exports) {
  module.exports = Byte;
}

/**
 * byteJS constructor takes n arguments representing field length
 * @throws {Error} Javascript only supports bitwise operations for 32 bit integers!
 */
function Byte() {
    this.fields = [];
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > 32) {
            // The operands of all bitwise operators are converted to signed 32-bit integers in two's complement format.
            throw new Error('Javascript only supports bitwise operations for 32 bit integers!');
        }

        this.fields.push(arguments[i]);
    }
}

/**
 * [[Description]]
 * @throws {Error} Trying to pack more variables than fields.
 * @returns {number} this will return a number composed of the value of the binary fields.
 */
Byte.prototype.pack = function () {
    if (arguments.length > this.fields.length) {
        throw new Error('Trying to pack more variables than fields.');
    }

    var package;
    for (i = 0; i <= this.fields.length - 1; i++) {
        // Shifts a in binary representation b (< 32) bits to the left, shifting in zeroes from the right.
        package <<= this.fields[i].length;
        // Returns a one in each bit position for which the corresponding bits of either or both operands are ones.
        package |= arguments[i];
    }

    // return a single number
    return package;
};
