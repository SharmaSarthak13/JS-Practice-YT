

const marvel = ["thor","spiderman","ironman"]
const dcHeroes = ["batman","superman","flash"]

marvel.push(dcHeroes)
// console.log(marvel)

const allhero = [...marvel,...dcHeroes]
console.log(allhero)