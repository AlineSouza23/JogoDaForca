let tentativas = 7; /*6 tentativas para acertar */
let palavraSecretaCategoria; /* variável palavraSecretaCategoria */
let palavraSecretaSorteada; /* variável palavraSecretaCategoria */
let listaDinamica = [] /* variável listaDinamica */
const palavras = [ /* criando lista de objetos */
    palavra001={ /* primeiro objeto contendo duas propriedade*/
        nome : "PIZZA", /* propriedade nome */
        categoria : "DICA : COMIDA" /* propriedade categoria */
    },
    palavra002={ /* primeiro objeto contendo duas propriedade*/
    nome : "CHAVE", /* propriedade nome */
    categoria : "DICA: OBJETO" /* propriedade categoria */
    },
    palavra003={ /* primeiro objeto contendo duas propriedade*/
    nome : "BRIGADEIRO", /* propriedade nome */
    categoria : "DICA: SOBREMESA" /* propriedade categoria */
    },
  

];

criarPalavraSecreta();
function criarPalavraSecreta(){ /* função para criar a palavra que a pessoa tem que descobrir */
    const indexPalavra = parseInt(Math.random() * palavras.length) /* função que gera um número aleatório */
    palavraSecretaSorteada = palavras[indexPalavra].nome, /* mostrar nome sorteado */
    palavraSecretaCategoria = palavras[indexPalavra].categoria,  /* mostrar categoria sorteado */

        console.log(palavraSecretaCategoria)
    console.log(palavraSecretaSorteada)


}
montarPalavraNaTela(); /* chamando função que foi criada abaixo */
function montarPalavraNaTela(){ /* Função para montar uma palvra na tela */
    const categoria = document.getElementById("categoria"); /* criando variável categoria puxando do HTML "categoria" */
    categoria.innerHTML = palavraSecretaCategoria; /* obter a categoria preenchida */

    const palavraTela = document.getElementById("palavra-secreta"); /* criando variável palavraTela puxando do HTML "palavra-secreta" */
    palavraTela.innerHTML = "";/* recebe palavra secreta sorteada, vindo "" vazio pois a palavra secreta é secreta */

    for(i = 0; i < palavraSecretaSorteada.length; i++){
    /* enquanto o i for menor do que o tamanho da palavra sorteada ele vai encrementando de 1 em 1*/
    if(listaDinamica[i] == undefined){ /* se o index não tiver nada essa mesma lista receba um espaço  */
    listaDinamica[i] = "&nbsp;" /* &nbsp = HTML entende como se fosse um espaço  */
    palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] + "</div>"
}
else{
    palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] + "</div>"

}
}



}
function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra) 
        comparalistas(letra) /*verificar se a letra existe na palavra sorteada */
        montarPalavraNaTela();
    }
    
}

function mudarStyleLetra(tecla){/*Função para que a tecla mude de cor assim que for clicada */
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
    
}
function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)/*verificar se tal letra existe na palavra e se axistir ele vai dar a posição (pos) */
    if(pos < 0){ /*se não existir diminuir a quantidade dde tentativa*/
    tentativas--
    carregaImagemForca();

/*se as tentativas for igual a 0 abre a modal */
    if(tentativas == 0){
        abreModal("OPS!", "Não foi dessa vez... A palavra certa era <br>" + palavraSecretaSorteada);

    }

    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++)/*index do array vai começar valendo 0, se index for menor que a palavra sorteada incremente o index de 1 em 1 (++) */
    {
    if(palavraSecretaSorteada[i] == letra) {/*se a palavra sorteada na posição index for igual a letra recebe a letra */
    listaDinamica[i] = letra;
        }
    }
}
/*variável vitória como tru pq ela já vai começar verdadeira */
let vitoria = true
 for(i = 0; i < palavraSecretaSorteada.length; i++){
    if(palavraSecretaSorteada[i] != listaDinamica[i]){ /*verificando se as letras são iguais */
    vitoria = false;
}
}
if(vitoria == true){
    abreModal("BOAA!!!!", "VOCÊ VENCEU A PARA ERA ESSA ESSA MESMA --> <br>" + palavraSecretaSorteada);

    tentativas = 0; /*zerar as tentativas pois a pessoa ganhou */
}

}

function carregaImagemForca(){
    switch(tentativas){

    

        case 5: /*caso seja 5 pega a foto e assim por diante */
        document.getElementById("imagem").style.background = "url('./img/forquinhaTerno.png')";
        break;

        case 4: /*caso seja 5 pega a foto e assim por diante */
        document.getElementById("imagem").style.background = "url('./img/forquinhaShort.png')";
        break;

        case 3: /*caso seja 5 pega a foto e assim por diante */
        document.getElementById("imagem").style.background = "url('./img/forquinhaBracoUm.png')";
        break;

        case 2: /*caso seja 5 pega a foto e assim por diante */
        document.getElementById("imagem").style.background = "url('./img/forquinhaBracoDois.png')";
        break;

        case 1: /*caso seja 5 pega a foto e assim por diante */
        document.getElementById("imagem").style.background = "url('./img/forquinhaSaltoUm.png')";
        break;

        case 0: /*caso seja 5 pega a foto e assim por diante */
        document.getElementById("imagem").style.background = "url('./img/forquinhaSaltoDois.png')";
        break;

        default:
            document.getElementById("imagem").style.background = "url('./img/forquinhaCabeca.png')";
            break;
    }
}
/*abrir modal */
function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo; /*mudar o titulo que eu passar */

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem; /*mudar a mensagem que eu passar */

    $("#myModal").modal({
        show: true
    })
}

/*variável para reiniciar o jogo */
let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});