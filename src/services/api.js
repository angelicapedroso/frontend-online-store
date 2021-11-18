export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories'; // boa prática
  return fetch(url) // fazendo requisição
  .then((data) => data.json()); //retorna uma promise, queremos API completa
  
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`; // template literals pq recebe os parametros. Coloca  os param. dentro da API.
  return fetch(url)
  .then((data) => data.json ());
}
