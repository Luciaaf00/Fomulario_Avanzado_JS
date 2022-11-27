var patron = "^[a-zA-ZáéíóúÁÉÍÓÚ-]{3,30}$";
var emailPatron = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";
var errorNombre=document.getElementById("nombre_error");
var errorApellido1=document.getElementById("primer_apellido_error");
var errorApellido2=document.getElementById("segundo_apellido_error");
var errorEmail=document.getElementById("email_error1");
var errorEmail2=document.getElementById("email_error2");


function standar(idIntroducido, patron) {
	return $(idIntroducido).val().trim().match(patron) ? true : false;
}
function confirmaEmail(idEmail, idEmail_confirmacion){
    let idEmail1 =$(idEmail).val().trim();
    let idEmail2 =$(idEmail_confirmacion).val().trim();
    if(idEmail1==idEmail2){
        return true;
    }else{
        return false;
    }
}
/*Validaciones*/
$("#nombre").change(function(){
if(!standar("#nombre", patron)){
    errorNombre.innerHTML = "Tiene que introducir un nombre de mínimo tres letras y máximo 30 letras" 
} 
});
$("#primer_apellido").change(function(){
if(!standar("#primer_apellido", patron)){
    errorApellido1.innerHTML = "Tiene que introducir un apellido de mínimo tres letras y máximo 30 letras" 
} 
});
$("#segundo_apellido").change(function(){
if(!standar("#segundo_apellido", patron)){
    errorApellido2.innerHTML = "Tiene que introducir un apellido de mínimo tres letras y máximo 30 letras" 
}
});
$("#email").change(function(){ 
if(!standar("#email", emailPatron)){
    errorEmail.innerHTML = "Tiene que introducir un email correcto ejemplo: usuario@gmail.com" 
} 
});
$("#email_confirmacion").change(function(){
if(!confirmaEmail("#email","#email_confirmacion")){
    errorEmail2.innerHTML = "Tiene que introducir los dos emails iguales" 

}
});

function activarBoton (idFormulario) {
	$(idFormulario + " button.submit").removeAttr("disabled");
}
function desactivarBoton (idFormulario) {
	$(idFormulario + " button.submit").attr("disabled", "disabled");
}

function formulario(idFormulario){
    $(idFormulario + " *").on("change keydown", function() {

        if(standar("#nombre", patron) && 
        standar("#primer_apellido", patron) && 
        standar("#segundo_apellido", patron) && 
        standar("#email", emailPatron) &&
        confirmaEmail("#email","#email_confirmacion")
        ){
            activarBoton (idFormulario);
            
             
        }else{
            desactivarBoton(idFormulario);
        }//Fin Si
    });//Fin función

}
$("#enviar1").click(function (){
                /*Captura de datos escrito en los inputs*/        
                var nombre_ = document.getElementById("nombre").value;
                var apellido1 = document.getElementById("primer_apellido").value;
                var apellido2 = document.getElementById("segundo_apellido").value;
                var email_ = document.getElementById("email").value;
                
             
                /*Guardando los datos en el LocalStorage*/
                localStorage.setItem("Nombre", nombre_);
                localStorage.setItem("Primer apellido", apellido1);
                localStorage.setItem("Segundo apellido", apellido2);
                localStorage.setItem("Email", email_);
                /*Limpiando los campos o inputs*/
                document.getElementById("nombre").value = "";
                document.getElementById("primer_apellido").value = "";
                document.getElementById("segundo_apellido").value = "";
                document.getElementById("email").value = "";
                
             
             });
$(function() {
	formulario("#contacto1");
});
