//

const myArry = [1,2,3,5,6,734,342,234]

// console.log(myArry[3]);

myArry.push(32234)
myArry.push(21312)


const newarr= myArry.join()
// console.log(newarr)

const arr1 = myArry.slice(1,3)
console.log("A",arr1)

const arr2 = myArry.splice(1,3)
console.log("B",arr1)