document.addEventListener("DOMContentLoaded", function() {
    const storedData = localStorage.getItem("dato1"); // Recupera el dato de localStorage
    const dataSpan = document.getElementById("data");

    if (storedData) {
        dataSpan.textContent = storedData; // Muestra el dato en la página
    } else {
        dataSpan.textContent = "No hay datos guardados."; // Mensaje si no hay dato
    }
});