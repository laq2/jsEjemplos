function ejercicio10(){
    let resultados = Array(11).fill(0);


for (let i = 0; i < 36000; i++) {
    let suma = lanzarDados();
    resultados[suma - 2]++;
}
        
            for (let i = 0; i < resultados.length; i++) {
                console.log("Suma"+i + 2+":"+ resultados[i]+" apariciones");
}

}

function lanzarDados() {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    return suma;
}