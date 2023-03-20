for (let nilai = 1; nilai <= 10000; nilai++) {
  if (nilai % 3 == 0 && nilai % 5 == 0) {
    console.log("=> FizzBuzz");
  } else if (nilai % 3 == 0) {
    console.log("=> Fizz");
  } else if (nilai % 5 == 0) {
    console.log("=> Buzz");
  } else {
    console.log("=>",nilai);
  }
}
