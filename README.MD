# byteJS
A lightweight binary data wrapper.

```js
var instruction = new byte(4, 12);

instruction.pack(10, 56);
// 0100 0000 0001 1000 (2145)

var opcode = ((instruction >> 12) & 15);
// opcode = 10

var address = (instruction & 4095);
// address = 56
```

I purposefully did not add functions to retrieve the packed values as I wanted to keep this library as light and true to binary manipulation as possible. You will need to rely on [I'm an inline-style link](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) to retrieve specific values.

## Futher Reading
> In Java, the bitwise operators work with integers. JavaScript doesn't have integers. It only has double precision floating-point numbers. So, the bitwise operators convert their number operands into integers, do their business, and then convert them back. In most languages, these operators are very close to the hardware and very fast. In JavaScript, they are very far from the hardware and very slow. JavaScript is rarely used for doing bit manipulation.
> -- Douglas Crockford in "JavaScript: The Good Parts", Appendix B, Bitwise Operators (emphasis added)