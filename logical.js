// //20 aug 2021

// //Problem 1---->Reversing the string elements

// let string1 = "i am new to javascript";
// let splittedString1 = string1.split(" ");
// let newString1 = [];

// function revString(namei) {
//   revStr = "";
//   for (let i = 0; i < namei.length; i++) {
//     revStr = namei[i] + revStr;
//   }
//   return revStr;
// }
// for (let i = 0; i < splittedString1.length; i++) {
//   newString1.push(revString(splittedString1[i]));
// }
// console.log(newString1.join(" "));

// console.log(
//   "----------------------------------------------------------------------------------------------"
// );

// //Problem 2---->Fetching highest and lowest number in array

// let numArray = [21, -65, 43, 98, -23, 98, 56, -37];
// let highest = 0;
// let lowest = numArray[0];
// for (let i = 0; i < numArray.length; i++) {
//   if (numArray[i] > highest) {
//     highest = numArray[i];
//   } else if (numArray[i] < lowest) {
//     lowest = numArray[i];
//   }
// }
// console.log(highest);
// console.log(lowest);

// console.log(
//   "----------------------------------------------------------------------------------------------"
// );
// //Problem 3---->Reversing the string

// let strA = "Karan,prasad,yogesh,Prataprao";
// let strB = "";

// for (let i = strA.length - 1; i >= 0; i--) {
//   strB += strA[i];
// }

// console.log(strB);

// let revStrC = strA.split(",").reverse();
// console.log(revStrC);

// console.log(
//   "----------------------------------------------------------------------------------------------"
// );

// //Problem 4

// let pm = "MmodiI";
// let namo = "";
// for (let i = 0; i < pm.length; i++) {
//   if (i != 0 && i != pm.length - 1) {
//     namo = namo + pm[i];
//   }
// }
// console.log(namo);

// console.log(
//   "----------------------------------------------------------------------------------------------"
// );

// //Problem 5---->python.py extract py

// let lang = "python.py";
// let sep = lang.split(".");
// console.log(sep[sep.length - 1]);

// //or

// let pton = "python.py";
// let pyyp = "";
// for (let i = 0; i < pton.length; i++) {
//   if (i == pton.length - 1 || i == pton.length - 2) {
//     pyyp = pyyp + pton[i];
//   }
// }
// console.log(pyyp);

// console.log(
//   "----------------------------------------------------------------------------------------------"
// );

// //Problem 6---->

// let prack = [
//   [1, 2, 5],
//   [4, 6, -9],
//   [100, -200, -300],
// ];
// let blankArry = [];
// for (let i = 0; i < prack.length; i++) {
//   for (let j = 0; j < prack[i].length; j++) {
//     blankArry.push(prack[i][j]);
//   }
// }
// console.log(blankArry);

// let highValue = 0;
// let lowValue = blankArry[0];
// for (let k = 0; k < blankArry.length; k++) {
//   if (blankArry[k] > highValue) {
//     highValue = blankArry[k];
//   } else if (blankArry[k] < lowValue) {
//     lowValue = blankArry[k];
//   }
// }
// console.log(highValue);
// console.log(lowValue);

// console.log(
//   "----------------------------------------------------------------------------------------------"
// );

// //Problem 7---->find out count of word in given string

// let statementA =
//   "I am new to javascript and i wish to learn every concept of javascript . javascript is great";
// let spr = statementA.split(" ");

// let count = 0;
// for (let a = 0; a < spr.length; a++) {
//   if (spr[a].includes("javascript")) {
//     count++;
//   }
// }
// console.log(count);

// console.log(
//   "----------------------------------------------------------------------------------------------"
// );

// //problem 8---->Count the vowels from given string

// let song =
//   "i tried so hard and got so far But in the end it doesn't even matter";
// let count1 = 0;
// for (let s = 0; s < song.length; s++) {
//   if (
//     song[s] == "a" ||
//     song[s] == "e" ||
//     song[s] == "i" ||
//     song[s] == "o" ||
//     song[s] == "u"
//   ) {
//     count1++;
//   }
// }
// console.log(count1);

// console.log(
//   "----------------------------------------------------------------------------------------------"
// );

