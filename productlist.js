const myCategory = new URLSearchParams(window.location.search).get("category");

const listContainer = document.querySelector(".product_list_container");

let overskrift = document.querySelector("h2");

overskrift.innerHTML = myCategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then(showList);

function showList(products) {
  console.log(products);

  const markup = products
    .map(
      (product) =>
        `<a href="product.html" class="product_card">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produkt 1" />
    <h3>${product.productdisplayname}</h3>
    <p class="price">${product.price},-</p>
    </a>`
    )
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
