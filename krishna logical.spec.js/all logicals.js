// // 1. reverse  string

// let myname = 'krishna'

// let reversedstring = ''
// for (let i = myname.length-1; i >= 0; i--){
//     //reversedstring = myname[i] + reversedstring    //  krishna
//     //reversedstring = reversedstring + myname[i]       // anhsirk       ( when intilization from last of string element)
// }
// console.log(reversedstring)

//--------------------------------------------------------------------------------------------------------------

// // 2. count vowels(a,e,i,o,u) in above string

// let count = 0
// for (let i = 0; i < myname.length; i++){
//     if(myname[i]== 'a' || myname[i]== 'e' || myname[i]== 'i' || myname[i]== 'o' || myname[i]== 'u' )
//     { count = count + 1 }
// }
// console.log(count)          //   2

//-----------------------------------------------------------------------------------------------------------------

//      Capital only first letter  in string

//1. one word

// let kk ='krishna'

// let KK = kk[0].toUpperCase() + kk.slice(1)
// console.log(KK)                                    // Krishna

// let KK2=' '
// for(let i = 0; i < kk.length; i++){

//     if(i === 0){
//       KK2 = KK2 + kk[i].toUpperCase()
//       console.log(kk[i])                     // K
//     }
//     else{
//         KK2 = KK2 + kk[i]
//     }
// }
// console.log(KK2)                  // Krishna

//-------------------------------------------------------------------------------------------
//2.LOGICAL -- convert to upper case of each word first letter in given sentence

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
// console.log(y)                    //  My  Good  Name  Is  Krishna.


//-----------------------------------------------------------------------------------------------------------

// Find what type of error are occured (Pratiksha raut interv que )

// var v1 = 10
// let v2;
// function pr(){
//     console.log(v1);     // 10
//     console.log(v2);    //  undefined
// }
// pr()
// console.log(window.write)    //undefined
// console.log(window.v1)      // 10
// console.log(window.v2)      // undefined

// console.log(v1)         // 10
// console.log(v2)        /// undefined

// ------------------------------------------------------------------------------------------------------------

//================================================================================================
// Q. given email first letter convert upper case and only give before @ string ( its related to nikhil project)

// let email = "krishnakachare2@gmail.com"
// let ne =" "
// let r = /[\w]/
// let con = true
// for(let i=0; i<email.length; i++){
// if(con){
//     if(i==0){
//         ne = ne + email[i].toUpperCase()
//     }else if(r.test(email[i])){
//         ne = ne + email[i]
//     }else{
//         con = false
//     }
// }   
// }
// console.log(ne)  //  Krishnakachare2
//========================================================================================================

// Q. change date format

// let date = '27/09/2021'
// let arr = date.split('/')
// let requiredDate = arr.reverse().join('-')
// console.log(requiredDate)  // 2021-09-27
// //OR
// let requireddate = date.split('/').reverse().join('-')
// console.log(requireddate) // 2021-09-27


//==========================================================================

// Q. collect even PLACE numbers

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let evenPlace = [ ]
//--------------------------------------------------------------------------
// By for loop

// for(let i =0; i < arr.length; i++){

//     if((i%2 == 0)){
//         evenPlace.push(arr[i])
//     }
// }
// console.log(evenPlace)         // [ 1, 3, 5, 7, 9 ]
//------------------------------------------------------------------
// By Using Method

// arr.filter((el,ind,arr)=>{
//     if((ind%2) == 0){
//         evenPlace.push(el)
//     }
// })
// console.log(evenPlace)       // [ 1, 3, 5, 7, 9 ]

//=======================================================================================================

// Q. collect even  numbers

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let evenNo = [ ]
//--------------------------------------------------------------------------
// By for loop

// for(let i =0; i < arr.length; i++){

//     if((arr[i]%2 == 0)){
//         evenNo.push(arr[i])
//     }
// }
// console.log(evenNo)        // [ 2, 4, 6, 8, 10 ]
//------------------------------------------------------------------
// By Using Method

