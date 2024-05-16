import  { ProductCard,ProductButtons, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { product } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";



const ShoppingPage = () => {

    const {shoppingCart,onProductCardChange} = useShoppingCart();
    
  return (
    <div>
        <h1>Shopping store</h1>
        <hr/>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
            }}>

            {
                product.map( product =>(
                <ProductCard key={ product.id} 
                    product={product} 
                    className="bg-dark text-white" 
                    onChange={ onProductCardChange }
                    value={ shoppingCart[product.id]?.count || 0}>
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title title={"Hola Mundo"} className="text-bold"/>
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>
                ))
            }

      


        </div>
        <div className="shopping-cart">
            {
                Object.entries( shoppingCart).map(([ key, product]) => (
                <ProductCard 
                    key={key}
                    product={product} 
                    className="bg-dark text-white" 
                    style={{width: '100px'}}
                    value = { product.count}
                    onChange={onProductCardChange}
                >
                        <ProductCard.Image className='custom-image' />
                        <ProductCard.Buttons className="custom-buttons" 
                        style={ {display:'flex', justifyContent:'center'}}
                    />
                </ProductCard>
                ))
            }
      
  
        </div>
        
    </div>
  )
}

export default ShoppingPage
