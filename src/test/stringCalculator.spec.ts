import { add } from "../main/stringCalculator";

describe("string calculator", () => {
  it.each`
    input | output
    ${""}  | ${0}
    ${" "}  | ${0}
    ${"1"}  | ${1}
    ${"2"}  | ${2}
    ${"3"}  | ${3}
    ${"1,2"}  | ${3}
    ${"2,2"}  | ${4}
    ${"4,4"} | ${8}
    ${"4,4,1"} | ${9}
    ${"4,4,2"} | ${10}
    ${"4,4,3"} | ${11}
    ${"4,4,4,4"} | ${16}
    ${"1\n2,3"} | ${6}
    ${"1\n2,4"} | ${7}
    ${"1\n2,5"} | ${8}
    ${"1\n2\n3,5"} | ${11}
    ${"1\n2\n3,5\n4"} | ${15}
    ${"//;\n1;2"} | ${3}
    ${"//;\n1;2\n3;4"} | ${10}
    ${"//\n\n1\n2\n3\n4"} | ${10}
    ${"//d\n1d2d3\n4"} | ${10}
    ${"///\n1/2/3/4"} | ${10}
  `("should return $output if '$input' passed in", ({input, output}) => {
    const sum = add(input);

    expect(sum).toBe(output);
  })
})
