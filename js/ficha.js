                      
        /*Obtener datos almacenados*/
        var nombre = localStorage.getItem("Nombre");
        var apellido1 = localStorage.getItem("Primer apellido");
        var apellido2 = localStorage.getItem("Segundo apellido");
        var email = localStorage.getItem("Email");
        var pais = localStorage.getItem("Pais");
        var codigoPostal = localStorage.getItem("Codigo Postal");
        var ciudad = localStorage.getItem("Ciudad");
        var provincia = localStorage.getItem("Provincia");
        var direccion = localStorage.getItem("Direccion");
        var piso = localStorage.getItem("Piso");
        var escalera = localStorage.getItem("Escalera");
        var numero = localStorage.getItem("Numero");
        var fecha = localStorage.getItem("Fecha Nacimiento");
        var dni = localStorage.getItem("DNI/NIE");
        var prefijo = localStorage.getItem("Prefijo");
        var tlf_movil = localStorage.getItem("Telefono Movil");
        var tlf_fijo = localStorage.getItem("Telefono Fijo");
        var cuenta = localStorage.getItem("Cuenta Bancaria");
        var swift = localStorage.getItem("Swift");

        console.log(nombre);
        console.log(dni);
        console.log(prefijo);
        console.log(tlf_movil);
        console.log(fecha);
       


        /*Mostrar datos almacenados*/      
        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("apellido1").innerHTML = apellido1; 
        document.getElementById("apellido2").innerHTML = apellido2;
        document.getElementById("email").innerHTML = email;
        document.getElementById("pais").innerHTML = pais;
        document.getElementById("codigoPostal").innerHTML = codigoPostal;
        document.getElementById("ciudad").innerHTML = ciudad;
        document.getElementById("provincia").innerHTML = provincia;
        document.getElementById("direccion").innerHTML = direccion;
        document.getElementById("piso").innerHTML = piso;
        document.getElementById("escalera").innerHTML = escalera;
        document.getElementById("numero").innerHTML = numero;
        document.getElementById("fecha").innerHTML = fecha;
        document.getElementById("dni").innerHTML = dni;
        document.getElementById("prefijo").innerHTML = prefijo;
        document.getElementById("tlf_movil").innerHTML = tlf_movil;
        document.getElementById("tlf_fijo").innerHTML = tlf_fijo;
        document.getElementById("cuenta").innerHTML = cuenta;
        document.getElementById("swift").innerHTML = swift;
 