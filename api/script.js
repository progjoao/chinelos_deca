const a = (el) => document.querySelector(el);
const b = (el) => document.querySelectorAll(el);

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