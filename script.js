function ejercicio3() {
    let listaNumeros = [];
    let seguir = true;
    while (seguir) {
        let valor = prompt("Escribe un número para agregar (o deja vacío / escribe 'no' para salir):");
        if (!valor) break;
        if (valor.toLowerCase()==="no") {
            seguir = false;
        } else {
            let numero = Number(valor);
            if (!isNaN(numero)) {
                listaNumeros.push(numero);
            } else {
                alert("Dato no válido, intenta otra vez.");
            }
        }
    }

    if (listaNumeros.length===0) {
        alert("No se ingresaron números.");
        return;
    }
    let duplicados = duplicarNumeros(listaNumeros);
    alert("Originales: " + listaNumeros.join(", ") + "\nDuplicados: " + duplicados.join(", "));
}
function duplicarNumeros(arreglo) {
    let resultado = [];
    for (let n of arreglo) {
        resultado.push(n * 2);
    }
    return resultado;
}

function ejercicio4() {
    let valores = [];
    let continuar = true;

    while (continuar) {
        let entrada = prompt("Ingrese un número (o escriba 'no' para terminar):");
        if (!entrada) break;
        if (entrada.toLowerCase() === "no") {
            continuar = false;
        } else {
            let num = Number(entrada);
            if (!isNaN(num)) {
                valores.push(num);
            } else {
                alert("Ingrese un número válido.");
            }
        }
    }
    if (valores.length === 0) {
        alert("No se ingresaron valores.");
        return;
    }

    let total = filtrarYCalcular(valores);
    alert("La suma de los cuadrados de los números positivos es: " + total);
}
function filtrarYCalcular(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            suma += arr[i] * arr[i];
        }
    }
    return suma;
}
function ejercicio5() {
    let texto = prompt("Escribe una oración con palabras separadas por espacios:");
    if (!texto || texto.trim() === "") {
        alert("No escribiste ninguna palabra.");
        return;
    }
    let resultado = ordenarPalabras(texto);
    alert("Palabras en orden alfabético y mayúsculas:\n" + resultado.join(", "));
}
function ordenarPalabras(frase) {
    let palabras = frase.trim().split(/\s+/);
    let mayus = [];
    for (let i = 0; i < palabras.length; i++) {
        mayus.push(palabras[i].toUpperCase());
    }
    mayus.sort();
    return mayus;
}