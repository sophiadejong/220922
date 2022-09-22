// recibe es un palindromo
// palindromo es una palabra que se le iguala de adelante a atras

const isPalindromo = (str) => {
    var newChain = "";
    for (var i = str.length -1; i >= 0; i--) {
        console.log(newChain+=str[i])
    } 
    return true;
}

console.log(isPalindromo('romaamor'));
