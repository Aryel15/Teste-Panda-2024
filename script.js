const modalAddCart = `
    <div id="background-modal">
        <div class="modal">
            <div class="modal-close">
                <i class="fa-solid fa-xmark button-close" onclick="closeModal()"></i>
            </div>
            <div class="modal-content">
                <p>Produto adicionado ao carrinho com sucesso!</p>
                <i class="fa-regular fa-circle-check"></i>
            </div>
        </div>
    </div>
`;

const modalTableSize = `
    <div id="background-modal">
        <div class="modal">
            <div class="modal-close">
                <i class="fa-solid fa-xmark button-close" onClick="closeModal()"></i>
            </div>
            <div class="modal-content">
                <p>Tabela de tamanhos</p>
                <img src="./imgs/tabela_medidas.jpg" alt="Tabela de medidas"/>
            </div>
        </div>
    </div>
`;

const modalRating = `
    <div id="background-modal">
        <div class="modal">
            <div class="modal-close">
                <i class="fa-solid fa-xmark button-close" onClick="closeModal()"></i>
            </div>
            <div class="modal-content">
                <p>Avaliação do produto</p>
                <img src="./imgs/rating.png" alt="Tabela de medidas" class="img-rating"/>
            </div>
        </div>
    </div>
`;

const shippingValue = `
    <div class="shipping-value">
        <p><b>Envio normal</b> 3 a 4 dias uteis</p>
        <b>R$ 10,00 <i class="fa-solid fa-xmark" onclick="closeShippingValue()"></i></b>
    </div>
`

const calculateShipping = document.querySelector(".calculate-shipping")

function closeModal(){
    var modal = document.querySelector('#background-modal')
    modal.parentNode.removeChild(modal)
}

function showModalAddCart(){
    document.body.insertAdjacentHTML('beforeend', modalAddCart);
    var modal = document.querySelector('#background-modal')

    setTimeout(() =>{
        if(modal){
            modal?.parentNode.removeChild(modal)
        }
    }, 3000)
}

function showModalTableSize(){
    document.body.insertAdjacentHTML('beforeend', modalTableSize);
}

function showModalRating(){
    document.body.insertAdjacentHTML('beforeend', modalRating);
}

function showShippingValue(){
    const shipping = document.querySelector('.shipping-value')

    if(!shipping){
        calculateShipping.insertAdjacentHTML('beforeend', shippingValue);
    }
}

function closeShippingValue(){
    const shipping = document.querySelector('.shipping-value')
    const inputShipping = document.querySelector('.inputShipping')

    inputShipping.value = ""
    shipping.parentNode.removeChild(shipping)
}

function scrollDown() {
    var imgs = document.querySelector('.imgs');
    var arrowDown = document.querySelector('.fa-angle-down');
    var arrowUp = document.querySelector('.fa-angle-up');

    imgs.scrollTop += 100;
    arrowDown.style.display = 'none'
    arrowUp.style.display = 'flex'
}

function scrollUp() {
    var imgs = document.querySelector('.imgs');
    var arrowDown = document.querySelector('.fa-angle-down');
    var arrowUp = document.querySelector('.fa-angle-up');

    imgs.scrollTop -= 100;
    arrowDown.style.display = 'flex'
    arrowUp.style.display = 'none'
}

function scrollToRight() {
    var products = document.querySelector('.products-cards');
    products.scrollLeft += 100;

}

function scrollToLeft() {
    var products = document.querySelector('.products-cards');
    products.scrollLeft -= 100;

}

function selectImage(img) {
    var imgMain = document.querySelector('.img-main');
    var imgs = document.querySelectorAll(".img");
    var oldSelectedImg = document.querySelector(".selected")
    var newSelectedImg = Array.from(imgs).find(image => image.src.includes(img))

    if(oldSelectedImg !== newSelectedImg){
        oldSelectedImg.classList.remove('selected')
        newSelectedImg.classList.add('selected')
    }

    imgMain.src = "./imgs/" + img

}
