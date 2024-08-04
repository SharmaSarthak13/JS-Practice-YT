
const tinderUser = new Object()

tinderUser.id = "213abs"
tinderUser.name = "Sarthak"
tinderUser.isLoggedIn= false
// console.log(tinderUser)

const reguUser = {fullname :{
    username :{
     name :"Sarthak Sharma"
    }
}
}
// console.log(reguUser.fullname.username.name)

const obj1 = {1: "abc",2:"def"}
const obj2 = {3: "abc",4:"def"}

const obj3 = {...obj1,...obj2}
console.log(obj3)

const course = {
    coursename:"Js in Hindi",
    price :"1212",
    teacher : "hitesh"
}

const{teacher}=course
console.log(teacher)