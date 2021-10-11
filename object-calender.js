// let d = new Date()                //here Date is a class 

// console.log(d.getDay())          // // it sets day with index no. sunday = 0
// console.log(d.getDate())        // // to get todays date
// console.log( d.getFullYear())    // to get current year
// console.log(d.getMonth())     //   to print the month in number.
// console.log(d.toLocaleString('default', { month: 'long' })) // to print the month in word
// // Note: JavaScript counts months from 0 to 11:
// //   January = 0.  // December = 11.
// console.log(`${(d.getDate())} ${(d.toLocaleString('default', { month: 'long' }))} ${ d.getFullYear()}`)


// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())
// console.log(d.getMilliseconds())

    let d2 = new Date();
     d2.setDate(d2.getDate() + 400)  // to get the date of the day after 400 days
    console.log(d2.getDate())
    console.log(d2.getFullYear())
    console.log(d2.toLocaleString('default', { month: 'long' }))
