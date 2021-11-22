const a = (el) => document.querySelector(el);
const b = (el) => document.querySelectorAll(el);

productJson.map( (item, index) => {
    let listProduct = a('.box-products').cloneNode(true);
    a('.item-area').append(listProduct)


    listProduct.querySelector('.product-img').src = item.img;
    listProduct.querySelector('.product-name').innerHTML = item.name;
    listProduct.querySelector('.description-products').innerHTML = item.description;


    let listItem = a('.list-item-products').cloneNode(true);
    a('.list-area').append(listItem);

    listItem.querySelector('.products-name').innerHTML = item.name

});

releaseJson.slice(0, 3).map( (item, index) => {
    let listRelease = a('.future-release').cloneNode(true)
    a('.area-release').append(listRelease);

    listRelease.querySelector('.img-release').src = item.img;
    listRelease.querySelector('.title-release').innerHTML = item.name
    listRelease.querySelector('.description-release').innerHTML = item.description
    
});