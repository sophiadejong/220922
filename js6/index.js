import ps from "prompt-sync"

const prompt = ps();

while (true) {
    console.log('1 - Salir')
    console.log('2 - Sumar')
    console.log('3 - Restar')
    console.log('4 - Multiplicar')
    console.log('4 - Dividir')

    const opt = prompt('Escribe una opcion:');
    if (opt == '1') break;
    const n1 = prompt("Escribe un numero: ");
    const n2 = prompt("Escribe un numero: ");

    switch (opt) {
        case '2':
            console.log(parseInt(n1) + parseInt(n2))
            break;
        case '3':
            console.log(parseInt(n1) - parseInt(n2))
            break;
        case '4':
            console.log(parseInt(n1) * parseInt(n2))
            break;
        case '5':
            console.log(parseInt(n1) / parseInt(n2))
            break;
    }

    

}