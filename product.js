let productId = 1165;
let productContainer = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
     <div class="product_image">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Sporty Shirt" />
        </div>
        <div class="product_info">
          <h2>Product information</h2>
          <h4>Name</h4>
          <p>${data.productdisplayname}</p>
          <h4>Color</h4>
          <p>${data.basecolour}</p>
          <h4>Category</h4>
          <p>${data.category}</p>
          <h2>Price</h2>
          <p>${data.price}</p>
        </div>
        <div>
          <button class="add_to_basket">Add to basket</button>
        </div>`;
  });
