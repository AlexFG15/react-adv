import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";




export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string] : ProductInCart}>({});
    console.log(shoppingCart);

    const onProductCardChange = ({count,product} : {count:number, product:Product}) =>{
        // console.log('onProductChange', count, product)

        setShoppingCart( oldShoppingCart => {
     
            if( count === 0 ){
                const { [product.id] : toDelete, ...rest} = oldShoppingCart;
                return rest
            }
            return{
                ...oldShoppingCart,
                [ product.id ] : {...product, count}
            }
        })
    }
    return{
        shoppingCart,
        onProductCardChange
    }

}