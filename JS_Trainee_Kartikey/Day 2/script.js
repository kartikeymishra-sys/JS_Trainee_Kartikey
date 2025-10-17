const productList = document.getElementById('productList');
const calculateBtn = document.getElementById('calculateBtn');
const tbody = document.querySelector('#cartTable tbody');
const subtotalEl = document.getElementById('subtotal');
const quantityDiscountEl = document.getElementById('quantityDiscount');
const priceDiscountEl = document.getElementById('priceDiscount');
const finalTotalEl = document.getElementById('finalTotal');


let cart = [];


function displayProducts(products) {
  productList.innerHTML = "";
  products.forEach((product, index) => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h4>${product.name}</h4>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button data-index="${index}">Add to Cart</button>
    `;
    productList.appendChild(div);
  });


  document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', (e) => {
      const idx = e.target.dataset.index;
      const selectedProduct = products[idx];


      const existing = cart.find(item => item.name === selectedProduct.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ ...selectedProduct, quantity: 1 });
      }


    });
  });
}


function displayCart(cartItems) {
  tbody.innerHTML = ""; 
  cartItems.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>${item.quantity}</td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>
    `;
    tbody.appendChild(row);
  });

  let subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  let totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  let quantityDiscount = totalQuantity > 10 ? subtotal * 0.10 : 0;
  let afterQuantityDiscount = subtotal - quantityDiscount;

  let priceDiscount = afterQuantityDiscount > 500 ? afterQuantityDiscount * 0.05 : 0;
  let finalTotal = (afterQuantityDiscount - priceDiscount).toFixed(2);

  subtotalEl.textContent = subtotal.toFixed(2);
  quantityDiscountEl.textContent = quantityDiscount.toFixed(2);
  priceDiscountEl.textContent = priceDiscount.toFixed(2);
  finalTotalEl.textContent = finalTotal;
}


fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    const productData = products.slice(0, 10).map(p => ({
      name: p.title,
      price: p.price
    }));
    displayProducts(productData);
  })
  .catch(err => {
    console.warn("API failed, using fallback products:", err);
    const fallbackProducts = [
      { name: "Laptop", price: 800 },
      { name: "Mouse", price: 25 },
      { name: "Keyboard", price: 50 },
      { name: "Monitor", price: 150 },
      { name: "Headphones", price: 100 }
    ];
    displayProducts(fallbackProducts);
  });

  
calculateBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Cart is empty! Add items first.");
    return;
  }
  displayCart(cart);
});
