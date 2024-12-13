// Funcionalidad para el botón "Editar"
document.querySelectorAll('.edtbtn').forEach(button => {
    button.addEventListener('click', event => {
        const id = event.target.dataset.id; // Obtén el ID del usuario
        alert(`Editar usuario con ID: ${id}`);
        // Aquí podrías redirigir al usuario a un formulario de edición
        // window.location.href = `/editar-usuario?id=${id}`;
    });
});

// Funcionalidad para el botón "Eliminar"
document.querySelectorAll('.delbtn').forEach(button => {
    button.addEventListener('click', event => {
        const id = event.target.dataset.id; // Obtén el ID del usuario
        if (confirm(`¿Estás seguro de eliminar al usuario con ID: ${id}?`)) {
            // Eliminar la fila correspondiente
            const row = event.target.closest('tr');
            row.remove();
            alert(`Usuario con ID ${id} eliminado.`);
        }
    });
});