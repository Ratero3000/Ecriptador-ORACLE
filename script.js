var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");
var Img = document.querySelector(".noResultado");
var resultado = document.querySelector("#resultado");
const btnCopiar = document.querySelector("#copiar");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick=desencriptar;

function encriptar(){
    ocultarImg();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);
}

function desencriptar(){
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area)
}

function recuperarTexto(){
    var txtArea = document.querySelector("#texto");
    return txtArea.value;
}

function ocultarImg(){
    Img.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto= mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
          if (texto[i] == "a" ) {
            textoFinal = textoFinal + "ai";
          }   
          else if (texto[i] == "e" ) {
            textoFinal = textoFinal + "enter";
          }  
          else if (texto[i] == "i" ) {
            textoFinal = textoFinal + "imes";
          }  
          else  if (texto[i] == "o" ) {
            textoFinal = textoFinal + "ober";
          }  
          else if (texto[i] == "u" ) {
            textoFinal = textoFinal + "ufat";
          }  
          else{
            textoFinal = textoFinal + texto[i];
          }        
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto= mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
          if (texto[i] == "a" ) {
            textoFinal = textoFinal + "a";
            i=i+1;
          }   
          else if (texto[i] == "e" ) {
            textoFinal = textoFinal + "e";
            i=i+4;
          }  
          else if (texto[i] == "i" ) {
            textoFinal = textoFinal + "i";
            i=i+3;
          }  
          else  if (texto[i] == "o" ) {
            textoFinal = textoFinal + "o";
            i=i+3;
          }  
          else if (texto[i] == "u" ) {
            textoFinal = textoFinal + "u";
            i=i+3;
          }  
          else{
            textoFinal = textoFinal + texto[i];
          }        
    }
    return textoFinal;
} 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector("#resultado").textContent;
    navigator.clipboard.writeText(contenido);
})