// arr.filter((el,ind,arr)=>{
//     if((el%2) == 0){
//         evenNo.push(el)
//     }
// })
// console.log(evenNo)     // [ 2, 4, 6, 8, 10 ]


//===========================================================================================================
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

//----------------------------------------------------------------------------------------------

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

// problem----------------

// use of  Number() method

// let dd = 'h'
// console.log(Number(dd))  // NaN

// let hh = '5'
// console.log(Number(hh))   // 5

// let  jj = 5
// console.log(Number(jj))   // 5

//=======================================================================================================

// problem ------------

// find the length of the number

// let kk = 1234568836892

// console.log(String(kk).length)   // 13

//========================================================================================================

// problem ------------
// count the characters from given string

// Using method
// let n = 'swapnil'
// console.log(n.length) // 7
//-------------------------------------
// For loop
//  let count = 0                    
// for(let i= 0; i<n.length; i++){
// count = 1 + i
// }
// console.log(count)   // 7

//===========================================================================



// Problem = Reverse the only string elements

// let str = "Hello! Hi, i am 'krishna'."

// let strx = str.split(" ")
// console.log(strx)
// let x = [ ]

// function call(strf){ 
// let revstr =" "
//     for(let i = 0; i < strf.length; i++){

//         revstr = strf[i] + revstr             // .'anhsirk' ma i ,iH !olleH
//         //revstr =  revstr + strf[i]             // Hello! Hi, i am 'krishna'.   
//     } 
//     return revstr            // o/p is undefined when not return
// }

// for(let i = 0; i < strx.length; i++){

//     x.push(call(strx[i]))
// }
// console.log(x)
// let j = x.join(" ")
// console.log(j)                    // !olleH  ,iH  i  ma  .'anhsirk'
// console.log(typeof(j))            // string




//---------------------------------------------------------------------------------------------------------------

//Problem = Seperate the string where we required

// seperate string from . and print elements

// let x ='python.py' 
// let s =x.split(".")             // ['python','py']
// console.log(s[(s.length)-1])             // py
// console.log(s[0])                       // python

// Printing string elements by there index value

// let Y= "Script.js"
// let M = Y.substring(0,6)
// console.log(M)                           // Script

//-----------------------------------------------------------------------------------------------------------
//Problem = Remove string first and last characters(substring) from given string

// let kk = 'shrikrishnak'
// let rkk = " "

// for (let i = 0; i < kk.length; i++){

//     if ((i != 0)&&(i != 1)&&(i != 2)&&(i != 3)&&(i != kk.length-1)){                                 // kk[i] used when perform on elements and index value(i) used when we perform on index 

//         //rkk = kk[i] + rkk
//         rkk = rkk + kk[i] 

//     }
// }
// console.log(rkk)                     //  krishna

// Note = in this if condition think more (how its work) 

//--------------------------------------------------------------------------------------------------------------

//Problem = Peackup max and min values from array

// let arr = [1,2,3,66,22,34,78,45,-3,0,88]

// //let max = arr[0]
// let max = 0
// let min = 0//arr[5]     // 1

// for (let i = 0; i < arr.length; i++){

//     if(arr[i] > max){
//         max = arr[i]                    // 1,2,3,66,78,88
//     }else if (arr[i] < min){
//          min = arr[i]              // 1,-3
//     }
// }
// console.log(max)    // 88
// console.log(min)    // -3



//--------------------------------------------------------------------------------------------

//Q. remove duplicate elements from the arrey

// let arr = [12, 34, 12, 44, 34, 12, 45, 34, 57]

// let unarr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (!unarr.includes(arr[i])) {
//         unarr.push(arr[i])
//     }
// }
// console.log(unarr)     // [ 12, 34, 44, 45, 57 ]

//----------------------------------------------------------------------------------

