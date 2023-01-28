import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem("store");

const setupStore = (products) => {
    //console.log(products);
    store = products.map((prod) =>{
        const {id,title,price,description,category,image,rating} = prod;
        return  {id,title,price,description,category,image,rating};

    })
    setStorageItem(store);
    console.log(getStorageItem());
};

const findProduct = () => {};

export { store, setupStore, findProduct };
