// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('nombreAmigo');
    const nombre = input.value.trim(); // Elimina espacios en blanco

    // Validar la entrada
    if (!nombre) {
        alert("Por favor, inserte un nombre."); // Mostrar mensaje de error si el campo está vacío
        return;
    }

    // Validar duplicados
    if (amigos.includes(nombre)) {
        alert("El nombre ya está en la lista."); // Evitar nombres duplicados
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = '';
    input.focus(); // Colocar el foco nuevamente en el campo de entrada

    // Actualizar la lista visible en la página
    actualizarLista();
}

function actualizarLista() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo
    amigos.forEach((amigo, index) => {
        // Crear elemento <li>
        const li = document.createElement('li');
        li.textContent = amigo;

        // Crear botón para eliminar amigo
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = "Eliminar";
        botonEliminar.style.marginLeft = "10px";
        botonEliminar.onclick = () => {
            amigos.splice(index, 1); // Eliminar el amigo del array
            actualizarLista(); // Actualizar la lista visible
        };

        // Añadir el botón al <li> y el <li> a la lista
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('Por favor, adiciona al menos un nombre antes de realizar el sorteo.');
        return; // Detener la ejecución si no hay amigos
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`; // Usar textContent para mayor seguridad
}
