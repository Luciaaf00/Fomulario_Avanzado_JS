var patronCuentaBancaria= "^[A-Z]{2}[0-9]{22}$";
var errorCuenta=document.getElementById("cuenta_error");

//Función que valida la cuenta bancaria
function validacionCuentaBancaria(idCuenta, patronCuentaBancaria){
    return $(idCuenta).val().trim().match(patronCuentaBancaria) ? true : false;
}


$("#cuenta_bancaria").change(function(){
if(validacionCuentaBancaria("#cuenta_bancaria", patronCuentaBancaria)){
    var resultado=document.getElementById("cuenta_bancaria").value;
    var codigo_swift=resultado.substring(4,8);
    var swift_1=obtenerSwift(codigo_swift);
    var swift_2 =document.getElementById("swift");
    swift_2.value=swift_1;
}else{
    errorCuenta.innerHTML = "Tiene que introducir una cuenta en la que sea dos letras y seguidamente 22 cifras ejemplo: ES1800613053112734881110";
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
        if(validacionCuentaBancaria("#cuenta_bancaria", patronCuentaBancaria)
        ){
            console.log("hola");
            activarBoton(idFormulario);
        }else{
            desactivarBoton(idFormulario);
        }//Fin Si
    });//Fin función

}
  
$("#enviar4").click(function (){
    /*Captura de datos escrito en los inputs*/        
    var iban = document.getElementById("cuenta_bancaria").value;
    var swift_ = document.getElementById("swift").value;

    /*Guardando los datos en el LocalStorage*/
    localStorage.setItem("Cuenta Bancaria", iban);
    localStorage.setItem("Swift", swift_);

    /*Limpiando los campos o inputs*/
    document.getElementById("cuenta_bancaria").value = "";
    document.getElementById("swift").value = "";

 });
$(function() {
	formulario("#contacto1");
});