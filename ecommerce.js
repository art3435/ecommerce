const containerImg = document.getElementById('containerImg');
const thumbnail1 = document.getElementById('thumbnail1');
const thumbnail2 = document.getElementById('thumbnail2');
const thumbnail3 = document.getElementById('thumbnail3');
const thumbnail4 = document.getElementById('thumbnail4');
const topColecoes = document.getElementById('topColecoes');
const paginaAvatar = document.getElementById('paginaAvatar');
const quantidadeSelecionada = document.getElementById('quantidadeSelecionada');
const botaoSubtrai = document.getElementById('botaoSubtrai');
const botaoAdiciona = document.getElementById('botaoAdiciona');
const adicionarAoCarrinho = document.getElementById('adicionarAoCarrinho');
const quantidadeCarrinhoAdicionada = document.getElementById('quantidadeCarrinhoAdicionada');
const spanQuantidadeFinal = document.getElementById('spanQuantidadeFinal');
const carrinhoLogo = document.getElementById('carrinhoLogo');
const botaoDelete = document.getElementById('botaoDelete');
const grandeDiv = document.getElementById('grandeDiv');
const imagemAmpliada = document.getElementById('imagemAmpliada');
const fecharDialog = document.getElementById('fecharDialog');
const thumbnailDialog1 = document.getElementById('thumbnailDialog1');
const thumbnailDialog2 = document.getElementById('thumbnailDialog2');
const thumbnailDialog3 = document.getElementById('thumbnailDialog3');
const thumbnailDialog4 = document.getElementById('thumbnailDialog4');
const setaVolta = document.getElementById('setaVolta');
const setaPassa = document.getElementById('setaPassa');
const topDiv = document.getElementById('topDiv');

paginaAvatar.addEventListener('mouseover', () => {
    paginaAvatar.style.border = '2px solid orange'
    paginaAvatar.style.borderRadius = '50%'
})

paginaAvatar.addEventListener('mouseout', () => {
    paginaAvatar.style.border = 'none'
})

function thumbnail1Function() {

    containerImg.classList.remove('imagemContainer2');
    containerImg.classList.add('imagemContainer1');

    imagemAmpliada.classList.add('imagemAmpliada1');

    containerImg.classList.remove('imagemContainer3');
    containerImg.classList.add('imagemContainer1');

    containerImg.classList.remove('imagemContainer4');
    containerImg.classList.add('imagemContainer1');

    thumbnail1.classList.remove('thumNailImagem');
    thumbnail1.classList.add('thumbNailImagemSelecionada');

    thumbnail2.classList.remove('thumbNailImagemSelecionada');
    thumbnail2.classList.add('thumbNailImagem');
    thumbnail3.classList.remove('thumbNailImagemSelecionada');
    thumbnail3.classList.add('thumbNailImagem');
    thumbnail4.classList.remove('thumbNailImagemSelecionada');
    thumbnail4.classList.add('thumbNailImagem');
}


function thumbnail2Function() {

    containerImg.classList.remove('imagemContainer1');
    containerImg.classList.add('imagemContainer2');

    imagemAmpliada.classList.add('imagemAmpliada2');

    containerImg.classList.remove('imagemContainer3');
    containerImg.classList.add('imagemContainer2');

    containerImg.classList.remove('imagemContainer4');
    containerImg.classList.add('imagemContainer2');

    thumbnail2.classList.remove('thumNailImagem');
    thumbnail2.classList.add('thumbNailImagemSelecionada');

    thumbnail1.classList.remove('thumbNailImagemSelecionada');
    thumbnail1.classList.add('thumbNailImagem');
    thumbnail3.classList.remove('thumbNailImagemSelecionada');
    thumbnail3.classList.add('thumbNailImagem');
    thumbnail4.classList.remove('thumbNailImagemSelecionada');
    thumbnail4.classList.add('thumbNailImagem');
}



function thumbnail3Function() {

    containerImg.classList.remove('imagemContainer1');
    containerImg.classList.add('imagemContainer3');



    imagemAmpliada.classList.add('imagemAmpliada3');

    containerImg.classList.remove('imagemContainer2');
    containerImg.classList.add('imagemContainer3');

    containerImg.classList.remove('imagemContainer4');
    containerImg.classList.add('imagemContainer3');

    thumbnail3.classList.remove('thumNailImagem');
    thumbnail3.classList.add('thumbNailImagemSelecionada');

    thumbnail1.classList.remove('thumbNailImagemSelecionada');
    thumbnail1.classList.add('thumbNailImagem');
    thumbnail2.classList.remove('thumbNailImagemSelecionada');
    thumbnail2.classList.add('thumbNailImagem');
    thumbnail4.classList.remove('thumbNailImagemSelecionada');
    thumbnail4.classList.add('thumbNailImagem');
}

function thumbnail4Function() {

    containerImg.classList.remove('imagemContainer1');
    containerImg.classList.add('imagemContaine4');

    imagemAmpliada.classList.add('imagemAmpliada4');

    containerImg.classList.remove('imagemContainer2');
    containerImg.classList.add('imagemContainer4');

    containerImg.classList.remove('imagemContainer4');
    containerImg.classList.add('imagemContainer4');

    thumbnail4.classList.remove('thumNailImagem');
    thumbnail4.classList.add('thumbNailImagemSelecionada');

    thumbnail1.classList.remove('thumbNailImagemSelecionada');
    thumbnail1.classList.add('thumbNailImagem');
    thumbnail2.classList.remove('thumbNailImagemSelecionada');
    thumbnail2.classList.add('thumbNailImagem');
    thumbnail3.classList.remove('thumbNailImagemSelecionada');
    thumbnail3.classList.add('thumbNailImagem');
}

