function byte() {
    this.fields = [];
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > 32) {
            // The operands of all bitwise operators are converted to signed 32-bit integers in two's complement format.
            throw new Error('Javascript only supports bitwise operations for 32 bit integers!');
        }

        this.fields.push(arguments[i]);
    }
}

byte.prototype.pack = function () {
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