// remove duplicate elements from the arrey

// let arr = [15, 66, 88, 12, 66, 57, 88, 15]
// let unarr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (unarr.indexOf(arr[i]) == arr.indexOf(unarr[i])) {
//         unarr.push(arr[i])
//     }
// }
// console.log(unarr)      // [ 15, 66, 88, 12, 57 ]

//-------------------------------------------------------------------------
// let arr = [15, 66, 88, 12, 66, 57, 88, 15]
// var unique = arr.filter(getunique)

// function getunique(el, index, arrey) {
//     if (arrey.indexOf(el) == index) {
//         return true;
//     }
//     else {
//         return false
//     }
// }
// console.log(unique)       // [ 15, 66, 88, 12, 57 ]

//==============================================================================================================

// multiple occurance of index of method

// let kk = [1,1,2,2,2]
// By default index of method find the first occurance of element and return its index no.

// let indexNo = kk.indexOf(1)
// console.log(indexNo)         // 0
//----------------------------------------------------------
//// second occurence

// let indexNo = kk.indexOf(1,kk.indexOf(1)+1)
// console.log(indexNo)  // 1
//----------------------------------------------------------
//// Third occurance

// let indexNo = kk.indexOf(1,kk.indexOf(1)+2)
// console.log(indexNo)  // -1

// let indexNo = kk.indexOf(2,kk.indexOf(2)+2)
// console.log(indexNo)  // 4


//----------------------------------------------------------------------------------------------------------------

// Q. collect unique from duplicate elements

// let arr = [15, 15, 66, 88, 88, 88,]

// let unique = arr.filter((el, index, arrey) => {
//     return ((arrey.indexOf(el,arrey.indexOf(el)+1) == index))         // used second occurance
// })
// console.log(unique)  // [ 15, 88 ]

//----------------------------------------------------------------------------------------------------

// example 2.

// let arr = [15, 15, 15, 15, 66, 3, 9, 88, 88, 88, 88, 0, 0, 0, 0, 0]
// let unique = arr.filter((el, index, arrey) => {
//     return ((arrey.indexOf(el, arrey.indexOf(el) + 1) == index))
// })
// console.log(unique)   // [ 15, 88, 0 ]


// example 3.

// let arr = [1, 1, 2, 3, 5, 4, 5, 5, 4, 2]
// let unique = arr.filter((el, index, arrey) => {
//     return ((arrey.indexOf(el, arrey.indexOf(el) + 1) == index))
// })          // compaired with  current index with the second occurance of index
// console.log(unique)   // [ 1, 5, 4, 2 ]

//=================================================================================================================


// Problem = concate subarray in array (remove sub array and made one)

// let arr = [ [20,30],[40,50,60],[70,80,90]]
// let array = [ ]

// for (let i = 0; i < arr.length; i++){
//   for (let m = 0; m < arr[i].length; m++){
//     array.push(arr[i][m])
//   }
// }
// console.log(array)                         // [ 20, 30, 40, 50, 60, 70, 80, 90 ]

//-----------------------------------------------------------------------------------------------------------------

// find no. of characters in string

// let kk = 'Shrikrishna G Kachare'
// let count  = 0
// for(let i = 0 ; i < kk.length ; i++){
//     if(kk[i]){
//         count  = count + 1
//     }
// }
// console.log(count)   // 21

//----------------------------------------------------------------------------------------------------------------

// compress given string
// Using for loop
// let compstri = ''
// let count = 0

// function comp(stri){
// for(let i = 0; i < stri.length; i++){
//     count = count + 1
//     if(stri[i] != stri[i+1]){
//         compstri += count + stri[i]
//         count = 0
//     }      
// }
//     console.log(compstri)      //6a7c6v4n6y
// }
// comp('aaaaaacccccccvvvvvvnnnnyyyyyy')    
//---------------------------------------------------------------------------------------------------------
// Using method
// let compstri = ''
// let count = 1

