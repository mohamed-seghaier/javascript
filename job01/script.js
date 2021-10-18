function isFizzBuzz() {
    let isFizzBuzz = 0;
    console.log(0)
    for (let number = 1; number <= 1337; number += 1) {
        if (number % 3 == 0) {
            isFizzBuzz += 1;
        }
        if (number % 5 == 0) {
            isFizzBuzz += 2;
        }
        if (isFizzBuzz == 0) {
            console.log(number);
        } else if (isFizzBuzz == 1) {
            console.log("Fizz");
        } else if (isFizzBuzz == 2) {
            console.log("Buzz");
        } else if (isFizzBuzz == 3) {
            console.log("FizzBuzz");
        }
        isFizzBuzz = 0;
    }
}