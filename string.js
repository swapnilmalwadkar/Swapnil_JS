// string methods   string stores the values by index no.
 //                                                                 //  0    1   2   3   4   5   6
// //   let fullName = "swapnil"                               // //    s    w   a   p   n   i   l
//                                                               //     -7   -6  -5  -4  -3  -2   -1
// console.log(fullName)     // // swapnil

// console.log(typeof fullName)     //  // string

// console.log(fullName[0])      // //  s

// console.log(fullName.length)      // //  7

//  console.log(fullName[fullName.length - 1] )    // //   l  printing last word of our string


// use of for loop for printing given string elements from left to right

// let fullName = "swapnil"

// for(let i=0; i<fullName.length; i++){

//     console.log(fullName[i])            // //   s w a p n i l
// }



// use of for loop for printing given string elements from right to left

// let fullName = "swapnil"

// for(let i=fullName.length-1; i>0; i--){

//     console.log(fullName[i])            // //  l i n p a w s
// }


// string concatination 

// let firstName = "swapnil"

// console.log('my name is'+ " " + firstName)     // // my name is swapnil


// string interpolation

// let firstName = "swapnil"
// let lastName = "malwadkar"

// console.log(`my firstName is ${firstName} and last is ${lastName}`)         // //  my firstName is swapnil and last is malwadkar



// // method 1 - toUpperCase

// let info = "i am swapnil and i am from baramati"

// let a = info.toUpperCase();
// console.log(a)                // // I AM SWAPNIL AND I AM FROM BARAMATI


// // method 2 - toLowerCase

// let info = "I AM SWAPNIL AND I AM FROM BARAMATI"

// let a = info.toLowerCase();
// console.log(a)                // //  i am swapnil and i am from baramati


// // method 3  - includes         it returns true or falls

// let info = " i am swapnil and i am from  baramati"

// let a = info.includes("baramati")
// console.log(a)                    // // true


// // method 4 - startsWith   it returns true or falls

// let dialogue = "welcome to goa singham"

// let a = dialogue.startsWith("wel")
// console.log(a)                        // // true


// // method 5 - endsWith

// let dialogue = " welcome to goa singham"

// let a = dialogue.endsWith("am")
// console.log(a)                     // // true


// // method 6 - search     //  this is similar to includes method but it returns index positoin of searched word
                            // and if word is not found in the string then it returns -1
// let str = "javascript is a easy language"

// let a = str.search("easy")
// console.log(a)                        // // 16  it consider space as a index


//  method 7 - match  it returns arrey with matched words in string

// let  info = " i am swapnil and i am from malegaon"

// let a = info.match(/am/g);       // // g is given to see 'am' word in whole string. means globaly.
// console.log(a)                      // // [am,am]


// method  8 - indexOf        // // it returns the index of our seachred word which he got first.

// let str = "i am swapnil and i am from baramati"

// let a = str.indexOf("am")
// console.log(a)                   // // 2


// //  method  9 - lastIndexOf     // // similar ti indexOf method but starts searching word from end of the string.

// let str = "javascript is great is language"

// let a = str.lastIndexOf("is")
// console.log(a)                    // // 20


// // method 10 - replace

// let dialogue = "welcome to goa singham"

// let a = dialogue.replace("goa","pune");
// console.log(a)                               // // welcome to pune singham


// // method 11 - trim        // // it removes extraa spaces from left and right of the string.

//  let str = "    javascript is easy language    "

//  let a = str.trim();
//  console.log(a)                    // // javascript is easy language



// // method 12 - charAt              // // it returns the character present at our gien index no. in the string.

// let str = "javascript is a easy language"

// let xyz = str.charAt(3);
// console.log(xyz)                        // // a


// // let method 13 - charCodeAt      // //  it gives the charactercode from the ascii table

// let str = "javascript is a great language"

// let a = str.charCodeAt(1)
// console.log(a)      // // at index 1 there is 'a'  character present and this character has code of 97 in ascii table    




// //   method 14 - fromCharCode     // // it gives character present at given position in the ascii table

// let a = String.fromCharCode(65)
// console.log(a)                             // // A



// //  method 15 - concat 

// let str1 = "hello"
// let str2 = " i am swapnil"
// let str3 = " welcome"

// let a = str1.concat(str2,str3);
// console.log(a)                  // //  hello i am swapnil welcome


// //  method 16 - split     // // this method breaks the string and convert it in arrey.

// let str = "cypress is a test automation tool"

// let a = str.split(" ")
// console.log(a)                // // [ 'cypress', 'is', 'a', 'test', 'automation', 'tool' ]


// // method 17 - repeat      // // it repeats the string our required no. of times

// let str = "welcome home "

// let a = str.repeat(3);
// console.log(a)                     // // welcome home welcome home welcome home 



// // method 18 - slice         // //  to cut the string

// let statement = "we are the people of india"

// let a = statement.slice(11,17);       if we dosse not give the second parameter then it will give all the string from index 11
// console.log(a)                        // // people



// // method 19 - substr

// let str = "javascript is a easy language"

// let a = str.substr(2)
// console.log(a)               // // vascript is a easy language

// let a = str.substr()           // if we do not give any parameter then it will print all string as it is
// console.log(a)


// let a = str.substr(2,5)       // here he will cut 5 letters from starting point i.e 2
// console.log(a)                   ////  vascr



// // method 20 - substring        // //this method starts cutting from 2 and cuts upto 5 (not include 5th character)

// let str = "javascript is a easy language"

// let a = str.substring(2,5);
// console.log(a)                 // // vas


