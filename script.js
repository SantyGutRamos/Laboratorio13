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
function ejercicio6(){
    const nombre=["Santiago","Pepito","Juan","Juan","Maria","Santiago","Santiago"];
    const repeticion=new Set(nombre);
    const arreglo=Array.from(repeticion);
    alert("lista de nombres: "+nombre);
    alert("lista sin los nombres repetidos: "+arreglo);
    return;
}
function ejercicio7() {
    let valores = [];
    let continuar = true;
    while (continuar) {
        let entrada = prompt("Ingrese un valor (o escriba 'no' para terminar):");
        if (!entrada) break;
        if (entrada.toLowerCase() === "no") {
            continuar = false;
        } else {
            valores.push(entrada);
        }
    }
    if (valores.length === 0) {
        alert("No se ingresaron valores.");
        return;
    }
    let tieneRepetidos = verificarDuplicados(valores);
    alert("Lista ingresada: " + valores.join(", "));
    if (tieneRepetidos) {
        alert("Resultado: La lista SÍ contiene elementos duplicados.");
    } else {
        alert("Resultado: La lista NO contiene elementos duplicados.");
    }
    console.log("E7 - ¿Tiene duplicados?: ", tieneRepetidos);
}

function verificarDuplicados(arr) {
    const conjuntoUnico = new Set(arr);
    return conjuntoUnico.size < arr.length;
}
function ejercicio8() {
    const productosPrecios = new Map([
      ["Leche", 2.50],
      ["Pan", 1.80],
      ["Huevos", 3.00],
      ["Manzanas", 4.20]
    ]);
    let productosCompra = [];
    let continuar = true;
    alert("Catálogo de productos: " + Array.from(productosPrecios.keys()).join(", "));
    while (continuar) {
        let nombre = prompt("Ingrese el nombre del producto (o 'no' para terminar):");
        if (!nombre || nombre.toLowerCase() === "no") {
            continuar = false;
            break;
        }
        if (!productosPrecios.has(nombre)) {
            alert("Producto no encontrado en el catálogo. Intenta de nuevo.");
            continue;
        }
        let cantidadStr = prompt(`Ingrese la cantidad de ${nombre}:`);
        let cantidad = Number(cantidadStr);
        if (!isNaN(cantidad) && cantidad > 0) {
            productosCompra.push({ producto: nombre, cantidad: cantidad });
        } else {
            alert("Cantidad no válida.");
        }
    }
    if (productosCompra.length === 0) {
        alert("No se agregaron productos a la compra.");
        return;
    }
    let total = calcularTotal(productosPrecios, productosCompra);
    alert("Productos a comprar: " + productosCompra.map(p => `${p.cantidad} de ${p.producto}`).join(", "));
    alert("El precio total de la compra es: " + total.toFixed(2));
    console.log("E8 - Total de la compra: ", total);
}
function calcularTotal(preciosMap, compras) {
    let total = 0;
    compras.forEach(item => {
        const precioUnitario = preciosMap.get(item.producto);
        if (precioUnitario !== undefined) {
            total += precioUnitario * item.cantidad;
        }
    });
    return total;
}
function ejercicio9() {
    let texto = prompt("Escribe el texto para contar las palabras:");
    if (!texto || texto.trim() === "") {
        alert("No escribiste ningún texto.");
        return;
    }
    let conteo = contarFrecuenciaPalabras(texto);
    let mensaje = "Conteo de Palabras:\n";
    conteo.forEach((cant, palabra) => {
        mensaje += `"${palabra}": ${cant}\n`;
    });
    alert(mensaje);
    console.log("E9 - Conteo de Palabras: ", conteo);
}
function contarFrecuenciaPalabras(texto) {
    const conteoPalabras = new Map();
    const palabras = texto
        .toLowerCase()
        .replace(/[.,!?;:"']/g, '') 
        .split(/\s+/) 
        .filter(palabra => palabra.length > 0);
    palabras.forEach(palabra => {
        conteoPalabras.set(palabra, (conteoPalabras.get(palabra) || 0) + 1);
    });

    return conteoPalabras;
}
function ejercicio10() {
    const datos = new Map([
      ["Santiago", "Chile"],
      ["Lima", "peru"],
      ["Buenos Aires", "Argentina"],
      ["Texas", "EEUU"]
    ]);
    alert("Mapa Original: " + Array.from(datos.entries()).map(([k, v]) => `${k}:${v}`).join(", "));
    let mapaInvertido = invertirClavesValores(datos);
    let mensaje = "Mapa Invertido:\n";
    mapaInvertido.forEach((claveOriginal, nuevoValor) => {
      mensaje += `${nuevoValor}: ${JSON.stringify(claveOriginal)}\n`;
    });
    alert(mensaje);
    console.log("E10 - Mapa Invertido: ", mapaInvertido);
}
function invertirClavesValores(mapOriginal) {
    const mapInvertido = new Map();
    mapOriginal.forEach((valor, clave) => {
        if (mapInvertido.has(valor)) {
            let claveGuardada = mapInvertido.get(valor);
            if (!Array.isArray(claveGuardada)) {
                claveGuardada = [claveGuardada];
            }
            claveGuardada.push(clave);
            mapInvertido.set(valor, claveGuardada);
        } else {
            mapInvertido.set(valor, clave);
        }
    });
    return mapInvertido;
}
function ejercicio11() {
    let marca = prompt("Ingrese la marca del auto:");
    let modelo = prompt("Ingrese el modelo del auto:");
    let anio = prompt("Ingrese el año del auto:");
    if (!marca || !modelo || !anio) {
        alert("Debe ingresar todos los datos.");
        return;
    }
    const Auto = {
        marca: marca,
        modelo: modelo,
        año: Number(anio),
        detalles: function() {
            return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
        }
    };
    alert("Detalles del Auto:\n" + Auto.detalles());
    
    let nuevoAnio = prompt(`El año actual del ${Auto.modelo} es ${Auto.año}. Ingrese el nuevo año:`);
    if (nuevoAnio) {
        Auto.año = Number(nuevoAnio);
        alert("Detalles del Auto actualizados:\n" + Auto.detalles());
    }
    console.log("ejercicio11 Objeto Auto: ", Auto);
}
function ejercicio12() {
    let cadena = prompt("Escribe una cadena para contar la frecuencia de las letras:");
    if (!cadena || cadena.trim() === "") {
        alert("No escribiste nada.");
        return;
    }
    let conteo = contarFrecuenciaLetras(cadena);
    let mensaje = "Frecuencia de Letras (ignora espacios y mayúsculas):\n";
    for (const letra in conteo) {
        mensaje += `"${letra}": ${conteo[letra]}\n`;
    }
    alert(mensaje);
    console.log("E12 - Conteo de Letras: ", conteo);
}
function contarFrecuenciaLetras(cadena) {
    const conteo = {};
    const letras = cadena.toLowerCase().replace(/[^a-z]/g, '');
    for (const letra of letras) {
        conteo[letra] = (conteo[letra] || 0) + 1;
    }
    return conteo;
}
function ejercicio13() {
    const LocalA = {laptop: 3500.5, mouse: 100.35, teclado: 250.9 };
    const LocalB = {mouse: 95.2, monitor: 720.457, teclado: 260.1, camara: 150.999 };
    alert("Catálogo A: " + JSON.stringify(LocalA));
    alert("Catálogo B: " + JSON.stringify(LocalB));
    let catalogoFinal = encontrarMejorPrecio(LocalA,LocalB);
    alert("Catálogo Combinado (Mejor Precio a 2 decimales):\n" + JSON.stringify(catalogoFinal, null, 2));
    console.log("E13 - Catálogo Final: ", catalogoFinal);
}
function encontrarMejorPrecio(c1, c2) {
    const catalogoCombinado = {};
    const todosLosProductos = new Set([...Object.keys(c1), ...Object.keys(c2)]);
    todosLosProductos.forEach(producto => {
        const precio1 = c1[producto];
        const precio2 = c2[producto];
        let precioMinimo;
        if (precio1 !== undefined && precio2 !== undefined) {
            precioMinimo = Math.min(precio1, precio2);
        } else if (precio1 !== undefined) {
            precioMinimo = precio1;
        } else {
            precioMinimo = precio2;
        }
        const precioFormateado = Math.round(precioMinimo * 100) / 100;
        catalogoCombinado[producto] = precioFormateado;
    });
    return catalogoCombinado;
}
function ejercicio14() {
    const listaEmpleados = [
      { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
      { id: 2, nombre: "Luis", area: "TI", salario: 4000 },
      { id: 3, nombre: "Marta", area: "Ventas", salario: 2600 },
      { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
    ];
    let mapaEmpleados = procesarEmpleados(listaEmpleados);
    let mensaje = "Gestión de Empleados por Área:\n";
    mapaEmpleados.forEach((valor, area) => {
        mensaje += `\nÁrea: ${area}\n`;
        mensaje += `Empleados: ${valor.empleados.join(', ')}\n`;
        mensaje += `Promedio Salarial: ${valor.promedio}\n`;
    });

    alert(mensaje);
    console.log("E14 - Mapa de Gestión: ", mapaEmpleados);
}
function procesarEmpleados(empleados) {
    const infoTemporal = new Map();
    empleados.forEach(empleado => {
        const { nombre, area, salario } = empleado;
        let areaInfo = infoTemporal.get(area) || { nombres: [], sumaSalarios: 0, cantidad: 0 };
        areaInfo.nombres.push(nombre);
        areaInfo.sumaSalarios += salario;
        areaInfo.cantidad += 1;
        infoTemporal.set(area, areaInfo);
    });
    const resultadoFinal = new Map();
    infoTemporal.forEach((info, area) => {
        const promedio = info.sumaSalarios / info.cantidad;
        const promedioFormateado = Math.round(promedio * 100) / 100;

        resultadoFinal.set(area, {
            empleados: info.nombres,
            promedio: promedioFormateado 
        });
    });
    return resultadoFinal;
}