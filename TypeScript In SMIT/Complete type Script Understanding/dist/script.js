// Primitive Types (string, number, boolean)
// Type # 01 (String)
// let FullName:string = "Owais Nadeem"
// console.log(FullName)
// Type # 02 (Number)
// let age:number =  21
// console.log(`The Age of the user is : ${age}`)
// Type # 03 (Boolean)
// let Married : boolean = false
// console.log(Married)
// Primitive Types (string, number, boolean)
// ------------------------- Completed ----------------
// 2. Object Types (Array, Object, Function)
// - Array:
// let arr  = [4 , 8 ,2 , 53 , "Owais Nadeem" , true] // this is the normal array , just like our arrays of JavaScript
// console.log(arr)
// -(Array of specific primitive types)
// - Number
// let arr: number[] = [4 , 8 ,2 , 53 ] // this is the array which is only specific for our numbers.
// console.log(arr)
// - Boolean
// let arr: number[] = [4 , 8 ,2 , 53 ] // this is the array which is only specific for our numbers.
// console.log(arr)
// - String
// let arr: string[] = ["4", "8","2", "53"] // this is the array which is only specific for our string in array .
// console.log(arr)
// There is another way to write the Array 
// let arr: Array<number> = [1, 2, 3]
// console.log(arr)
// -----------------------------------------------------------
// - Functions
// Let create a new function which will add two numbers
// Here, we also discussed and understand the functions decaration and use case in typescript
// let Add = (a:number  , b:number) => a + b
// console.log(Add(45 , 55))
// let add = (a:number  , b:number):number => a + b // yahan ye bhi pta chala diya hay hum nay usko , k aap ko laazman number return karna hay (a:number  , b:number):number
// console.log(add(45 , 34))
// -------------------- Let's Talk about Objects in TypeScript 
// - Object
// Let's suppose we have an object of student 
// type student = {
//     FirstName: string , 
//     RollNum: number , 
//     Dept: string , 
//     CGPA: number  ,
// } 
// let obj :student = {
//     FirstName : "Owais Nadeem" , 
//     RollNum : 20 , 
//     Dept : "BSCS" , 
//     CGPA : 3.8 
// }
// console.log(obj)
// ------------------------------------ 
// ======================= Enum Understanding in Type Script ======================= 
// Enums are a way to define a set of named constants. In TypeScript, enums are a way to give more meaningful names to numeric values.
