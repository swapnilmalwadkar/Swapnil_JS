
// new concept - "inheritance"

// first example of child object having no constructor.
// ( single level inheritance means super class having only one subclass)
// but subclass having no constructor.


// class Grandfather {

//     constructor(gname,lastname,age){
//         this.gname = gname,
//         this.lastname = lastname,
//         this.age = age
//     }
//     displayName(){
//         console.log(`my name is ${this.gname} and lastName is ${this.lastname} and i am ${this.age} years old`)
//     }
// }


// class father extends Grandfather{
//  //                                    // if there is no constructor at child level,then by default
// //                                     // parent constructor will be called and we have to pass rhe arguments

// }

// let balaso = new father("sopan","malwadkar",80)
// console.log(balaso.gname)                        // sopan
// console.log(balaso.lastname)                     // malwadkar
// console.log(balaso.age)                          // 80
// balaso.displayName()         // my name is sopan and lastName is malwadkar and i am 80 years old


// --------------------------------------------------------------------------------------------------


// second example with single child object having constructor
// single level inheritance, with subclass having constructor.

// class Grandfather {
//     constructor(gname,lastname,age){
//     this.gname = gname,
//     this.lastname = lastname,
//     this.age = age
// }
// displayName(){

//     console.log(`my name is ${this .gname} and my age is ${this.age}`)

// }

// }
// class father extends Grandfather{
//     constructor(gname,lastname,age,fname,fage){

//         super(gname,lastname,age)
//         this.fname = fname,
//         this.fage = fage
//     }
//     displayName(){
//         console.log(`my name is ${this.fname} and my age is ${this.fage}`)
//         super.displayName()
//     }
// }
// let balaso = new father("sopan","malwadkar",80,"balaso",51)

// balaso.displayName()  //my name is balaso and my age is 51
// //                    //my name is sopan and my age is 80


// -----------------------------------------------------------------------------------------

// third example with multiple child objects with constructor
// multiulevel inheritance means super class having multiple subclass with each subclass have a constructor


class Grandfather{
    constructor(gname,lastname,age){
        this.gname = gname,
        this.lastname = lastname,
        this.age = age
    }
    displayName(){
        console.log(`my name is ${this.gname} and age is ${this.age}`)
    }
}

class father extends Grandfather{
    constructor(gname,lastname,age,fname,fage)
    {
        super(gname,lastname,age)

        this.fname = fname,
        this.fage = fage
    }
     displayName(){
         console.log(`my name is ${this.fname} and my age is ${this.fage}`)
         super.displayName()
     }
    }

     class son extends father{
         constructor(gname,lastname,age,fname,fage,sname,sage){
             
            super(gname,lastname,age,fname,fage)

            this.sname = sname,
            this.sage = sage
         }
       
         displayName(){
             console.log(`my name is ${this.sname} and my age is ${this.sage}`)
             super.displayName()
         }
     }

let swapnil = new son("sopan","malwadkar",80,"balaso",51,"swapnil",25)

swapnil.displayName()
 
