
function ejercicio7 (){
    let caracter = prompt("ingresar cadena de texto");

   let result = maymi(caracter);

   console.log(result);

}
function maymi(caracter) {
let May = 0;
let Min = 0;

for (let i = 0; i < caracter.length; i++) {
   if (caracter.charAt(i) === caracter.charAt(i).toUpperCase()) {
    May++;
   }else if (caracter.charAt(i) === caracter.charAt(i).toLowerCase()) {
    Min++;
   }
}

if (May == 0) {
    return "son todas minusculas";
} else if (Min == 0) {
    return "son todas Mayusculas";
}else {
   return "son ambos caractes"; 
}

}