// //Problem 9---->Sorting the array have differant type of elements

// let multiArray = [
//   67,
//   "karan",
//   "rajshree",
//   -22,
//   "pratiksha",
//   4,
//   "abhijeet",
//   "laukik",
//   -365,
// ];
// let digits = [];
// let alphabets = [];
// for (let m = 0; m < multiArray.length; m++) {
//   if (typeof multiArray[m] == "number") {
//     digits.push(multiArray[m]);
//   } else {
//     alphabets.push(multiArray[m]);
//   }
// }
// digits.sort(function (a, b) {
//   return a - b;
// });

// alphabets.sort();

// let newArray = digits.concat(alphabets);
// console.log(newArray);

// console.log(
//   "----------------------------------------------------------------------------------------------"
// );

// //Problem 10---->Compresing the string

// function compress(string) {
//   let stringC = "";
//   let countC = 1;
//   let index = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string.charAt(i) === string.charAt(i + 1)) {
//       countC += 1;
//     } else {
//       stringC += `${string.charAt(i)}${countC}`;
//       countC = 1;
//     }
//   }
//   console.log(stringC);
// }

// compress("aaaabbbccd");

// //or

// function Compressed2(stringA) {
//   let CompressedString = "";
//   let countU = 0;
//   for (let i = 0; i < stringA.length; i++) {
//     countU++;
//     if (stringA[i] != stringA[i + 1]) {
//       CompressedString += stringA[i] + countU;
//       countU = 0;
//     }
//   }
//   console.log(CompressedString);
// }
// Compressed2("aaaabbbccd");    4a3b2c1d

// console.log(
//   "----------------------------------------------------------------------------------------"
// );

// //Problem 11---->

// let h = "4a3c2b";

// let even = [];
// let odd = [];

// for (let i = 0; i < h.length; i++) {
//   if (i % 2 == 0) {
//     even.push(h[i]);
//   } else {
//     odd.push(h[i]);
//   }
// }
// console.log(even);
// console.log(odd);

// newString = " ";

// for (let i = 0; i < even.length; i++) {
//   newString = newString + odd[i].repeat(Number(even[i]));
// }
// console.log(newString);

// console.log(
//   "------------------------------------------------------------------------"
// );

// //Problem 12---->

// let numString = [123];
// let newstr = "";
// for (let i = numString.length - 1; i >= 0; i--) {
//   newstr += numString[i];
// }
// console.log(`ans${newstr}`);


// ******************   logical problems   ****************************

// problem 1 - Reversing the string elements

// let studentName = "my name is swapnil"

// let splittedString = studentName.split(" ");   // [ 'my', 'name', 'is', 'swapnil' ]
// let newString = [];

// function revString(namei){
//     revStr = "";
//     for (let i=0; i<namei.length;i++){
//         revStr = namei[i] + revStr
//     }
//     return revStr;
// }
// for(let i=0; i<splittedString.length;i++){
//     newString.push(revString(splittedString[i]));
// }
// console.log(newString)    // [ 'ym', 'eman', 'si', 'linpaws' ]
//  console.log(newString.join(" "));

// ********************************************************************************

// problem 2 - fetching highest and lowest numbers in arrey

// let numArrey = [21,45,33,76,-32,55,-65]

// let highest = numArrey[0]
// let lowest = numArrey[0]

// for(let i=0; i<numArrey.length;i++){
//     if(numArrey[i] > highest){
//         highest = numArrey[i]
//     }
//     else if(numArrey[i] < lowest){
//         lowest = numArrey[i]
//     }
// }
// console.log(highest);
//  console.log(lowest);

// *************************************************************************************

// problem 3 = counting the vowels from the given string

// let statement = "javascript is a easy language"

// let count = 0
// for(i=0; i<statement.length; i++){

//     if(statement[i]=="a"||statement[i]=="e"||statement[i]=="i"||statement[i]=="o"||statement[i]=="u"){
//         count++;
//     }
// }
// console.log(count)

// ************************************************************************************

// problem 4 =  find the count of specific word in the string

// let statement = "sachin is a great player sachin played for india sachin makes his debuet against the pakistan."

