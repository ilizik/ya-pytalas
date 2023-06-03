export function sortedProducts(products, sortOption) {
  if (sortOption === "priceAscending") {
    return products.slice().sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceDescending") {
    return products.slice().sort((a, b) => b.price - a.price);
  } else if (sortOption === "alphaAscending") {
    return products.slice().sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "alphaDescending") {
    return products.slice().sort((a, b) => b.title.localeCompare(a.title));
  }

  return products;
}
