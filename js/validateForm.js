// mueble = marca
// medidas = modelo
// madera = anio
// color = dominio
// modelo = importado

// file



function validar() {
    
  //Datos de la compra:
  let mueble = $("#mueble").val();
  let medidas = $("#medidas").val();
  let madera = $("#madera").val();
  let color = $("#color").val();
  let consulta = $("#consulta").val();
    
  //Datos personales y de contacto:
  let nombre = $("#nombre").val();
  let apellidos = $("#apellidos").val();
  let edad = $("#edad").val();
  let dni = $("#dni").val();
  let provincia = $("#provincia").val();
  let localidad = $("#localidad").val();
  let tel = $("#tel").val();
  let eMail = $("#eMail").val();

  
    expresion = /\w+@\w+\.+[a-z]/;

    // Carteles de error
    let divErrorEdad = document.getElementById("errorEdad");
    let divErrorEmail = document.getElementById("errorEmail");
    let divErrorTel = document.getElementById("errorTel");
    let divErrorLongTel = document.getElementById("errorLongTel");
    let divErrorNombre = document.getElementById("errorNombre");
    let divErrorApellido = document.getElementById("errorApellido");
    let divErrorConsulta = document.getElementById("errorConsulta");
    let divErrorDni = document.getElementById("errorDni");


  // IF 
    if(mueble === "" || medidas === "" || madera === "" || apellidos === "" ||
    edad === "" || dni === "" || provincia ==="" || localidad === "" || tel === ""
    || eMail === "" || consulta === "") {

        swal ( "Error!" ,  "Todos los campos son obligatorios" ,  "error" );
        return false;
    } else if(nombre.length > 30){ // ERROR NOMBRE
         //Se ocultan los resultados
        document.getElementById("resumen").style.display = "none";
        document.getElementById("resultado").style.display = "none";
        divErrorEdad.style.display = "none";
        divErrorEmail.style.display = "none";
        divErrorTel.style.display = "none";
        divErrorLongTel.style.display = "none";
        divErrorApellido.style.display = "none";
        divErrorConsulta.style.display = "none";
        divErrorDni.style.display = "none";

         //Se muestra el error
        divErrorNombre.style.display = "block";
        divErrorNombre.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                  <h4>Su nombre es muy largo.</h4>
                                  <p>Por favor, ingrese su nombre correctamente.</p>`;
        return false;
    }
    else if(apellidos.length > 80){ // ERROR APPELIDO
         //Se ocultan los resultados
        document.getElementById("resumen").style.display = "none";
        document.getElementById("resultado").style.display = "none";
        divErrorEdad.style.display = "none";
        divErrorEmail.style.display = "none";
        divErrorTel.style.display = "none";
        divErrorLongTel.style.display = "none";
        divErrorNombre.style.display = "none";
        divErrorConsulta.style.display = "none";
        divErrorDni.style.display = "none";

         //Se muestra el error
        divErrorApellido.style.display = "block";
        divErrorApellido.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                  <h4>Su apellido es muy largo.</h4>
                                  <p>Por favor, ingrese su apellido correctamente.</p>`;
        return false;
    }
    
    else if((tel.length > 15) || (tel.length < 8)){ //ERROR TELEFONO MUY CORTO O MUY LARGO
        //Se ocultan los resultados
        document.getElementById("resumen").style.display = "none";
        document.getElementById("resultado").style.display = "none";
        divErrorEdad.style.display = "none";
        divErrorEmail.style.display = "none";
        divErrorTel.style.display = "none";
        divErrorNombre.style.display = "none";
        divErrorApellido.style.display = "none";
        divErrorConsulta.style.display = "none";
        divErrorDni.style.display = "none";
        

        //Se muestra el error
        divErrorLongTel.style.display = "block";
        divErrorLongTel.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                  <h4>Longitud de teléfono incorrecta.</h4>
                                  <p>Por favor, asegurese de haber ingresado su código de área sin cero (0) y su número de celular sin 15.</p>`;
        return false;
    }
    else if(isNaN(tel)){ // ERROR TELEFONO VACIO

         //Se ocultan los resultados
        document.getElementById("resumen").style.display = "none";
        document.getElementById("resultado").style.display = "none";
        divErrorEdad.style.display = "none";
        divErrorEmail.style.display = "none";
        divErrorLongTel.style.display = "none";
        divErrorNombre.style.display = "none";
        divErrorApellido.style.display = "none";
        divErrorConsulta.style.display = "none";
        divErrorDni.style.display = "none";

         //Se muestra el error
        divErrorTel.style.display = "block";
        divErrorTel.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                  <h4>Ingrese un teléfono válido.</h4>
                                  <p>Por favor, asegurese de ingresar un número de teléfono.</p>`;
        
        return false;
    } 

    else if(!expresion.test(eMail)){ // ERROR DE MAIL

         //Se ocultan los resultados
      document.getElementById("resumen").style.display = "none";
      document.getElementById("resultado").style.display = "none";
        divErrorEdad.style.display = "none";
        divErrorLongTel.style.display = "none";
        divErrorNombre.style.display = "none";
        divErrorApellido.style.display = "none";
        divErrorTel.style.display = "none";
        divErrorConsulta.style.display = "none";
        divErrorDni.style.display = "none";

       //Se muestra el error
      divErrorEmail.style.display = "block";
      divErrorEmail.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                <h4>Ingrese un mail válido.</h4>
                                <p>Asegurese de haber ingresado correctamente su mail.</p>`;

        return false;
    } 

    else if(edad > 2003){ // ERROR DE EDAD
      
       //Se ocultan los resultados
      document.getElementById("resumen").style.display = "none";
      document.getElementById("resultado").style.display = "none";
      divErrorEmail.style.display = "none";
      divErrorLongTel.style.display = "none";
      divErrorNombre.style.display = "none";
      divErrorApellido.style.display = "none";
      divErrorTel.style.display = "none";
      divErrorConsulta.style.display = "none";
      divErrorDni.style.display = "none";

       //Se muestra el error
      divErrorEdad.style.display = "block";
      divErrorEdad.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                                <h4>Debe ser mayor de 18 años.</h4>
                                <p>Usted debe tener la mayoría de edad para la cotización del diseño.</p>`;

        return false;
    } 
    
    else if(consulta.length < 10){ // ERROR DE IDEA
      
      //Se ocultan los resultados
    document.getElementById("resumen").style.display = "none";
    document.getElementById("resultado").style.display = "none";
    divErrorEmail.style.display = "none";
    divErrorLongTel.style.display = "none";
    divErrorNombre.style.display = "none";
    divErrorApellido.style.display = "none";
    divErrorTel.style.display = "none";
    divErrorEdad.style.display = "none";
    divErrorDni.style.display = "none";

    //Se muestra el error
    divErrorConsulta.style.display = "block";
    divErrorConsulta.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                              <h4>Asegurese de comentarnos su idea.</h4>
                              <p>Para cotizar su diseño necesitamos tener más información acerca de su idea.</p>`;

      return false;
  }    
   else if((dni.length <= 8) || (dni.length > 10)){ // ERROR DE LONGUTUD DNI
      
    //Se ocultan los resultados
  document.getElementById("resumen").style.display = "none";
  document.getElementById("resultado").style.display = "none";
  divErrorEmail.style.display = "none";
  divErrorLongTel.style.display = "none";
  divErrorNombre.style.display = "none";
  divErrorApellido.style.display = "none";
  divErrorTel.style.display = "none";
  divErrorEdad.style.display = "none";
  divErrorConsulta.style.display = "none";

  //Se muestra el error
  divErrorDni.style.display = "block";
  divErrorDni.innerHTML = `<i class="fas fa-exclamation-triangle"></i>
                            <h4>Asegurese de ingresar su DNI correctamente.</h4>
                            <p>Por favor ingrese su dni en los siguientes formatos:
                            11222333 o 11.222.333.</p>`;

    return false;
}
  
else {
      divErrorEdad.style.display = "none";
      divErrorEmail.style.display = "none";
      divErrorTel.style.display = "none";
      divErrorLongTel.style.display = "none";
      divErrorNombre.style.display = "none";
      divErrorApellido.style.display = "none";
    }
    
    return cotizarDiseno();
    

}


 //Creacion Formulario

//  Steps del form
const DOMstrings = {
    stepsBtnClass: 'multisteps-form__progress-btn',
    stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
    stepsBar: document.querySelector('.multisteps-form__progress'),
    stepsForm: document.querySelector('.multisteps-form__form'),
    stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
    stepFormPanelClass: 'multisteps-form__panel',
    stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
    stepPrevBtnClass: 'js-btn-prev',
    stepNextBtnClass: 'js-btn-next'
};

  const removeClasses = (elemSet, className) => {
  
    elemSet.forEach(elem => {
  
      elem.classList.remove(className);
  
    });
  
  };
  
  const findParent = (elem, parentClass) => {
  
    let currentNode = elem;
  
    while (!currentNode.classList.contains(parentClass)) {
      currentNode = currentNode.parentNode;
    }
  
    return currentNode;
  
  };
  
  const getActiveStep = elem => {
    return Array.from(DOMstrings.stepsBtns).indexOf(elem);
  };
  
  const setActiveStep = activeStepNum => {
  
    removeClasses(DOMstrings.stepsBtns, 'js-active');
  
    DOMstrings.stepsBtns.forEach((elem, index) => {
  
      if (index <= activeStepNum) {
        elem.classList.add('js-active');
      }
  
    });
  };
  
  const getActivePanel = () => {
  
    let activePanel;
  
    DOMstrings.stepFormPanels.forEach(elem => {
  
      if (elem.classList.contains('js-active')) {
  
        activePanel = elem;
  
      }
  
    });
  
    return activePanel;
  
  };
  
  const setActivePanel = activePanelNum => {
  
    removeClasses(DOMstrings.stepFormPanels, 'js-active');
  
    DOMstrings.stepFormPanels.forEach((elem, index) => {
      if (index === activePanelNum) {
  
        elem.classList.add('js-active');
  
        setFormHeight(elem);
  
      }
    });
  
  };
  
  const formHeight = activePanel => {
  
    const activePanelHeight = activePanel.offsetHeight;
  
    DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
  
  };
  
  const setFormHeight = () => {
    const activePanel = getActivePanel();
  
    formHeight(activePanel);
  };
  
  DOMstrings.stepsBar.addEventListener('click', e => {
  
    const eventTarget = e.target;
  
    if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
      return;
    }
  
    const activeStep = getActiveStep(eventTarget);
  
    setActiveStep(activeStep);
  
    setActivePanel(activeStep);
  });
  
  DOMstrings.stepsForm.addEventListener('click', e => {
  
    const eventTarget = e.target;
  
    if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)))
    {
      return;
    }
  
    const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
  
    let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
  
    if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
      activePanelNum--;
  
    } else {
  
      activePanelNum++;
  
    }
  
    setActiveStep(activePanelNum);
    setActivePanel(activePanelNum);
  
  });
  
  window.addEventListener('load', setFormHeight, false);
  
  window.addEventListener('resize', setFormHeight, false);
  
  
  const setAnimationType = newType => {
    DOMstrings.stepFormPanels.forEach(elem => {
      elem.dataset.animation = newType;
    });
  };
  