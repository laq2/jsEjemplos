
function ejercicio4() {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
    let dni = document.querySelector("#dni").value;
    let letraUser = document.querySelector("#letra");
    let Nletra = dni % 23;
   
    console.log(letras[Nletra]);

    if (letra == letraUser) {
        console.log("Las letras son iguales");
    } else {
        console.log("Las letra ingresada es incorrecta");
    }

    if (dni > 0 && dni < 99999999) {
        
        let letra = letras[Nletra];
    
        console.log("la letra de tu DNI es:  "+ letra);

    
    } else {
        console.log("El DNI es incorrecto");
    }


}