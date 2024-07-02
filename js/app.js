alert('¡Hola! Vamos a ver qué tal estás en cultura general, si quieres jugar, responde las siguientes preguntas con el número de la opción o escribiendo la misma. Recuerda que si no ingresas algunas de estas dos, tu respuesta será incorrecta. ¿Jugamos?')

function pregunta1 () {
    let respuesta1 = prompt('¿Cuál es la capital de Venezuela?\n1. Falcón\n2. Coro\n3. Caracas');
    if (respuesta1 === '3' || respuesta1.toLowerCase() === 'caracas') {
        alert ('¡Respuesta correcta :D! Caracas (Distrito Metropolitano de Caracas), capital de Venezuela'); 
    } else {
        alert ('Respuesta incorrecta D:');
    }
}
pregunta1 ();

function pregunta2 () {
    let respuesta1 = prompt('¿Cuál es río más largo del mundo?\n1. Amazonas\n2. Nilo\n3. Mississippi');
    if (respuesta1 === '1' || respuesta1.toLowerCase() === 'amazonas') {
        alert ('¡Respuesta correcta :D, vas bien! Los científicos concluyeron que el río Amazonas tiene una longitud total de 6.800 kilómetros, frente a los 6.650 del río Nilo.'); 
    } else {
        alert ('Jejeje, respuesta incorrecta D:');
    }
}
pregunta2 ();

function pregunta3 () {
    let respuesta1 = prompt('¿Quién pintó la Monalisa?\n1. Pablo Picasso\n2. Leonardo Da Vinci\n3. Vincent Van Gogh');
    if (respuesta1 === '2' || respuesta1.toLowerCase() === 'leonardo da vinci') {
        alert ('¡Respuesta correcta :D, eres bueno en esto! La Gioconda, también conocida como Monalisa, fue pintada por Leonardo Da Vinci en el siglo XVI'); 
    } else {
        alert ('Ups, respuesta incorrecta D:');
    }
}
pregunta3 ();

function pregunta4 () {
    let respuesta1 = prompt('¿Qué cantidad de huesos tiene el cuerpo humano?\n1. 206\n2. 208\n3. 210');
    if (respuesta1 === '1' || respuesta1 === '206') {
        alert ('¡Es correcto! ¡Un cuerpo humano adulto tiene nada menos que 206 huesos! ;)'); 
    } else {
        alert ('Epa, te equivocaste');
    }
}
pregunta4 ();

function pregunta5 () {
    let respuesta1 = prompt('¿Cuál es el nombre del miedo irracional a los payasos?\n1. Claustrofobia\n2. Payasofobia\n3. Coulrofobia');
    if (respuesta1 === '3' || respuesta1.toLowerCase() === 'coulrofobia') {
        alert ('¡Excelente! La coulrofobia es la fobia o miedo irracional a los payasos y a los mimos'); 
    } else {
        alert ('No me digas que pusiste Payasofobia');
    }
}
pregunta5 ();

let despedida = prompt('Para irte ingresa salir, para empezar de nuevo ingresa again');
if (despedida.toLowerCase() === 'salir') {
    alert ('Chao pescao, espero que hayas aprendido <3');
} else if (despedida.toLowerCase() === 'again') {
    pregunta1 ()
}