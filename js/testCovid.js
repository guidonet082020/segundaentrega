function validar(){

    regExEmail = 	/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
    regExTelefono = /^[0-9]{4}[\-]{1}[0-9]{4}$/

    
    var error = false;
    var mensajeError="";
    var formularioEnviado="";

    var tildado = "no";
    var tildado2 = "no";
    var tildado3 = "no";
    var tildado4 = "no";
    var tildado5 = "no";
    var tildado6 = "no";
    var tienefiebre=document.getElementsByName("fiebre");
    var dolorDeCabeza=document.getElementsByName("cabeza");
    var tieneTos=document.getElementsByName("tos");
    var dolorDeGarganta=document.getElementsByName("garganta");
    var pais=document.getElementsByName("combo");
    var direccion=document.getElementsByName("combo2");
    var contador =0;
   

  

    if(document.getElementById("nombre").value=="") {
        error=true;
        mensajeError+="<p>El campo NOMBRE debe completarse</p>";
    }  
    if(document.getElementById("apellido").value=="") {
        error=true;
        mensajeError+="<p>El campo APELLIDO debe completarse</p>";
    } 
    if(document.getElementById("dni").value=="") {
        error=true;
        mensajeError+="<p>El campo DNI debe completarse</p>";
    } 

    if(!regExTelefono.test(document.getElementById("telefono").value)) {
        error=true;
        mensajeError+="<p>Complete correctamente el número de TELEFONO</p>";  
    }

    if( document.getElementById("provincia").value==""){
        error=true;
        mensajeError+="<p>Seleccione una PROVINCIA</p>";
     

    }
 


 for(i in tienefiebre){
    
    if(tienefiebre[i].value=="si" && tienefiebre[i].checked){
        tildado="si"
        document.getElementById("radioButoonC").style.color="black";
        contador++;
 
    }
    if(tienefiebre[i].value=="no" && tienefiebre[i].checked){
        tildado="si"
        document.getElementById("radioButoonC").style.color="black";
        }
        if(tildado=="no"){
            error=true;
            document.getElementById("radioButoonC").style.color="red";
        }
       
    }

    for(i in dolorDeCabeza){
    
        if(dolorDeCabeza[i].value=="si" && dolorDeCabeza[i].checked){
            tildado2="si"
            document.getElementById("radioButoonD").style.color="black";
            contador++;
        }
        if(dolorDeCabeza[i].value=="no" && dolorDeCabeza[i].checked){
            tildado2="si"
            
            document.getElementById("radioButoonD").style.color="black";
            
            }
            if(tildado2=="no"){
                error=true;
                document.getElementById("radioButoonD").style.color="red";
            }
    
        }

        for(i in tieneTos){
    
            if(tieneTos[i].value=="si" && tieneTos[i].checked){
                tildado3="si"
               
                document.getElementById("radioButoonE").style.color="black";
                contador++;
            }
            if(tieneTos[i].value=="no" && tieneTos[i].checked){
                tildado3="si"
               
                document.getElementById("radioButoonE").style.color="black";
                
                }
                if(tildado3=="no"){
                    error=true;
                    document.getElementById("radioButoonE").style.color="red";
                }
        
            }

            for(i in dolorDeGarganta){
    
                if(dolorDeGarganta[i].value=="si" && dolorDeGarganta[i].checked){
                    tildado4="si"
                   
                    document.getElementById("radioButoonF").style.color="black";
                    contador++;
                }
                if(dolorDeGarganta[i].value=="no" && dolorDeGarganta[i].checked){
                    tildado4="si"
                 
                    document.getElementById("radioButoonF").style.color="black";
                    
                    }
                    if(tildado4=="no"){
                        error=true;
                        document.getElementById("radioButoonF").style.color="red";
                    }
            
                }

                for(i in pais){
    
                    if(pais[i].value=="si" && pais[i].checked){
                        tildado5="si"
                     
                        document.getElementById("radioButoonA").style.color="black";
                    }
                    if(pais[i].value=="no" && pais[i].checked){
                        tildado5="si"
                     
                        document.getElementById("radioButoonA").style.color="black";
                        
                        }
                        if(tildado5=="no"){
                            error=true;
                            document.getElementById("radioButoonA").style.color="red";
                        }
                
                    }

                    for(i in direccion){
    
                        if(direccion[i].value=="si" && direccion[i].checked){
                            tildado6="si"
                          
                            document.getElementById("radioButoonG").style.color="black";
                            contador++;
                        }
                        if(direccion[i].value=="no" && direccion[i].checked){
                            tildado6="si"
                           
                            document.getElementById("radioButoonG").style.color="black";
                            
                            }
                            if(tildado6=="no"){
                                error=true;
                                document.getElementById("radioButoonG").style.color="red";
                            }
                    
                        }
     
        


                        if(error){
                            document.getElementById("mensaje").innerHTML=mensajeError;
                            return false;
                        }
                        else{
                            document.getElementById("mensaje").style.display="none";
                            formularioEnviado="Formulario enviado correctamente";
                            document.getElementById("mensajeEnviado").innerHTML=formularioEnviado;
                            return false;
                          
                            }
                           
       


}






