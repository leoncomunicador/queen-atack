//posição da rainha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//posição da outra peça
let posicaoPecaLinha = 7;
let posicaoPecaColuna = 7;

//identifica se o ataque pode ocorrer ou não
let ataqueBemSucedido = false;

if(posicaoRainhaLinha === posicaoPecaLinha ||posicaoRainhaColuna === posicaoPecaColuna) {
    ataqueBemSucedido = true;
} 

//diagonal superior direita

for(let supDir = 1; supDir< 8; supDir+= 1) {
    let linhaRainha = posicaoRainhaLinha + supDir;
    let colunaRainha = posicaoRainhaColuna + supDir;

    //se o tabuleiro acabou, sai do loop
    if(linhaRainha > 8 || colunaRainha > 8) {
        break;
    }

    if((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
        ataqueBemSucedido = true;
    }
}
    if((posicaoPecaLinha == linhaRainha) &&(posicaoPecaColuna == colunaRainha)) {
        ataqueBemSucedido = true;
    }

   

console.log(ataqueBemSucedido);
