let colorGlobal;
// Añado un event listener al documento que escuchará el evento keydown, este evento se ejecutará al presionar la tecla.
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        colorGlobal = 'pink';
        document.getElementById('key').style.backgroundColor = colorGlobal;
    } else if (event.key === 's') {
        colorGlobal = 'orange';
        document.getElementById('key').style.backgroundColor = colorGlobal;
    } else if (event.key === 'd') {
        colorGlobal = 'skyblue';
        document.getElementById('key').style.backgroundColor = colorGlobal;
    } else if (event.key === 'q') {
        crearDiv('purple');
    } else if (event.key === 'w') {
        crearDiv('gray');
    } else if (event.key === 'e') {
        crearDiv('brown');
    }
});

function crearDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    newDiv.style.margin = '10px';
    document.body.appendChild(newDiv);
}

/* Cambio el color del div con el id key a rosado, naranjo y celeste según se presionen las teclas "A, S, D".
    Luego se crean unos nuevos div de 200px por 200px con colores específicos, morado, gris y marrón al presionar las teclas "Q, W, E" */