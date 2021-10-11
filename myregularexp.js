// ---------- REGULAR EXPRESSIONS(REGEX)-----------------

// there are two ways of expressing the regex

// 1 - let abc = new regex("word")     // as a constructor

// 2 - let abc = /word/;               //  using slash


// // regex methods - 

// 1 - search                            

// let ss  = "Hi i am to PYTHON and learning python"
// let regex2 = /python/;                  
// let h = ss.search(regex2)            // in search method we have to give exact match.and this method gives only first occurance
// console.log(h)                        // 31   because search method returns index no.


// let rr  = "Hi i am to PYTHON and learning python"
// let regex2 = /python/i;                  // i is a modifier which means case insensitiv
// let h = rr.search(regex2)
// console.log(h)    //  //  11  because search method returns index no.

    
// ---------------------------------------------------------------------------

// method - 2 - match

// let rra  = "Hi i am to PYTHON and learning python"

// let regex3 = /python/gi;
// let gg = rra.match(regex3)
//  console.log(gg)              //  // [ 'PYTHON', 'python' ] because match method returns arrey of exact match
                                              

// let rra  = "Hi i am to PYTHON and learning python"

// let regex3 = /python/i;
// let gg = rra.match(regex3)
// console.log(gg)                  // //   [   'PYTHON' ]


// let rra  = "Hi i am to PYTHON and learning python"

// let regex3 = /python/g;
// let gg = rra.match(regex3)
// console.log(gg)                           // // [ 'python' ]

 

// --------------------------------------------------------------------------------

// // method - 3 replace

// let abc = "virat is a great player and VIRAT is from mumbai"

// let regex3 = /virat/ig;
// let dd = abc.replace(regex3,"sachin")
// console.log(dd)             // // sachin is a great player and sachin is from mumbai


// let abc = "virat is a great player and VIRAT is from mumbai"

// let regex3 = /virat/i;
// let dd = abc.replace(regex3,"sachin")
// console.log(dd)              //  sachin is a great player and VIRAT is from mumbai. it replace only first occurance  


// let abc = "virat is a great player and VIRAT is from mumbai"

// let regex3 = /virat/g;
// let dd = abc.replace(regex3,"sachin")
// console.log(dd)            //  sachin is a great player and VIRAT is from mumbai


// -----------------------------------------------------------------------------------------

// -------------  diffrent programs on regex---------------------

// program - 1   - get the elements which include pune

//  let names = ["chinmay-pune",'poorva-ujjain','abhisha-chandrapur','mayuri-nagpur','amol-pune']

//  const h = /pune/                    // pattern we have to search
// console.log(h.test(names[0]))     // true    // test method returns true or falls


// let zz = names.filter(function(el){
//     return h.test(el)
// })
// console.log(zz)         //   [ 'chinmay-pune', 'amol-pune' ]

// -----------------------------------------------------------------------------------------------

// program - 2 - sortout elements which starts from 'a'

//   let names = ["chinmay-pune",'poorva-ujjain','abhisha-chandrapur','mayuri-nagpur','amol-pune']

//  const h =  /^a/                      // pattern we have to search    here, ^ means startswith
// // console.log(h.test(names[1]))            //  false


// let kk = names.filter(function(el){
//     return h.test(el)
// })
// console.log(kk)                           // [ 'abhisha-chandrapur', 'amol-pune' ]


// --------------------------------------------------------------------------------------------------


// program - 3 - get the elements which includes 4 letters.


// let namesStudents = ["amol","archit","amit","amey","abhisha","arman"]

// let ba =  /^....$/                                  // ^ = startswith   $ = Endswith
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)                    // [ 'amol', 'amit', 'amey' ]

// ----------------------------------------------------------------------------------------------

// program - 4 - find letters starts with 'a' and having second word 'm' or 'r'

// let namesStudents = ["amol","archit","amit","amey","abhisha",'arman']
// let ba =  /^[a][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)                     //  [ 'amol', 'archit', 'amit', 'amey', 'arman' ]


// -----------------------------------------------------------------------------------------------


// program - 5 -  get the numbers having first character '7' and second character '7' with total length of 10

// let num = [7709192441,7779898999,9876787665,989676554,7789089089089890]
//  let b = /^[7][7].{8}$/
// let yy = num.filter(function(el){
//     return b.test(el)
// })
// console.log(yy)                     //   [ 7709192441, 7779898999 ]

// ------------------------------------------------------------------------------------------------


// program - 6 -  [\d] = [0-9]    

// let num = [7709192441,7779898999,9876787665,989676554,7789089089089890]

// let b = /^[\d][\d].{8}$/               // /^[0-9][0-9].{8}$/ 
// let yy = num.filter(function(el){
//     return b.test(el)
// })
// console.log(yy)                  // [ 7709192441, 7779898999, 9876787665 ]


// -----------------------------------------------------------------------------------------------


// program - 7 -  [\D] - [^0-9]

// let num = [7709192441,7779898999,9876787665,989676554,7789089089089890]

// let b = /^[\D][\D].{8}$/                        //     /^[^0-9][^0-9].{8}$/                   
// let yy = num.filter(function(el){
//     return b.test(el)
// })
// console.log(yy)                         //   ans = []  blank arrey


// ------------------------------------------------------------------------------------------------

// program - 8 -   [\W]  =  [^a-zA-Z0-9_]


//  let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']
               
// let ba = /^[\W][mr]/                        //   /^[^a-zA-Z0-9_][mr]/  
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)                          //  ans = []    blank arrey

// ----------------------------------------------------------------------------------------------

// program - 9 -   [\w]  =  [a-zA-Z0-9_] 

// let namesStudents = ["amol","Archit","amit","amey","abhisha",'arman']

// let ba =  /^[\w][rm]/                            //     /^[a-zA-Z0-9_][mr]/
// let fchar = namesStudents.filter(function(el){
//     return ba.test(el)
// })
// console.log(fchar)                             //     [ 'amol', 'Archit', 'amit', 'amey', 'arman' ]

