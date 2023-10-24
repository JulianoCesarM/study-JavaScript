const fizzBuzz = (x) => {
  if (typeof x !== "number") return x
  if (x % 3 == 0 && x % 5 == 0) return "FizzBuzz"
  if (x % 3 == 0) return "Fizz"
  if (x % 5 == 0) return "Buzz"
  return x
}
for (let index = 0; index < 100; index++) {
  console.log(index, fizzBuzz(index))
}
console.log(fizzBuzz("15"))
