document.getElementById("buttonText").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value; // Obtiene el valor del input
    if (inputText) { // Verifica que el input no esté vacío
        localStorage.setItem("dato1", inputText); // Guarda el dato en localStorage
        document.getElementById("inputText").value = ""; // Limpia el input
        alert("Dato guardado!"); // Mensaje opcional de confirmación
    } else {
        alert("Por favor, ingresa un dato."); // Mensaje si el input está vacío
    }
});