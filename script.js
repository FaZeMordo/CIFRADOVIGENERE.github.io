const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

function cifrarVigenere(texto, clave) {
    let cifrado = "";
    let claveExpandida = "";
    let j = 0;





    for (let i = 0; i < texto.length; i++) {
    if (alfabeto.includes(texto[i].toUpperCase())) {
            claveExpandida += clave[j % clave.length].toUpperCase();
            j++;
    } else {
            claveExpandida += texto[i]; 
    }
    }

  



    for (let i = 0; i < texto.length; i++) {
        let letraTexto = texto[i].toUpperCase();
        let letraClave = claveExpandida[i].toUpperCase();

    if (alfabeto.includes(letraTexto)) {
            let posicionTexto = alfabeto.indexOf(letraTexto);
            let posicionClave = alfabeto.indexOf(letraClave);
            let nuevaPosicion = (posicionTexto + posicionClave) % alfabeto.length;
            cifrado += alfabeto[nuevaPosicion];
    } else {
            cifrado += letraTexto;
    }
    }

    return cifrado;
}





function descifrarVigenere(texto, clave) {
    let descifrado = "";
    let claveExpandida = "";
    let j = 0;





    for (let i = 0; i < texto.length; i++) {
    if (alfabeto.includes(texto[i].toUpperCase())) {
             claveExpandida += clave[j % clave.length].toUpperCase();
             j++;
    } else {
             claveExpandida += texto[i];
         }
     }





     for (let i = 0; i < texto.length; i++) {
         let letraTexto = texto[i].toUpperCase();
         let letraClave = claveExpandida[i].toUpperCase();

    if (alfabeto.includes(letraTexto)) {
             let posicionTexto = alfabeto.indexOf(letraTexto);
             let posicionClave = alfabeto.indexOf(letraClave);
             let nuevaPosicion = (posicionTexto - posicionClave + alfabeto.length) % alfabeto.length;
             descifrado += alfabeto[nuevaPosicion];
    } else {
             descifrado += letraTexto;
         }
     }

     return descifrado;
 }

 



 function cifrarTexto() {
     const texto = document.getElementById("texto").value;
     const clave = document.getElementById("clave").value;

if (!texto || !clave) {
         alert("Por favor, ingresa tanto el texto como la clave.");
         return;
     }

     const resultado = cifrarVigenere(texto, clave);
     document.getElementById("resultado").innerText = "Texto cifrado: " + resultado;
 }





 function descifrarTexto() {
     const texto = document.getElementById("texto").value;
     const clave = document.getElementById("clave").value;

    if (!texto || !clave) {
         alert("Por favor, ingresa tanto el texto como la clave.");
    return;
    }

     const resultado = descifrarVigenere(texto, clave);
     document.getElementById("resultado").innerText = "Texto descifrado: " + resultado;
 }

 module.exports = {
    cifrarVigenere,
    descifrarVigenere,
    expandirClave
};