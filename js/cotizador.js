
// Agregar opciones al Select de la edad
const maxYear = new Date().getFullYear(),
    minYear = maxYear - 120;

const selectYears = document.getElementById('edad');
    for(i = maxYear; i > minYear; i--){
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        selectYears.appendChild(option)
    }

// Funcion cotizacion del diseno
function cotizarDiseno(){
let mueble = document.getElementById("mueble").value;
let medidas = document.getElementById("medidas").value;
let madera = document.getElementById("madera").value;
let color = document.getElementById("color").value;
let consulta = document.getElementById("consulta").value;
let file = document.getElementById("file").value;

let divResumen = document.getElementById("resumen");
let divResultado = document.getElementById("resultado");




let cotizacion = {mueble, madera, medidas};

divResumen.style.backgroundColor = "#FFF";
divResumen.style.display = "block";

divResumen.innerHTML = `<i class="far fa-check-circle"></i>
                    <h4 class="mb-4">En breve le enviaremos la cotización</h4>
                        <ul>
                            <li><strong>Tipo de mueble:</strong> ${mueble}</li>
                            <li><strong>Medidas del mueble:</strong> ${medidas}</li>
                            <li><strong>Tipo de madera solicitada:</strong> ${madera}</li>
                            <li><strong>Color adicional:</strong> ${color}</li>
                            <li><strong>Comentarios:</strong> ${consulta}</li>
                        </ul>
                                `;                     

    

let cotizacionFinal = cotizar(cotizacion);
divResultado.style.display = "block";
divResultado.innerHTML = `<p class="text-center"><strong>Precio Final:</strong> $${cotizacionFinal}</p>`;
                


}


// Para que la primer letra aparezca en mayús
function mayuscula  (palabra) {
    return palabra.charAt(0).toUpperCase()+palabra.slice(1);
}