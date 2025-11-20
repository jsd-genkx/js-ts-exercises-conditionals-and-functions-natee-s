const num = 18;
// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// if( num % 3 === 0 && num % 5 === 0 ){
//     console.log("FizzBuzz")
// } else if(num % 3 === 0){
//     console.log("Fizz")
// } else if(num % 5 === 0){
//     console.log("Buzz")
// } else{
//     console.log("Not divisible by 3 or 5")
// }

// // TODO BONUS: Rewrite with if

// if (num % 3 === 0) {               // เช็คภายในว่า หารด้วย 3 ลงตัวไหม
//   if (num % 5 === 0) {             // ถ้าข้างบนจริง เช็คภายในว่า หารด้วย 5 ลงตัวด้วยไหม
//     console.log("FizzBuzz");       // ถ้าหารทั้ง 3 และ 5 ลงตัว ให้แสดง "FizzBuzz"
//   } else {
//     console.log("Fizz");            // ให้แสดง"Fizz" ถ้าหารลงตัวเฉพาะ 3
//   }
// } 

// if (num % 3 !== 0) {                // เข้ามาเฉพาะเมื่อไม่ใช่กรณีที่หารด้วย 3
//   if (num % 5 === 0) {              // เช็คภายในว่า หาร 5 ลงตัวด้วยไหม
//     console.log("Buzz");            // ถ้าหารเฉพาะ 5 ลงตัว ให้แสดง Buzz
//   } else {
//     console.log("Not divisible by 3 or 5");   // ถ้าหารไม่ลงตัวทั้งคู่
//   }
// }

let num = 0;
if(num === 0){
  console.log("Zero is not acceptable.")
} else if ((num % 3 === 0) && (num % 5 === 0)) {
  console.log(`Your number:${num} is "FizzBuzz".`);
} else if ((num % 3 === 0) ) {
    console.log(`Your number:${num} is "Fizz".`);
} else if ((num % 5 === 0) ) {
    console.log(`Your number:${num} is "Buzz".`);
} else {
  console.log("Not divisible by 3 or 5");
}
