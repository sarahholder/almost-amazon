import util from '../helpers/util.js';
import bookData from '../helpers/data/bookData.js';


const addToCartEvent = () => {
    const book = bookData.getBook();
    cart.addToCart();

    // let domString = '';
    // domString += 'THIS IS THE CART';
    // util.printToDom ('cart-container', domString);
};

const makeStore = () => {
    const book = bookData.getBook(); 
    let domString = '';
    domString += `<h2>${book.name}</h2>`;
    domString += '<button id="add-to-cart-button" class="btn btn-dark">Add to Cart</button>';

    util.printToDom('store-container', domString);
    document.getElementById('add-to-cart-button').addEventListener('click', addToCartEvent);

};

//only export one thing -- could be an object with many things; objects have key value pairs

//if the key and the value are the same you don't need the key and the value

export default { makeStore };