// function  comp(stri){
//     for(let i=0; i < stri.length; i++){
//         if(stri.charAt(i) === stri.charAt(i+1)){
//             count = count + 1
//         }else{
//             compstri +=`${count}${stri.charAt(i)}`
//             count = 1
//         }   
//     }
//     console.log(compstri)   // 6a7c6v4n6y
// }
// comp('aaaaaacccccccvvvvvvnnnnyyyyyy') 

//--------------------------------------------------------------------------------------------------------

// let compstri = []
// let count = 0

// function comp(stri){
//         let arr = stri.split('')
// for(let i = 0; i < arr.length; i++){

//     if(Number(arr[i])){
//             console.log('hi')
//         compstri.push(arr[i].repeat(arr[i])    )
//     }      
// }
//     console.log(compstri)      //6a7c6v4n6y
// }
// comp('aaaaaacccccccvvvvvvnnnnyyyyyy')  

//----------------------------------------------------------------------------------------------------------
// function compress(string) {
//         let stringC = "";
//         let countC = 1;
//         let index = 0;
//         for (let i = 0; i < string.length; i++) {
//           if (string.charAt(i) === string.charAt(i + 1)) {
//             countC += 1;
//           } else {
//             stringC += `${string.charAt(i)}${countC}`;
//             countC = 1;
//           }
//         }
//         console.log(stringC);   // a4b3c2d1
//       }

//       compress("aaaabbbccd");

//       // //or

//       function Compressed2(stringA) {
//         let CompressedString = "";
//         let countU = 0;
//         for (let i = 0; i < stringA.length; i++) {
//           countU++;
//           if (stringA[i] != stringA[i + 1]) {
//             CompressedString += stringA[i] + countU;
//             countU = 0;
//           }
//         }
//         console.log(CompressedString);     // a4b3c2d1
//       }
//       Compressed2("aaaabbbccd");

//============================================================================================================

//=============================================================================================================

//  expand in string

// let stri = '2z3x2c'
// let num = [ ]
// let char = [ ]

// for (let i = 0; i < stri.length; i++ ){
//   if( i % 2 == 0){
//     num.push(stri[i])
//   }else{
//     char.push(stri[i])
//   }
// }
// console.log(num)       // [ '2', '3', '2' ]
// console.log(char)      // [ 'z', 'x', 'c' ]

// let expstri = ''
// for (let i = 0; i < num.length; i++){
//   expstri = expstri + char[i].repeat(Number(num[i]))
// }
// console.log(expstri)                                             // zzxxxcc

//---------------------------------------------------------------------------------------------------------------
// expanding string by using repeat method

// let expstri = ''
// function comp(stri) {
//         let arr = stri.split('')
//         for (let i = 0; i < arr.length; i++) {
//                 if (Number(arr[i])) {
//                         expstri = expstri + (arr[i + 1].repeat(arr[i]))
//                 }
//         }
//         console.log(expstri)      //aaaazzvvvvvv
// }
// comp('4a2z6v')

//-----------------------------------------------------------------------------------------------------------------

// //Problem 10---->Compresing the string


// print output is ans=123 from given input is [123]

// let arr = [123]
// let stri = ""
// for (let i = 0; i < arr.length; i++){
//   stri = stri + `ans=${arr[i]}`
// }
// console.log(stri)  // ans=123

//====================================================================================================================


// let stri = 'aabbbbxxxxzzzz'
// let obj = { }

// for (let i = 0; i < stri.length; i++){

//     if(obj.hasOwnProperty(stri[i])){
//         obj[stri[i]] =  obj[stri[i]]  +  1         // updating properties value
//     }else{
//             obj[stri[i]] = 1                     //  adding property in object with intial value 1
//     }
// }
// console.log(obj)        // { a: 2, b: 4, x: 4, z: 4 }

//Example 2.