// let str = statement.split(" "); 

// let count = 0;

// for(let i=0; i<str.length; i++){
//     if(str[i].includes("sachin")){
//         count++;
//     }
// }

// console.log(count);

// ********************************************************************************

// problem 5 - find the count of each character in the given string

// let str = "ssshdsjkjkjkkdbceeeeooceib"
// let characCount = {}

// for (let i=0; i<str.length;i++){

//     if(characCount.hasOwnProperty(str[i])){
//         characCount[str[i]] = characCount[str[i]] + 1
//     }
//       else{
//         characCount[str[i]] = 1
//       }
// }

// console.log(characCount)

//************************************************************************** 

// problem  6 - reversing the string 

// let abc = "swapnil,akshay,prashant,krishna,aviraj,pratik"

// let revstr = "";

// for(let i=abc.length-1; i>=0; i--){

//     revstr += abc[i];
// }

// console.log(revstr)    // kitarp,jariva,anhsirk,tnahsarp,yahska,linpaws

//  let newStr = abc.split(",").reverse();

// console.log(newStr)

// *****************************************************************

// problem 7  from below string extract only js

// let sta = "javascript.js"

// let sbm = "";

// for(let i= 0; i < sta.length; i++){

//     if(i == sta.length - 1 || i == sta.length - 2) {

//     sbm = sbm + sta[i];     
//     }
// }

// console.log(sbm)


// // ------- second way------

// let sbm = sta.split(".");

// console.log(sbm[sbm.length-1])


// ************************************************************************************

// // problem 8 - convert each words first character into uppercase

// let sentence = 'my good name is krishna.'
// let arr = sentence.split(' ')
// //console.log(arr)                     
// let x = [ ]
// function cal(zz){
//     let sentence2 = ' '
//     for (let i = 0; i < zz.length; i++){

//         if(i == 0){
//            sentence2 = sentence2 + zz[i].toUpperCase()
//         }
//         else{
//             sentence2 = sentence2 + zz[i]
//         }
//     }
//         return sentence2
// }

// for (let i = 0; i < arr.length; i++){
//     x.push(cal(arr[i]))
// }

// let y = x.join(' ')
// console.log(y)


// // problem 9 - convert only first character of the given string into capital case


// let y = "amol"

// first way using methods

// console.log(y[0].toUpperCase()+ y.slice(1))       // // Amol




// second way using forloop

// let capitalize = ""
// for(let i = 0 ; i < y.length ;i++){
//     if(i == 0){
//         capitalize = capitalize +y[i].toUpperCase()
//     } 
//     else {
//         capitalize = capitalize +y[i]
//     }
// }
// console.log(capitalize)                           // // Amol



// // problem 9 - replace multiple occurances from the string.

// let str =  "virat is the best player"

// let a = str.replace("virat","sachin");
// console.log(a)                              // // sachin is the best player


// // how to replace multiple occurances

//  let complement = "virat makes 30 centuries virat played for india virat is the best player in the world"

// let c = complement.split(" ")
// console.log(c);

// for(i=0; i < c.length; i++){

//     if(c[i]==="virat"){
//         c[i]="sachin"
//     }
// } 

// console.log(c.join(' '))           // // I am learning python and i will search job in python



// // problem 10 - problem on includes method of string

// let drinks = "sprite maza coca-cola thumpsup slice"

// let userWant = "coca-cola"

// if(drinks.includes("coca-cola")){
//     console.log("drinks is available")
// }
// else{
//     console.log("drinks is not available")
// }


// //  problem 11 
// function compress(string) {             
//     let stringC = "";          // 2a3b2c
//     let countC = 1;          //  2,3,2
//     let index = 0;
//     for (let i = 0; i < string.length; i++) {
//       if (string.charAt(i) === string.charAt(i + 1)) {
//         countC = countC + 1
//       } else {
//         stringC = stringC + `${countC}${string.charAt(i)}`;
//         countC = 1;
//       }               
//     }
//     console.log(stringC);        // //  2a3b2c
//   }

//    compress("aabbbcc");      //  given aabbbcc  


