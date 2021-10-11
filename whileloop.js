// Loops iteration 


// for loop , while loop , dowhile loop

// for 


// for([intialization];[conditionCheck];[increment/decrement]){

// }



// for(let i = 0 ; i < 10 ; i++){
//     console.log(i)
// }


// let i = 0

// for (; i < 10;) {
//     console.log(i) //// 0-9
//     i++  // i -- 10
// }
// console.log(i) // 10



// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }


// let k = 'amol'
// let a = ""
// let b = ""

// for (let i = 0; i < k.length; i++) {
//     a = k[i] + a // loma

// }

// for (let i = k.length - 1; i >= 0; i--) {
//     b = b + k[i]
// }

// console.log(a)
// console.log(b)





// // -------------------->


// let r = [2, 3, 2, 44, 55, 66, 55, 3, 66]
// let rk = [] // [2]
// let du = []

// //[55,66,3]
// // 1st iteration 
// for (let x = 0; x < r.length; x++) {
//     if (rk.indexOf(r[x]) < 0) {
//         rk.push(r[x])
//     }
//     else {
//         du.push(r[x])
//     }
// }

// r = [2, 3, 2, 44, 55, 66, 55, 3, 66]
// rk = [] // [2]
// du = []


// for(let i = 0 ; i < r.length ; i++){
//     if(! rk.includes(r[i])){
//         rk.push(r[i])
//     }
//     else {
//         du.push(r[i])
//     }
// }


// let ia = "chinmay deshpande is learning javascript"
// let count = 0
// for(let i = 0 ; i < ia.length ; i++){
//     if(ia[i] == " "){
//         count = count + 1
//     }
// }
// console.log(count)
// console.log("chinmay deshpande is learning javascript".split(' ').length-1)

// hn = "chinmay deshpande is learning javascript"
// a = ""
// for (let i = 0; i < hn.length; i++) {
//     a = hn[i] + a

// }
// console.log(a)


// while  loop 

// let iaa = 0

// while(iaa <= 10){

//     console.log(iaa)  // 0  1
    
//     iaa = iaa + 1 

// }

// random number ------ >  while loop


// break anc continue 


// for(let i = 0 ; i < 10 ; i++){
//     console.log(i)
//     if(i == 3){
//         break;
//     }
// }


// for(let i = 0 ; i < 10 ; ){
//     console.log(i) // 0 1 2 3
//     if(i == 3){
//         continue;
//     }
//     i++
// }

// for(let i = 0 ; i < 10 ; ){
//     i++; // 1 // 2
//     if(i == 3){
//         continue;
//     }
//     console.log(i) // 1 // 2 // 4
// }


// while 



//intialization

// while(condition){
//     // statements 
//     // increment / decrement
// }


// console.log('---------------------------')

// let h = 10

// while(h >= 0){
//     console.log(h)
//     h--
// }



// let randomNumber = Math.floor(Math.random() * 5) + 1  // 3
// let userInput = Number(prompt('Enter the number between 1 to 6'))  // 2


// while(randomNumber !==  userInput){

//     userInput = Number(prompt('Enter the number between 1 to 6')) //3

// }



// let randomNumber = Math.floor(Math.random() * 5) + 1  // 3
// //let userInput = Number(prompt('Enter the number between 1 to 6'))  // 2
// let y = 2
// let guessNumber = false

// while(y >0){
//     let userInput = Number(prompt('Enter the number between 1 to 6'))
//     if(randomNumber ==userInput){
//         guessNumber = true
//         break ;
//     }
//     //userInput = Number(prompt('Enter the number between 1 to 6')) //1
//     y--

// }


// if(guessNumber){
//     document.write('you guess the correct')
// }
// else{
//     document.write('Incorrect guess')
// }





// let randomNumber = Math.floor(Math.random() * 5) + 1  // 3
// //let userInput = Number(prompt('Enter the number between 1 to 6'))  // 2
// let y = 5
// let guessNumber = false

// while(y >0){
//     let userInput = Number(prompt('Enter the number between 1 to 6'))
//     if(randomNumber ==userInput){
//         guessNumber = true
//         break ;
//     }
//     //userInput = Number(prompt('Enter the number between 1 to 6')) //1
//     y--
//     alert(`Number of guess remaing ${y}`)
// }


// if(guessNumber){
//     document.write('you guess the correct')
// }
// else{
//     document.write('Incorrect guess')
// }