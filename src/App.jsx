import { useState, useEffect } from 'react'
import Product from './Product.jsx'
import ShoppingCart from './ShoppingCart.jsx';
import './App.css'
import { ShoppingCartContext } from './ShoppingCartContext.js';

function App() {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(()=> {
     fetch("/products.json")
      .then(response => response.json())
      .then(json => setProducts(json));
  },[]);
 
  function addProductToCart(product){
    console.log("Adding a product to the cart: ", product.name);
    setShoppingCart([product, ...shoppingCart])
  }
  
  const context = { shoppingCart, addProductToCart };

  return (
     <ShoppingCartContext.Provider value={context}>
        <div className="app">
          <h1>eCommerce App</h1>
          <h2>Shopping Cart</h2>
          <div className='shopping-cart'>
            <ShoppingCart shoppingCart={shoppingCart}/>
          </div>
           <br />
          <br />
          <h2>Products for Sale</h2>
          <div className='products'>
            {products.map((product) => (
              <Product 
              key={product.id} 
              product={product} />
            ))}
       </div>
    </div>
   </ShoppingCartContext.Provider>
  );
}

export default App
