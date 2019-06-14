const nombreColonia = document.getElementById('nombreColonia');

const getNeigtborhood = () => {
   primerSeccion.classList.add("desaparecer");
   content.classList.remove("desaparecer")
   content.innerHTML = "Hola vecino de"+ " " + nombreColonia.value + "recibirás a continuación instrucciones para generar tu código de denuncia anónima"
