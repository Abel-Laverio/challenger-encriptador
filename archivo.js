var btoEncriptar=document.querySelector(".bto-enc");
var btoDesencriptar=document.querySelector(".bto-des");
var muñeco=document.querySelector(".contenedor-muñeco");
var resultado=document.querySelector(".texto-res");
var btoCopiar=document.querySelector(".bto-copiar");
var textoEntrada=document.querySelector(".texto-entrada");

btoEncriptar.onclick = encriptar;
btoDesencriptar.onclick=desencriptar;
btoCopiar.onclick= pasar;

function encriptar(){
    ocultarPta();
    var mensaje=recuperarTexto();
    resultado.textContent=encriptarTexto(mensaje);
}

function desencriptar(){
    ocultarPta();
    var mensaje=recuperarTexto();
    resultado.textContent=DencriptarTexto(mensaje);
}

    

function recuperarTexto(){
    var area=document.querySelector(".texto-entrada");
    return area.value;
}

function ocultarPta(){
    muñeco.classList.add("ocultar")
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";
    
    for(var i=0; i<texto.length; i++){
        if(texto[i]=="a"){
            textoFinal=textoFinal+"ai";
        }else if(texto[i]=="e"){
                textoFinal=textoFinal+"enter";
              }else if(texto[i]=="i"){
                      textoFinal=textoFinal+"imes";
                    }else if(texto[i]=="o"){
                            textoFinal=textoFinal+"ober";
                           }else if(texto[i]=="u"){
                                    textoFinal=textoFinal+"ufat";
                                 }else {
                                      textoFinal=textoFinal+texto[i];
                                 }

    }
    return textoFinal;
}

function DencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";
    
    for(var i=0; i<texto.length; i++){
        if(texto[i]=="a"){
            textoFinal=textoFinal+"a";
            i=i+1;
        }else if(texto[i]=="e"){
            textoFinal=textoFinal+"e";
            i=i+4;
        }else if(texto[i]=="i"){
            textoFinal=textoFinal+"i";
            i=i+3;
        }else if(texto[i]=="o"){
            textoFinal=textoFinal+"o";
            i=i+3;
        }else if(texto[i]=="u"){
            textoFinal=textoFinal+"u";
            i=i+3;
        }else {
            textoFinal=textoFinal+texto[i];
        }

    }
    return textoFinal;
}

function pasar(){
    var temp=resultado.textContent;
    navigator.clipboard.writeText(temp);
    textoEntrada.value="";
}

