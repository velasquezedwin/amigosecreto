
let listaUsuarios = [];



function etiquetaTexto(etiqueta, texto){
    let etiquetaHTML = document.querySelector(etiqueta);
    etiquetaHTML.innerHTML = texto;
}

function limpiarInput() { // Función que limpia el input después de ingresar el nombre
    document.querySelector('#inputAmigo').value = '';  // Selecciona el input por su id y lo deja vacío
    return;
}


function botonAgregarAmigo() {
    let nombreDigitado = document.getElementById('inputAmigo').value;



    if (listaUsuarios.includes(nombreDigitado)) {
        alert("Error! El nombre ya existe en la lista.");
        limpiarInput();
    
    /*Este "if" evalua si lo digitado tiene números, la 1ra parte del "or ||" verifica si hay enteros con la expresión 
    "parseInt": no coloco el "===" para que se evalue siempre como texto. La 2da parte del "or ||" es un "/\d/.test" 
    donde "d" es  comodin que evalua numeros entre 0 y 9, si el dato contiene números y letras no podrá registrarse*/
} else if (nombreDigitado == parseInt(nombreDigitado) || (typeof nombreDigitado === 'string' && /[0-9+*.,;\/=?¿"#%!&)('¡´¨}{-]/.test(nombreDigitado))) {
    alert("Error!\n\n Solo se deben ingresar datos alfabéticos");
    limpiarInput();
}
    /*Este "if" evalua si el campo está vacio en la primera parte del "or ||", en la segunda parte la expresión
    ".trim()" agregada a "nombreDigitado", limpia cualquier espacio y genera error por defecto de campo vacio*/
    else if (nombreDigitado === "" || nombreDigitado.trim() === "") {
        alert("Error!\n\n El campo no puede estar vacío");
        limpiarInput();
    }
    /*La expresión "/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombreDigitado)" es la confirmación del dato totalmente alfabético
    Si el dato ingresado corresponde, será almacenado*/
    else if (/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombreDigitado)) {
        /*Esta expresión en particular ".replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '')" limpia finalmente el valor almacenado*/
        listaUsuarios.push(nombreDigitado.trim());
        etiquetaTexto('#parrafoTemportal', `${listaUsuarios.join("<br>")}`);
        etiquetaTexto("#tituloDelInput", `Haz ingresado a ${nombreDigitado}!!`);
        limpiarInput();
        console.log(listaUsuarios);
    }

    return;
}



function botonAmigoSecreto() {  
	if (listaUsuarios.length === 0) {
		alert("No se puede hacer un sorteo de 'Amigo Secreto' si no has ingresado nombres");
	} else {
		let amigoAleatorio = listaUsuarios[Math.floor(Math.random() * listaUsuarios.length)];
		etiquetaTexto('#resultado', `Tu Amigo Secreto Será ${amigoAleatorio}!!`);
		console.log(amigoAleatorio);
		return;
		}

}


function botonReiniciar() {
    // 1. Reiniciar la lista de usuarios
    listaUsuarios = [];

    // 2. Limpiar el campo de entrada de texto
    limpiarInput();

    // 3. Limpiar cualquier mensaje o contenido en la interfaz de usuario
    etiquetaTexto('#parrafoTemportal', ''); // Limpia el párrafo temporal
    etiquetaTexto("#tituloDelInput", "¡Juego Reiniciado! Ingresa un nuevo nombre."); // Mensaje de reinicio
    etiquetaTexto('#resultado', ''); 

    console.log("Juego reiniciado. Estado inicial restablecido.");

    return;
}


