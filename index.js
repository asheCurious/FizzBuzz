let number = parseIt(prompt('please enter the number you want to FizzBuzz upto: '));

for (let i = 1; i <= number; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if ( i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}