var quantidadeSelecionadaNumero = 0

botaoAdiciona.addEventListener('click', () => {
    quantidadeSelecionadaNumero++
    quantidadeSelecionada.innerHTML = quantidadeSelecionadaNumero
})

botaoSubtrai.addEventListener('click', () => {
    if (quantidadeSelecionadaNumero > 0) {
        quantidadeSelecionadaNumero--
        quantidadeSelecionada.innerHTML = quantidadeSelecionadaNumero
    }
})

adicionarAoCarrinho.addEventListener('click', () => {
    const botaoFinalizar = document.querySelector('#botaoFinalizar');
    const carrinhoVazio = document.querySelector('#carrinhoVazio');
    const totalAPagar = document.querySelector('#totalAPagar');
    quantidadeCarrinhoAdicionada.innerHTML = quantidadeSelecionadaNumero
    quantidadeCarrinhoAdicionada.style.color = 'white'
    quantidadeCarrinhoAdicionada.style.fontSize = '11px'


    spanQuantidadeFinal.innerHTML = quantidadeSelecionadaNumero

    var preco = 220
    var calculo = preco * quantidadeSelecionadaNumero
    totalAPagar.innerHTML = " R$" + calculo

    const divInternaCarrinho = document.querySelector('#divInternaCarrinho');

    if (quantidadeSelecionadaNumero >= 1) {
        divInternaCarrinho.classList.remove('divInternaCarrinhoNone');
        divInternaCarrinho.classList.add('divInternaCarrinho');

        botaoFinalizar.classList.remove('divInternaCarrinhoNone');
        botaoFinalizar.classList.add('finalizarCompra');

        carrinhoVazio.style.display = 'none'
    }

    if (quantidadeSelecionadaNumero == 0) {
        quantidadeCarrinhoAdicionada.innerHTML = ''

        botaoFinalizar.classList.remove('finalizarCompra');
        botaoFinalizar.classList.add('divInternaCarrinhoNone');
    }

})

carrinhoLogo.addEventListener('click', () => {
    const carrinhoAberto = document.querySelector('#carrinhoAberto');
    carrinhoAberto.classList.toggle('carrinhoAberto')
})

botaoDelete.addEventListener('click', () => {
    divInternaCarrinho.classList.remove('divInternaCarrinho');
    divInternaCarrinho.classList.add('divInternaCarrinhoNone');

    botaoFinalizar.classList.remove('finalizarCompra');
    botaoFinalizar.classList.add('divInternaCarrinhoNone');

    carrinhoVazio.style.display = 'inline'

    quantidadeCarrinhoAdicionada.innerHTML = ''
})

function imagemMaiorFunction() {
    imagemAmpliada.showModal();
    grandeDiv.style.opacity = '0.6'
}

fecharDialog.addEventListener('click', () => {
    imagemAmpliada.close()
    grandeDiv.style.opacity = '1.0'
})

function thumbnailDialog1Function() {
    imagemAmpliada.style.backgroundImage = ("URL('image-product-1.jpg')");

    thumbnailDialog1.classList.remove('thumNailImagem');
    thumbnailDialog1.classList.add('thumbNailImagemSelecionada');

    thumbnailDialog2.classList.remove('thumbNailImagemSelecionada');
    thumbnailDialog2.classList.add('thumbNailImagem');
    thumbnailDialog3.classList.remove('thumbNailImagemSelecionada');
    thumbnailDialog3.classList.add('thumbNailImagem');
    thumbnailDialog4.classList.remove('thumbNailImagemSelecionada');
    thumbnailDialog4.classList.add('thumbNailImagem');

}

function thumbnailDialog2Function() {
    imagemAmpliada.style.backgroundImage = ("URL('image-product-2.jpg')");

    thumbnailDialog2.classList.remove('thumNailImagem');
    thumbnailDialog2.classList.add('thumbNailImagemSelecionada');

    thumbnailDialog1.classList.remove('thumbNailImagemSelecionada');
    thumbnailDialog1.classList.add('thumbNailImagem');
    thumbnailDialog3.classList.remove('thumbNailImagemSelecionada');
    thumbnailDialog3.classList.add('thumbNailImagem');
    thumbnailDialog4.classList.remove('thumbNailImagemSelecionada');
    thumbnailDialog4.classList.add('thumbNailImagem');

}

function thumbnailDialog3Function() {
    imagemAmpliada.style.backgroundImage = ("URL('image-product-3.jpg')")

    thumbnailDialog3.classList.remove('thumNailImagem');
    thumbnailDialog3.classList.add('thumbNailImagemSelecionada');

    thumbnailDialog1.classList.remove('thumbNailImagemSelecionada');
    thumbnailDialog1.classList.add('thumbNailImagem');
    thumbnailDialog2.classList.remove('thumbNailImagemSelecionada');
    thumbnailDialog2.classList.add('thumbNailImagem');
    thumbnailDialog4.classList.remove('thumbNailImagemSelecionada');
    thumbnailDialog4.classList.add('thumbNailImagem');

}

function thumbnailDialog4Function() {
    imagemAmpliada.style.backgroundImage = ("URL('image-product-4.jpg')")

    thumbnailDialog4.classList.remove('thumNailImagem');
    thumbnailDialog4.classList.add('thumbNailImagemSelecionada');

    thumbnailDialog1.classList.remove('thumbNailImagemSelecionada');
    thumbnailDialog1.classList.add('thumbNailImagem');
    thumbnailDialog3.classList.remove('thumbNailImagemSelecionada');
    thumbnailDialog3.classList.add('thumbNailImagem');
    thumbnailDialog2.classList.remove('thumbNailImagemSelecionada');
    thumbnailDialog2.classList.add('thumbNailImagem');
}
