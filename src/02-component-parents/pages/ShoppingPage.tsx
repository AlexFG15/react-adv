import  { ProductCard,ProductButtons, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { product } from "../data/products";





const ShoppingPage = () => {

    const product1 = product[0];

    
  return (
    <div>
        <h1>Shopping store</h1>
        <hr/>
       
                <ProductCard key={ product1.id} 
                    product={product1} 
                    className="bg-dark text-white" 
                    initialValues={{
                        count: 4,
                        maxCount: 10,
                    }}>
                    {
                        ({reset, count,isMaxCounterReached, increaseBy, maxCount}) =>(
                            <>                    
                                <ProductCard.Image className='custom-image' />
                                <ProductCard.Title title={"Hola Mundo"} className="text-bold"/>
                                <ProductCard.Buttons className="custom-buttons" />
                                <button onClick={reset}>Reset</button>
                                <button onClick={()=> increaseBy(-2)}>-2</button>
                                {
                                    (!isMaxCounterReached && <button onClick={()=> increaseBy(+2)}>+2</button>)
                                }
                                
                                <span>{count}</span>
                            </>
                        )
                    }

                </ProductCard>

    </div>
  )
}

export default ShoppingPage