// // second way


// function Compressed2(stringA) {
//   let CompressedString = "";    // 2a2b
//   let countU = 0;              // 1+1,0+1+1
//   for (let i = 0; i < stringA.length; i++) {
//      countU = countU + 1
//     if (stringA[i] != stringA[i + 1]) {
//       CompressedString += countU + stringA[i] 
//       countU = 0;
//     }
//   }
//   console.log(CompressedString);
// }
// Compressed2("aabb");    



//  // problem 12 - replace multiple occurance from the string.


// // how to replace multiple occurances

//  let complement = "virat makes 30 centuries virat played for india virat is the best player in the world"

// let c = complement.split(" ")
// console.log(c);

// for(i=0; i < c.length; i++){

//     if(c[i]==="virat"){
//         c[i]="sachin"
//     }
// } 

// console.log(c.join(' '))         

//sachin makes 30 centuries sachin played for india sachin is the best player in the world


// second example -

// let lan2 = "I am learning javascript and i will search job in javascript"
// // let reee = lan2.replace('javascript','python')
// // console.log(reee)
// lan2 = lan2.split(' ') 
// console.log(lan2)

// for(let i = 0 ; i < lan2.length ; i++){
//     if(lan2[i] === "javascript"){
//         lan2[i] = "python"
//     }
// }
// console.log(lan2.join(' '))  // I am learning python and i will search job in python



// // problem 13  -  count the 'm' in the string

// let kaa = 'amomolmhhm'
// let count = 0
// for(let i = 0 ; i < kaa.length ; i++){
//     if(kaa[i] == 'm'){
//         count = count + 1 
//     }

// }
// console.log(count)


// ---------------------------------------------------------------------------------

// problem 14 - find the length of the big  number

// let abc = 15364894

// let ar = []                 // here we define wmpty arrey

// ar.push(abc)                // here we push the value of abc into the empty arrey
// let s = ar.join(" ")        // join method converts arrey into string
// console.log(s)
// console.log(s.length)       // 8

// --------------------------------------------------------------------------------

// // problem 15 -  input = 5a4b3c2e1f convert it like "aaaaabbbbcccef"

// let hhh =  "5a4b3c2e1f"

// let ns = hhh.split("")
// let hhhh = ""

// for(let i = 0 ; i < ns.length ; i++){
//     if(Number(ns[i])){
//         hhhh = hhhh + ns[i+1].repeat(Number(ns[i]))
//     }
// }
// console.log(hhhh)



// // problem 16 - removes the duplicates from the arrey

//  first way
// let arr = [ 15,66,88,12,66,57,88,15]
// let unique =  arr.filter((el,index,arrey)=>{

//     if(arrey.indexOf(el)== index){
//          return true;
//     }
// })
// console.log(unique)


//                 second way

// remove duplicate elements from the arrey
// let arr = [ 12,34,12,44,34,12,45,34,57]

// let unarr = [];

// for(let i = 0; i<arr.length; i++){
//     if(!unarr.includes(arr[i])){          // here if condition gets true then it will go to push the element in unarr
//         unarr.push(arr[i])
//     }
// }
// console.log(unarr)


// problem 17 - separate the capital and small leters from the string

// // let str =let str = "QFGZHhghjgjhghjgQFdghfhjgjgj" 
// let capstr = ""
// let smallstr = ""
// for(let i = 0; i<str.length; i++){
//     if(str[i] >= 'A' && str[i] <= 'Z' ){

//     capstr = capstr + str[i]
//     }
//     else{
//         smallstr = smallstr + str[i]
//     }
// }

// console.log(capstr)
// console.log(smallstr)



// problem 18 -  separate  small and capital  elements using regular expressions.

// ------------ first way----------------

//   let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"  

//   let regex =  /[A-Z]/

//   let smallstr = "" 
//   let capstr = ""      

// for(let i = 0; i< str.length; i++){
//     if(regex.test(str[i])){             // test() method returns true or falls.

//         capstr = capstr + str[i]
//     }
//     else{
//         smallstr = smallstr + str[i]

//     }
// }
// console.log(smallstr)
// console.log(capstr)

