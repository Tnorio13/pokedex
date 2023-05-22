const botaoAlterarTempo = document.getElementById("botao-alterar-tempo");

const body = document.querySelector("body");

const imagemBotao = document.querySelector(".imagem-botao");

botaoAlterarTempo.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro");

        imagemBotao.setAttribute("src", "./src/imagens/sun.png");

    }

    else {

        body.classList.add("modo-escuro");

        imagemBotao.setAttribute("src", "./src/imagens/moon.png");

    }

});