 const toto = [ 
  {
      "id": 1,
      "name": "Karite  Avocat",
      "price": 3000,
      "image": "KAV.PNG"
  },
  {
      "id": 2,
      "name": "Karite Simple",
      "price": 3000,
      "image": "karitesimplemodifier.PNG"
  },
  {
      "id": 3,
      "name": "Karite Carotte",
      "price": 1000,
      "image": "carottebest.png"
  },
  {
      "id": 4,
      "name": "Karite cheveux",
      "price": 1500,
      "image": "karitepoussecheuveux reel.PNG"
  },
  {
      "id": 5,
      "name": "4 COTE",
      "price": 1000,
      "image": "4cotemodifier.png"
  },
  {
      "id": 6,
      "name": "NEP NEP",
      "price": 1000,
      "image": "NEPNEP2modifier.png"
  },
  {
      "id": 7,
      "name": "Feuille Djeka",
      "price": 1000,
      "image": "djekamodifier.png"
  },
  {
      "id": 8,
      "name": "Anis vert",
      "price": 4000,
      "image": "Anis vert.png"
  }
]
let iconCart = document.querySelector('.icon-cart');

let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');

let listProducts = [];
let carts = [];

iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => {
  body.classList.remove('showCart')
})

const addDataToHTML = () => {
  listProductHTML.innerHTML = '';
  if (listProducts.length > 0) {
    listProducts.forEach(product => {
      let newProduct = document.createElement('div');
      newProduct.classList.add('item');
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
        <div class="item">
          <img src="${product.image}" alt="karite Avocat">
          <h2>${product.name}</h2>
          <div class="price">${product.price}FCFA</div>
          <button class="addCart">
            Add To Cart
          </button>
        </div>
      `;
      listProductHTML.appendChild(newProduct);
    })
  }
}



listProductHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains('addCart')) {
    let parentElement = positionClick.closest('[data-id]');
    if (parentElement) {
      let product_id = parentElement.dataset.id;
      let product = toto.find(item => item.id === parseInt(product_id));
      if (product) {
        const idValue = product.id;
        window.alert("L'id de l'element " + idValue);
      }
    }
  }
});






 

/*const addToCart = (product_id) => {*/
  


const initApp = () => {
  
  listProducts = toto;
  console.log(listProducts)
  addDataToHTML();
}
initApp();