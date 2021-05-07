export const add = (numbers: string) : number => {
    const delimiter = findDelimiter(numbers);   
    const newNumbers = numbers.startsWith("//") ? numbers.substring(4) : numbers

    const splitBySplitter = (newNumbers.split(delimiter))
    const splitByNewLine = splitBySplitter.join("\n").split("\n")
    let result = 0;

    splitByNewLine.forEach((splitted) => {
      result += Number(splitted);
    })

    return result;
  }

const findDelimiter = (data: string) : string => {
    const splitByForwardSlashes = data.startsWith("//");
    return splitByForwardSlashes ? data[2] : ",";   
}