// let input ="abdkahajfadka"
// output ={
//   a : count of a;
// }


//+==================================================================================================================

// //Q. find out count of word(substring) in given string

// let statementA ="I am new to javascript and i wish to learn every concept of javascript . javascript is great";
// let spr = statementA.split(" ");
// let count = 0;
// for (let a = 0; a < spr.length; a++) {
//   if (spr[a].includes("javascript")) {
//     count++;
//   }
// }
// console.log(count);   // 3

//===============================================================================================================


// Problem  = Seperate Alphabets,Numbers and Symbols(Special Chara) from given string
// Example 1.
// let str = 'AAAAAC2345@#$&6CCCDD%Z'
// let numbers = 0             
// let alpha = 0
// let specialChar = 0

// for (let i = 0; i < str.length; i++) {
//     //console.log((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z'))
// 	if (Number(str[i])) {
// 		numbers = numbers + 1;
// 	}
// 	else if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z')) {     // its gives all alphabets in abcd order from a to z 
// 		alpha = alpha + 1;
// 	}
// 	else{
// 		specialChar = specialChar + 1;
// 	}
// }
// console.log(numbers, alpha, specialChar)      // 5 12 5


//////////////////////////////////////////CHINMAY SIR///////////////////////////////////////////////////////

// Example 2.

// let caa = "123AAAAbaca3435354@@2222!!!&&&&3534535354sca"
// let n = 0
// let a = 0
// let symbol = 0

// for(let i = 0; i < caa.length; i++){

// 	if((caa[i].charCodeAt() >= 65 && caa[i].charCodeAt() <= 90) || (caa[i].charCodeAt() >= 97 && caa[i].charCodeAt() <= 122) ){
// 		a = a + 1
// 	}
// 	else if ((caa[i].charCodeAt() >= 48 && caa[i].charCodeAt() <= 57)) {
//          n = n + 1
// 	}
// 	else{
// 		symbol = symbol + 1
// 	}                                   // rather than alphabets (upper and lower),numbers all are here (all symboles/special char,space,del)
// }
// console.log(n,a,symbol)                    // 24 11 9

//-----------------------------------------------------------------------------------------------------------
// Example 3.

// let caa = "123AAAAbaca3435354@@2222!!!&&&&3534535354sca"
// let n = 0
// let a = 0
// let symbol = 0

// for(let i = 0; i < caa.length; i++){
// 	if(Number(caa[i])){
// 		n = n + 1
// 	}
// 	else if ((caa[i] >= 'A' && caa[i] <= 'Z') || (caa[i] >= 'a' && caa[i] <= 'z')) {
// 		a = a + 1
// 	}
// 	else{
// 		symbol = symbol + 1
// 	}                                   // rather than alphabets (upper and lower),numbers all are here (all symboles/special char,space,del)
// }
// console.log(n,a,symbol)                    // 24 11 9


//-----------------------------------------------------------------------------------------------------------


// Prob = seperate the numbers and strings from given array

// FIRST APPROACH

// let arr = [-6, 'krishna', 2, 'swapnil', 0, 'vishwajit',22,78]
// let number = [];
// let char = [];

// for (let i = 0; i < arr.length; i++){

//     if(typeof(arr[i]) == 'number'){
//         number.push(arr[i])
//     }
//     else{
//         char.push(arr[i])
//     }
// }
// console.log(number)      // [ -6, 2, 0, 22, 78 ]
// console.log(char)        // [ 'krishna', 'swapnil', 'vishwajit' ]
// console.log(number.concat(char))     // [ -6, 2, 0, 22, 78, 'krishna', 'swapnil', 'vishwajit' ]
//------------------------------------------------------------------------------------------------------------
//SECOND APPROACH ( USING FOREACH METHOD)

// let arr = [-6, 'krishna', 2, 'swapnil', 0, 'vishwajit',22,78]
// let number = [];
// let char = [];

