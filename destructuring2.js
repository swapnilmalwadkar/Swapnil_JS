// let amol = {
//     fullName:"chinmaydeshpande",
//     age:34,
//     rollNo:12,
//     family:{
//         father:"Shirish Deshpande",
//         mother:"Kanchan Deshpande"
//     },
//     skills:["Python","Javascript","HTML","CSS"]

// }

// // Retrive values 
// // Dot notation and bracket notation 
// console.log(amol.family.mother)
// console.log(amol['family']['father'])


// // update 
// amol.skills.push('Java')
// console.log(amol.skills)
// // adding new property 

// amol.language = "Marathi"
// console.log(amol)

// // del 
// delete amol.language
// console.log(amol)

// // --------------------------


// amol = {
//     fullName:"chinmaydeshpande",
//     age:34,
//     rollNo:12,
//     family:{
//         father:"Shirish Deshpande",
//         mother:"Kanchan Deshpande"
//     },
//     skills:["Python","Javascript","HTML","CSS"]

// }

// // let fn = amol.fullName
// // let age = amol.age
// // let lenSkills = amol.skills.length
// // console.log(a)


// chinmay = {
//     fullName:"chinmaydeshpande",
//     age:34,
//     rollNo:12
// }

// let {fullName , age , rollNo } = chinmay
// // console.log(fullName,age,rollNo)
// // console.log(chinmay)

// //custome name 
// let {fullName:fn , age:ag , rollNo:rn } = chinmay
// console.log(fn,ag,rn)

// let obj = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }


// let {page:pg,per_page:per_page,support:sp,total:tl,data:dta} = obj

// //{repsonse,request}


// // Nested 
// let poorva = {
//     id:1,
//     title:'My story',
//     fullName:"poorva vyas",
//     author:{
//         first:"j k",
//         lastname:"rolling"
//     }
// }

// //actual use

// let {id,author:{first,lastname}} = poorva
// console.log(id,first,lastname)

// // custom name

// let {id:idTwo,author:{first:fn2,lastname:ln2}} = poorva
// console.log(idTwo,fn2,ln2)


// // abhisha = {
// //     id:1,
// //     title:'My story',
// //     fullName:"abhisha ",
// //     skills:["python","java","javscript"]
// // }


// // Array destructuring


// let skills = ["python","java","javscript"]

// let [a,b,c] = skills
// console.log(a,b,c)

// abhisha = {
//     id:1,
//     title:'My story',
//     fullName:"abhisha ",
//     skills:["python","java","javscript"]
// }

// let {id:k,title:t,skills:[aa,bb]}= abhisha
// console.log(k,t,aa,bb)

// // ------------------->

// let arr = [1,2,[2,3],4,5]
// let [aaa,bbb,[ccc,ddd],eee,fff] = arr
// console.log(aaa,bbb,ccc,ddd,eee,fff)

// //--------------------------------->
// console.log(arr[2][arr[2].length-1])

// let kk = [22,3,4]
// console.log(kk[kk.length-1])

// //--------------------------------------

// arr2 = [1,2,[2,3],4,5]
// console.log(arr2[2][arr2[2].length-1])
// let [ab,bc,cd,de,ef,fg]= [1,2,[2,3],4,5].flat()





// -------- my practice-------------

// let info = {
//     fname : "swapnil",
//     lname : "malwadkar",
//     rollNo : 4447,
//     family :{
//         father : "balaso malwadkar",
//         mother : "bebi malwadkar"
//     },
//     friends :["krishna","aviraj","vishwajit","akshay"]
// }

// fetching value
 
// let a = info.family.father   // by dot notation
// console.log(a)            //balaso malwadkar

// let b = info['family']['mother']    // by bracket notation
// console.log(b)         // bebi malwadkar

// let c = info.friends
// console.log(c)      // [ 'krishna', 'aviraj', 'vishwajit', 'akshay' ]

// let c = info.friends[1]
// console.log(c)          // aviraj


// updating the value

// info.rollNo = 4448
// console.log(info)   
    
// info.friends[1] = "prashant"
// console.log(info)


// adding new value

// info.city = "pune"
// console.log(info)

// info.friends.push('monya')
// console.log(info)


// deleting any value 

// delete info.rollNo
// console.log(info)

// delete info.friends[1]
// console.log(info)





let info = {
    fname : "swapnil",
    lname : "malwadkar",
    rollNo : 4447,
    family :{
        father : "balaso malwadkar",
        mother : "bebi malwadkar"
    },
    friends :["krishna","aviraj","vishwajit","akshay"]
}

let {fname,lname,rollNo,family,friends} = info
// console.log(fname,lname,rollNo,family,friends)

console.log(fname)     //swapnil
console.log(lname)