// recibe es un palindromo
// palindromo es una palabra que se le iguala de adelante a atras

const isPalindromo = (str) => {
    return str.split('').reverse().join('') === str
}

const isPalindromo2 = (str) => {
    str.split('').reverse().join('') === str
}
const str = "Hola Mundo Jajaja"
console.log(str.split('o'))
// console.log(isPalindromo('anitalavalatina'))

const nums = [1,2,3,4]
console.log(nums.reverse())

const strs = ['holi', 'mundo','lol']
console.log(strs.join('|'))

const countWords = (str) => {
    const arr = str.split(' ');
    return arr.length
}

console.log(countWords('this is a phrase'))

// const isPalindromo = (str) => {
//     var newChain = "";
//     for (var i = str.length -1; i >= 0; i--) {
//         newChain+=str[i]
//         if (str == newChain) {
//             return console.log('true') 
//         } else {
//             return console.log('false') 
//         }
//     } 
//     console.log(newChain)
//     return true;
// }

// isPalindromo('no soy sophia')
// isPalindromo('anitalavalatina')
