import { useContext } from 'react';
import { ShoppingCartContext } from "./ShoppingCartContext";


export default function Product(props){
    const context = useContext(ShoppingCartContext);
    
    function handleClick(){
        context.addProductToCart(props.product);
    }
    return(
        <div>
            <h3>{props.product.name}</h3>
            <p>{props.product.description}</p>
            <p>Price: ${props.product.price}</p>
            { 
                !props.cart && 
                <button 
                style={{background: "green", color: "white", marginBottom: 60}}
                onClick={handleClick}
                >Add to cart</button>
            }
        </div>
    )
}