// // method 21 - tostring  // // this method returns our numbered variable as it is
                            // // but changes its data type from number to string.

// let str = 50

// let a = str.toString();
// console.log(a)                  // 50 but its data type is string.

// // console.log(typeof a)        //  string

// // // if we do a + 20 then it will show 5020

// console.log(a + 20)          //// 5020







// // ************ lecture practice ***********************

// let language =  "javascript"

// console.log(language.length)          // 10

// console.log(language[0])               // j

// console.log(language[language.length-1])    // t

// console.log(typeof(language))            //  string


// let statement = "javascript is clien't side scripting language"    // write string in double quotes when we have to use single 
// console.log(statement)                                             // quote within the string.


// let statement = 'javascript is "client" side scripting language'     //  write string in single quote when we have to use double
// console.log(statement)                                               //    quotes within the string.


 
// let abc = "swapnil"
// let def = "malwadkar"

// console.log("my first name is "+abc+" and"+" my last name is "+def)      // old way

// console.log(`my first name is ${abc} and my last name is ${def}`)        // another way called 'string interpolation'





// string + string --> string 
// string + number --> string 
// number + string --> string 
// number + number --> number


// let a = 100
// let b = 'swapnil'
// let c = 120

// console.log(a + b)           // 100swapnil
// console.log(a + c)           // 220
// console.log(b + c)           // swapnil120
// console.log(a + b + c)       // 100swapnil120



// function add(x,y){        this is called user defined function
//     return x+y
// }
//  let a=add(10,20)
//  console.log(a)          // 30


// console.log(100)           // this inbuilt function  it prints what we pass


//   **** string methods ********

// // method  1 - toUpperCase           //  convert string into uppercase and return type is string.

// let a = "javascript"

// let b = a.toUpperCase()
// console.log(b) 
// console.log(typeof b)                // JAVASCRIPT



// // method  2 - toLowerCase           //    convert string into lowercase and return type is string.
 
// let a = "MINSCOLE"

// let b = a.toLowerCase()
// console.log(b) 
// console.log(typeof b)                    // minscole



// // method chaining in javascript

// let a = "india"

// let b = a.toUpperCase().toLowerCase().length
// console.log(b)


// // method  3 - slice
                                                 //              0       1     2     3     4      5     6    7     8    9
// let str = "javascript"                         //              j      a     v     a     s      c    r     i     p    t
//                                                     //        -10     -9   -8    -7     -6    -5   -4    -3    -2   -1


// let a = str.slice(2)
// console.log(a)                // vascript     if second parameter not given then print all string from starting point

// let b =str.slice(1,7)
// console.log(b)                 // avascr     last parameter not included

// let c = str.slice(-5)
// console.log(c)                  //  cript


// let d = str.slice(-8,8)
// console.log(d)                     //   vascri


// let e = str.slice(-8,-4)
// console.log(e)                       // vasc


// let name1 = "abhijeet"            //  convert forst word of string into upper case


// first way
// let a = name1[0].toUpperCase() + name1.slice(1)
// console.log(a)                                      // Abhijeet   



// second way

// let name1 = "abhijeet"  

// let newstr = ""
                                                                                          
// for (let i=0; i<name1.length; i++){

//     if(i==0){

//          newstr= newstr + name1[i].toUpperCase()

//          }
//          else{
//                 newstr = newstr + name1[i]
//          }
// }

// console.log(newstr)                     // Abhijeet
// ************************** day 3 ****************************************

// 4 - includes

// let drinks = "sprite maza coca-cola thumpsup slice"

// let userWant = "coca-cola"

// if(drinks.includes("coca-cola")){
//     console.log("drinks is available")
// }
// else{
//     console.log("drinks is not available")
// }



// method 5 -  trim           //// trim method used to remove extraa spaces from left and right of the string.

// let str = "  swapnil malwadkar    "

// console.log(str.length)         //23
// let a = str.trim()
// console.log(a)                      // // for confirmation of treaming we can find the length of given string
//                                     // // before and after the treaming and see the diiference.

// console.log(a.length)        // 17


// // method 6 - trimRight  //  to remove spaces from rightside of the string

// let str = "india   "
// console.log(str.length)   //  8
// let a = str.trimRight();
// console.log(a)
// console.log(a.length)     // 5



// // method 7 - trimLeft    // //  to remove spaces from leftside of the string

// let abc = "    swapnil"

// let s = abc.trimLeft();
// console.log(s)

 
// // if we want to remove the space from left,right and from middle of the string then

// let aaa = "  swapnil malwadkar    "

// let a = aaa.trim()
// // // console.log(a)                         ////  swapnil   malwadkar

// let b = aaa.trim().split(" ")
// // // console.log(b)                          // // [ 'swapnil', 'malwadkar' ]

// let c = aaa.trim().split(" ").join("")
// console.log(c)                                 // // swapnilmalwadkar


// // another same example

// let n = " chinmaya deshpande "
// console.log(n.trim())   //"chinmay deshpande"
// console.log(n.trim().split(' ')) // ["chinmay","deshpande"]
// console.log(n.trim().split(' ').join("")) //['chinmaydeshpande']



// // method 8 - replace 

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



// // method 8 - indexOf   it gives index no. of our searched character

// let str ="swapnil"
// let a = str.indexOf('i')
// console.log(a)

// but if we have string like  and we have to get the index of second 
// occurance of our word then

// let str = "ammoml"
// let r = str.indexOf('m',str.indexOf('m')+1)
// console.log(r)   // 2

// // for third accourance
// let str = "ammoml"
// let r = str.indexOf('m',str.indexOf('m',str.indexOf('m')+1+1))
// console.log(r)













