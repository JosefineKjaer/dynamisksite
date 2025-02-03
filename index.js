const listContainer = document.querySelector("section");

console.log("hello?");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then(showCategories);

function showCategories(categories) {
  console.log(categories);

  const markup = categories
    .map(
      (category) =>
        `<article>
    <a href="productlist.html?category=${category.category}">${category.category}</a>
    </article>`
    )
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
