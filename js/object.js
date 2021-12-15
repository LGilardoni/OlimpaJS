let baseDatos = [];//Array que suma los productos
let prodInfo = JSON.parse(localStorage.getItem("prodInfo"));

// const productos = JSON.parse(localStorage.getItem('prods'));
// console.log(productos);
    
//funcion para capturar lo ingresado por el usuario
function capturar(){

    function Diseno (mueble, medidas, madera, color){
          
        this.mueble = mueble;
        this.medidas = medidas;
        this.madera = madera;
        this.color = color;
        }
  let  muebleNew = $("#mueble").val();
  let  medidasNew = $("#medidas").val();
  let  maderaNew = $("#madera").val();
  let  colorNew = $("color").val();

  nuevoDiseno = new Diseno (muebleNew, medidasNew, maderaNew, colorNew); //variable global dentro de la funcion
  console.log(nuevoDiseno);
  

  //se guarda en el local storage
  let disenoInfo = {
    mueble : muebleNew,
    medidas : medidasNew,
    madera : maderaNew,
    color : colorNew
};

localStorage.setItem("disenoInfo", JSON.stringify(disenoInfo));
agregar();
}

function agregar(){
    baseDatos.push(disenoInfo);

    }
