export function filteredProducts(
  products,
  searchValue,
  selectedCategory,
  showFavorites,
  favoriteProducts
) {
  return products.filter((product) => {
    const title = product.title.toLowerCase();
    const search = searchValue.toLowerCase();
    const category = selectedCategory;
    const isFavorite = favoriteProducts.some(
      (fav) => fav.product.id === product.id
    );

    return (
      title.includes(search) &&
      (category === "" || product.category === category) &&
      (!showFavorites || isFavorite)
    );
  });
}
