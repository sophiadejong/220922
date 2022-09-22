// Funcion que escriba la tabla de multiplicar de un numero 

const table = (num) => {
    for(let i = 1; i <= 10; i++) {
    const result = i * num;
    console.log(`${num} * ${i} = ${result}`);
    }
}

table(12)

const names = ['Pablo', 'Josesito', 'Fernando', 'Luca'] 
const names2 = ['Rodrigo', 'Mario', 'Fernando', 'Luca']
const names3 = ['Maria', 'Antonio', 'Fernando', 'Luca']

function dosPrimeros(array) {
    for (let i = 0; i < array.length-2; i++) {
    const element = array[i]; 
    console.log(element);
    }    
}

dosPrimeros(names3)
