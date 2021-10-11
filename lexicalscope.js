// new topic = "lexical scope"

// if there is a function or function inside a function then,child function has access of all
// variables that parent function have

function addA(x, y) {

    console.log(x + y)

    let h = 30
    let v = 30

    function addB() { // this is a child function which can access previous function values

        let j = 10
        let d = 20

        console.log(h + v)
        console.log(j + d)


        function addC() {

            let p = 50
            let q = 50

            console.log(h + v + j + d)
            console.log(p + q)

        }
        addC()
    }
    addB()
}
addA(12, 13)