import {fizzbuzz} from "../main/fizzbuzz";

describe("fizzbuzz", () => {
    it.each`
    input | output
    ${1}  | ${"1"}
    ${2}  | ${"2"}
    ${4}  | ${"4"}
    ${7}  | ${"7"}
    ${8}  | ${"8"}
    ${11} | ${"11"}
    ${13} | ${"13"}
    ${14} | ${"14"}
    ${16} | ${"16"}
    ${17} | ${"17"}
    ${19} | ${"19"}
    ${22} | ${"22"}
    ${23} | ${"23"}
    ${26} | ${"26"}
  `("$input should return '$output'", ({input, output}) => {
        expect(fizzbuzz(input)).toBe(output);
    });

    it.each([
        [3], [6], [9], [12], [18], [21], [24],
    ])("%i is divisible by 3 the output should be 'Fizz'", (input: number) => {
        expect(fizzbuzz(input)).toBe('Fizz')
    })

    it.each([
        [5], [10], [20], [25], [35], [40], [50]
    ])("%i is divisible by 5 the output should be 'Buzz'", (input: number) => {
        expect(fizzbuzz(input)).toBe('Buzz')
    })

    it.each([
        [15], [30], [45]
    ])("%i is divisible by 3 and 5 the output should be 'FizzBuzz'", (input: number) => {
        expect(fizzbuzz(input)).toBe('FizzBuzz')
    })
});
