const allProductsUrl = "https://fakestoreapi.com/products";
const singleProductUrl = "https://fakestoreapi.com/products/";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format((price / 1).toFixed(2));
  return formattedPrice;
};

const getStorageItem = () => {
  return JSON.parse(localStorage.products);
};

const setStorageItem = (products) => {
  localStorage.setItem('products', JSON.stringify(products));
};

const deleteLocalStorage = () => {};

const reduceString = (testo, charNumber) => {
  let newStringa = testo.substring(0,charNumber).concat("...");
  return newStringa;
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
  deleteLocalStorage,
  reduceString,
};