// arr.forEach(arr => {
//   if (typeof arr == 'number'){
//     number.push(arr);
//   } 
//   else {
//     char.push(arr);
//   }
// })
// let sortedNum = number.concat(char);
// console.log(sortedNum)                      // [ -6, 2, 0, 22, 78, 'krishna', 'swapnil', 'vishwajit' ]

//---------------------------------------------------------------------------------------------------------------

//********************************************  REGULAR EXPRESSION  *************************************************/
// Q. seperate small and capital characters

// Example1. 
// let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"
// let C  = str.match(/[A-Z]/g).join("")                    // [\w] we can use
// let L = str.match(/[a-z]/g).join("")

// console.log(`Original string = ${str}`)     // Original string = QFGZHhghjgjhghjgQFdghfhjgjgj
// console.log(`Capital Letters = ${C}`)      // Capital Letters = QFGZHQF
// console.log(`Lower Letters = ${L}`)       // Lower Letters = hghjgjhghjgdghfhjgjgj

//--------------------------------------------------------------------------------------------------
// Q. seperate capital letters

// let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"  
// let regex =  /[A-Z]/
// let bigavi = str.split('').filter(function(el,index,arrey){
//     if(regex.test(el)){
//          return true
//     }
// })
//  console.log(bigavi.join(''))                                        // QFGZHQF
//-----------------------------------------------------------------------------------------

//  let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"  
//   let regex =  /[A-Z]/m
//   let smallstr = "" 
//   let capstr = ""
// for(let i = 0; i< str.length; i++){
//     if(regex.test(str[i])){
//         capstr = capstr + str[i]
//     }
//     else{
//         smallstr = smallstr + str[i] 
//     }
// }
// console.log(smallstr)     // hghjgjhghjgdghfhjgjgj
// console.log(capstr)      // QFGZHQF

//-----------------------------------------------------------------------------------------

// let str = "QFGZHhghjgjhghjgQFdghfhjgjgj" 
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
// console.log(capstr)     // QFGZHQF
// console.log(smallstr)   // hghjgjhghjgdghfhjgjgj

//=====================================================================================================
// rest operator

// let abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function print(...a) {
//    let sum = 0
//     a.map((el, i) => {
//         if(i >= 2 && i <= a.length - 4 ){
//             sum = sum + el
//         }
//     })
//     return sum
// }
// let s = print(...abc)
// console.log(s)         // 25

//================================================================================================================

// NOTE = By using destructuring  we can access STARTING, MIDDLE (anywhere) , LAST values of array and also object

// let abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [a,b,c,d,e] = abc.slice(3,8)
// let xyz = [a,b,c,d,e].reduce((acc,el)=>{
//     return acc + el
// })
// console.log(xyz)     // 30

// we can change slice parameters by our requirement to get array elements

//====================================================================================================================

//Q. count elements
// let str = '123456789'
// let count = 0
// for (let i = 0; i < str.length; i++) {
//     count = i + 1
// }
// console.log(count)      // 9

//=========================================================================================================

// sort method working
// let ja = [12,33,133,133,1333]
// console.log(ja.sort())          // [ 12, 133, 133, 1333, 33 ]

// let kk = 'Krishna'
// console.log(kk.split('').sort().join(''))   // Kahinrs          its gives capital first
// kk = 'krishna'
// console.log(kk.split('').sort().join(''))    // ahiknrs

//=================================================================================================================


// find age
// Using for loop

// let birthYear = [1990,1989,2001]
// let ages = []
// for(let i = 0 ; i < birthYear.length ; i++){
//     let age = 2021 - birthYear[i]  
//     ages.push(age)
// }
// console.log(ages)         // [ 31, 32, 20 ]
//-------------------------------------------------------------
// //Using Method
// let xx = birthYear.map(function(el,index,arr){
//     console.log(el,index,arr)
//     return 2021-el
// })
// console.log(xx) 

//===================










































