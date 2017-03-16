+function() {
	// Elementos
	var suma = document.getElementById("convertir");
	// Manejador de Evento
	suma.addEventListener("click", function () {
		var numero1 = document.getElementById("numero1").value;
		var resultado = document.getElementById("resultado");
		resultado.textContent = convertir(numero1);
	});
}();