//  ------------------ second way--------------------

// let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"  

// let regex =  /[A-Z]/

// let bigavi = str.split('').filter(function(el,index,arrey){
//     if(regex.test(el)){
//          return true
//     }
// })
//  console.log(bigavi.join(''))


// ------------- third way ---------------------

//  let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"

// let C  = str.match(/[A-Z]/g).join("")
// let L = str.match(/[a-z]/g).join("")

// console.log(`Original string = ${str}`)
// console.log(`Capital Letters = ${C}`)
// console.log(`Lower Letters = ${L}`)

// ----------------------------------------------------------------------------

// problem 19 - Fetch only number from given string and add them

// var str = "sdaf dfsd af dsf dsa fd saf s 3254 rsd 324 r wed 3 4 sdaf 34"

// var num = str.match(/(\d+)/g)
// var sum = 0;
// for (let index = 0; index < num.length; index++) {
//     sum = sum + Number(num[index]);

// }
// console.log(sum)



// problem 20 ------------------------

// input is date format is like 27/09/2021
// output but we required like this 2021-09-2021

// let date = '27/09/2021'

// let arr = date.split('/')
// console.log(arr)               // [ '27', '09', '2021' ]

// let newarr = arr.reverse().join('-')
// console.log(newarr)                              // 2021-09-27

























//---------------------------------------------------------------------
// Loops iteration 


// for(let i = 0 ; i < 10 ; i++){
//     console.log(i)               // 1 2 3 4 5 6 7 8 9 
// }

// ----------------------------------------------------------------------------
// let i = 0

// for (; i < 10;) {
//     console.log(i) ////    this will print 0 to 9
//     i++  // i -- 10
// }
// console.log(i) // 10

// ----------------------------------------------------


// for (let i = 10; i >= 0; i--) {
//   console.log(i)
// }                             // it will print 10 to 0

// ------------------------------------------------------------------------

// problem 21 - reverse string word

// let k = 'amol'
// let a = ""
// let b = ""

// for (let i = 0; i < k.length; i++) {
//   a = k[i] + a                           // first way

// }

// for (let i = k.length - 1; i >= 0; i--) {
//   b = b + k[i]                          // second way
// }

// console.log(a)       // loma
// console.log(b)      // loma

// -----------------------------------------------------------------------------

// problem 22  separate out the duplicates from the arrey

// let r = [2, 3, 2, 44, 55, 66, 55, 3, 66]
// let rk = [] 
// let du = []

// for (let x = 0; x < r.length; x++) {
//   if (rk.indexOf(r[x]) < 0) {
//       rk.push(r[x])
//   }
//   else {
//       du.push(r[x])
//   }
// } 
// console.log(rk)           // [ 2, 3, 44, 55, 66 ]
// console.log(du)         // [ 2, 55, 3, 66 ]

//  second way of solving above problem

// r = [2, 3, 2, 44, 55, 66, 55, 3, 66]
// rk = [] // [2]
// du = []


// for(let i = 0 ; i < r.length ; i++){
//   if(! rk.includes(r[i])){
//       rk.push(r[i])
//   }
//   else {
//       du.push(r[i])
//   }
// }
// console.log(rk)          // [ 2, 3, 44, 55, 66 ]
// console.log(du)       //[ 2, 55, 3, 66 ]

// -----------------------------------------------------------------------

// problem 23 - count the total spaces from the statement

// let ia = "chinmay deshpande is learning javascript"
// let count = 0
// for(let i = 0 ; i < ia.length ; i++){
//   if(ia[i] == " "){
//       count = count + 1
//   }
// }
// console.log(count)           // 4

// // second way of splving above problem
// console.log("chinmay deshpande is learning javascript".split(' ').length-1)    // 4

// ------------------------------------------------------------------------------------------

// problem 24 reverse the statement with its every character

// hn = "chinmay deshpande is learning javascript"
// a = ""
// for (let i = 0; i < hn.length; i++) {
//   a = hn[i] + a

// }
// console.log(a)             // tpircsavaj gninrael si ednaphsed yamnihc























