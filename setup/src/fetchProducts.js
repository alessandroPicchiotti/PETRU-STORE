import { allProductsUrl } from "./utils.js";


const fetchProducts = async () => {    
                          
   try {
        const response  = await fetch(allProductsUrl)
        const risp =  await response.json();
        
        return risp;

   } catch (error) {
        console.log(error);
   }

};

export default fetchProducts;
