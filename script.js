const form = document.getElementById('registroForm');
const tablaAlumnos = document.getElementById('tablaAlumnos');

// Función para cargar los registros desde localStorage
function cargarRegistros() {
    const registros = JSON.parse(localStorage.getItem('alumnos')) || [];
    registros.forEach((alumno) => {
        agregarFila(alumno.nombre, alumno.email, alumno.telefono);
    });
}

// Función para guardar un nuevo registro en localStorage
function guardarRegistro(nombre, email, telefono) {
    const registros = JSON.parse(localStorage.getItem('alumnos')) || [];
    registros.push({ nombre, email, telefono });
    localStorage.setItem('alumnos', JSON.stringify(registros));
}

// Función para agregar una fila a la tabla
function agregarFila(nombre, email, telefono) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${email}</td>
        <td>${telefono}</td>
    `;
    tablaAlumnos.appendChild(fila);
}

// Evento para manejar el formulario al enviarlo
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // Agregar fila a la tabla
    agregarFila(nombre, email, telefono);

    // Guardar registro en localStorage
    guardarRegistro(nombre, email, telefono);

    // Limpiar el formulario
    form.reset();
});

// Cargar registros al iniciar
cargarRegistros();