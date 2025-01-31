const listContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then(showList);

function showList(products) {
  console.log(products);

  let markup = "";

  products
    .map((product) => {
      markup += `<a href="product.html" class="product_card">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produkt 1" />
    <h3>${product.productdisplayname}</h3>
    <p class="price">${product.price}</p>
  </a>`;
    })
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