// [2, 3, 2, 44, 55, 66, 55, 3, 66].filter(function(el,index,arr){
// })
// let chars = [33,55,33,22,45,33,55,33,33]
// let uniqueChars = chars.filter((el, index) => {
//     return chars.indexOf(el) > index;
// })
// //[33,55]
// console.log(uniqueChars)


// problem --------------- revesring the string

//  let str = "aviraj is the boss"

//   revstr = ""
// for(let i=0; i<str.length; i++){

// revstr =  str[i]  + revstr

// }
// console.log(revstr)             // ssob eht si jariva

// second way
// let str = "aviraj is the boss"
// revstr = ""
// for(let i= str.length-1; i>=0; i--){
// revstr = revstr + str[i]
// }
// console.log(revstr)            // ssob eht si jariva




// problem ----------
// // separate out the even and odd numbers from the arrey
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let evenarr = []
// let oddarr = []
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     evenarr.push(arr[i])
//   }
//   else {
//     oddarr.push(arr[i])
//     // console.log(arr[i])

//   }
// }

// console.log(evenarr)     //[ 2, 4, 6, 8, 10 ]
// console.log(oddarr)   // [ 1, 3, 5, 7, 9 ]



// problem ------------
// separate out  alphabets and numbers 

// let sss = ['a',2,'d',6,'y','j',8,55,'e','k']

// let alphaarr = []
// let numarr = []

// for(let i=0; i<sss.length; i++){
//   if(sss[i] === Number(sss[i])){
   
//     numarr.push(sss[i])
//   }
//   else{
//     alphaarr.push(sss[i])
//   }
// }
// console.log(alphaarr)  // [ 'a', 'd', 'y', 'j', 'e', 'k' ]  
// console.log(numarr)   // [ 2, 6, 8, 55 ]

// -------------------------------------------------------


// problem - 
// filter characters from even index number  place
  //       0 1  2  3  4  5  6  7
// let arr = [2,55,6,67,33,78,43,77]

// let newarr = []

// for(let i=0; i<arr.length; i++){
//   if(i%2 == 0){
//     newarr.push(arr[i])
//   }
// }
// console.log(newarr)          // [ 2, 6, 33, 43 ]


// problem----------------

// use of  Number() method

// let dd = 'h'
// console.log(Number(dd))  // NaN

// let hh = '5'
// console.log(Number(hh))   // 5

// let  jj = 5
// console.log(Number(jj))   // 5



// problem ------------
// count the characters from given string

// first way
// let n = 'swapnil'
// console.log(n.length) // 7

// second way
//  let count = 0                    
// for(let i= 0; i<n.length; i++){
// count = 1 + i
// }
// console.log(count)   // 7



// problem ------------

// find the length of the number

// let avi = 1234568836892

// console.log(String(avi).length)   // 13




// problem ---------------

// print the given string by removing the first and last element

// let ss = "swapnil"
// let aa = ""

// for(let i=1; i<ss.length-1; i++){
//   aa = aa + ss[i]
// }
// console.log(aa)        // wapni



// problem ------------------
// get output as 3.14 from given string.

//  let aa = '3.141522'

//  let b = Number(aa)
// //  console.log(b)        // 3.141522

// //  let c = b.toFixed(2)   // put numbers of digits you wnat after the point in bracket
// //  console.log(c)            // 3.14


//  second way ----

// let aa = '3.141522'
// let ss = Number(aa).toFixed(2)
// console.log(ss)      // 3.14




// problem-------------------

// input = '3.141522'
// output required = 3

// let aa = '3.141522'
// let cc = parseInt(aa)
// console.log(cc)        // 3


// parseFloat method
// let ss = '3.141522'
// let dd = parseFloat(ss)
// console.log(dd)      //  3.141522




// let ages = [22,40,33,25,50]

// let birthYear = ages.map(function(el,index,arrey){
//   return (2021 - el)
// })
// console.log(birthYear)      // [ 1999, 1981, 1988, 1996, 1971 ]



let arr = [1,2,3,4,5,6,7,8,9]
let newarr = arr.filter(function(el,index,arrey){
  return el < 5
})
console.log(newarr)       // [ 1, 2, 3, 4 ]