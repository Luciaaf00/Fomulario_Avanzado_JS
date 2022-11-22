$("#dni").change(function(){
  documentoIdentificador=$("#dni").val();
var validacionCaracteres="TRWAGMYFPDXBNJZSQVHLCKE";
    var nifExpresion="/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/";
    var nieExpresion="/^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]/$";
    var cadena=documentoIdentificador.toString().toUpperCase();
    console.log(documentoIdentificador);
    
    var nie = cadena.replace("/^[X]", "0").replace("/^[Y]", "1").replace("/^[Z]", "2");
    var letra=cadena.substr(-1);
    var calculoChar=parseInt(nie.substr(0,8))%23;
    console.log(calculoChar);
    var control=validacionCaracteres.charAt(calculoChar);
    console.log(control);
});