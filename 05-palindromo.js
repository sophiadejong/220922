// recibe es un palindromo
// palindromo es una palabra que se le iguala de adelante a atras

const isPalindromo = (str) => {
    return str.split('').reverse().join('') === str
}

console.log(isPalindromo('anitalavalatina'))


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
