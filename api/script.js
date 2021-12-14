const a = (el) => document.querySelector(el);
const b = (el) => document.querySelectorAll(el);

let modalQt = 5 
let modalKey = 0

productJson.map( (item, index) => {
    let listProduct = a('.box-products').cloneNode(true);
    a('.item-area').append(listProduct)


    listProduct.setAttribute('data-key', index);
    listProduct.querySelector('.product-img').src = item.img;
    listProduct.querySelector('.product-name').innerHTML = item.name;
    listProduct.querySelector('.description-products').innerHTML = item.description;

    let listItem = a('.list-item-products').cloneNode(true);
    a('.list-area').append(listItem);
    listItem.querySelector('.products-name').innerHTML = item.name


    listProduct.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        let key = e.target.closest('.box-products').getAttribute('data-key');
        modalKey = key;

        a('.img-modal').src = productJson[key].img
        a('.title-modal').innerHTML = productJson[key].name
        a('.modal-price h4').innerHTML = productJson[key].price
        a('.description-modal').innerHTML = productJson[key].description
        // a('.content-sizes.selected').classList.remove('selected')
        b('.content-sizes').forEach( (size, sizeIndex) => {
            
            size.innerHTML = productJson[key].number[sizeIndex]
        });

        a('.input').innerHTML = modalQt;


        a('.modal-hidden').style.opacity = 0;
        a('.modal-hidden').style.display = 'flex';
        setTimeout( () => {
            a('.modal-hidden').style.opacity = 1;
        }, 100);

    });

    
});

releaseJson.map( (item, index) => {
    let listRelease = a('.future-release').cloneNode(true);
    a('.area-release').append(listRelease);

    listRelease.setAttribute('data-key', index);
    listRelease.querySelector('.img-release').src = item.img;
    listRelease.querySelector('.title-release').innerHTML = item.name
    listRelease.querySelector('.description-release').innerHTML = item.description
    
    a('.img-release').style.display = "block"
});

factoryJson.map( (item) => {
    let boxTrack = a('.box-track').cloneNode(true);
    a('.track-area').append(boxTrack);

    boxTrack.querySelector('.img-track').src = item.img
    boxTrack.style.display = "block"
})


function closeModal(e) {
    e.preventDefault()

    a('.modal-hidden').style.opacity = 0;
    setTimeout( () => {
        a('.modal-hidden').style.display = 'none';
    }, 300)
}

let cancelModal =  a('.cancel');
cancelModal.addEventListener('click', closeModal)

a('.add-cart').addEventListener('click', (e) => {
    e.preventDefault()
    
    
});

let btnAdd = a('.add');
btnAdd.addEventListener('click', add);
function add () {
    let input = a('.input');
    input.value++;

    if(input.value == 5) {
        alert('Quantidades acima desse valor, a data de entrega poderá levar até 15 dias uteis')
    }else if (input.value == 10) {
        alert('Não trabalhamos com quantidades acima desse valor')
    }
}

let btnRemove = a('.remove');
btnRemove.addEventListener('click', remove)
function remove () {
    let input = a('.input');
    
    if(input.value > 0) {
        input.value--;
    }
}