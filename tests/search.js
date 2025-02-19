function searchForProduct(productName) {
  if (productName.trim().length === 0)
    console.log("Product name is not provided");
  console.log(`${productName} is searched`);
}

searchForProduct("Book");
searchForProduct("");
searchForProduct("   ");
searchForProduct(123);
