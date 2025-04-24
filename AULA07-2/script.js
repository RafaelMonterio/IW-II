// Seleciona os elementos
const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
// Funções para ligar e desligar a lâmpada
function ligarLampada() {
 lampada.src = "img/lampon.png";
 lampada.alt = "Lâmpada Ligada";
}
function desligarLampada() {
 lampada.src = "img/Lampoff.PNG";
 lampada.alt = "Lâmpada Desligada";
}
// Adiciona os eventos aos botões
btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);