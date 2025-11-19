// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"
// console.log(password.length);

const password = "pass1234";

if( password.length < 6 ){
    console.log(`the password are ${password.length} it is "Too short"`)
}
else if(password.length >= 6 && password.length <= 10 ){
    console.log(`the password are ${password.length} it is "Moderate"`)
}
else{
    console.log(`the password are ${password.length} it is "Strong"`)
}


// if (password.length < 6) {
//     console.log("Too short");
// } else if (password.length <= 10) { // ไม่ต้องเช็ค >= 6 เพราะถ้าไม่เข้าเงื่อนไขแรก (if) มันก็ต้อง >= 6 อยู่แล้ว
//     console.log("Moderate");
// } else { // ส่วนนี้คือส่วนที่ไม่เข้าเงื่อนไขข้างบนสักข้อ ซึ่งหมายถึงความยาว 11+ โดยอัตโนมัติ
//     console.log("Strong");
// }