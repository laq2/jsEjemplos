function ejercicio8() {
 

    let texto = prompt ("Ingrese la cadena");

    let result = esPalindromo(texto);

    console.log(result)

}

    function esPalindromo(texto) {
    
        texto.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

        
            if (texto === texto.split('').reverse().join('')) {
                return "es un palindromo";
            }
            else {
                return "no es palidromo";
            }
        }
        