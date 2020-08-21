let reverseString = (string) => {
  return string.split('').reverse().join('');
}

console.log(reverseString('Hello world!'));

// Tema
// write a function which checks if there is a same value number anywhere in the variables above and tell us which number is it. 
//Check only the numebrs in the constats here up and get rid of strings or booleans. we only know a, b and c are primitives, e is an array and f is an object

// 1. write a function which transform the object in array
// 2. write a function which returns a unic array containg only numbers
// 4. write a function which checks if there is any duplicate number.
// 5. tell us which number (number not string) is duplicatd!

const a = 12;
const b = 6;
const c = 'adrian';
const d = false;
const e = [6, 67, 32, 'rere'];
const f = { x: 1, y: 6, z: 98, v: 'dada' };

const turnObjectToArray = (object) => {
  return Object.values(object);
}
console.log(turnObjectToArray(f));


const checknumbers = (val) => {
  if (typeof(val) === 'number') {
    return val;
  }
}

const totalArray = [a, b, c, d, ...e, ...turnObjectToArray(f)];
const numbersOnlyArray = totalArray.filter(checknumbers);
console.log(numbersOnlyArray);

const giveDuplicateNumbers = (arr) => {
  const checkDuplicateNumbers = (arr) => {
    return arr.filter((item, index) => {
      return arr.indexOf(item) !== index
    });
  }
  
  const duplicatedNumbers = [...new Set(checkDuplicateNumbers(arr))];
  
  if (duplicatedNumbers.length > 1) {
    console.log(`The duplicated numbers are: ${duplicatedNumbers}.`);
  } else {
    console.log(`The duplicated number is ${duplicatedNumbers}.`);
  }  
}

giveDuplicateNumbers(numbersOnlyArray);

