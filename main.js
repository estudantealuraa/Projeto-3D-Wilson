const botoes = document.querySelectorAll(".botao");

for(let i = 0; i< botoes.length;i++){
    botoes[i].onclick = function(){
        botoes[i].classlist.add("ativo");
        for(letj = 0; j< botoes.length; j++){
            botoes[i].classlist.remove("ativo");
        }
        botoes[i].classList.add("ativo")
    }
}