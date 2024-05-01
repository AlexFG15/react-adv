import styles from '../styles/styles.module.css'
import { ReactElement, createContext, useContext, useState } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext =  createContext({} as ProductContextProps);
const {Provider} = ProductContext;


interface ProductButtonsProps{
    counter : number,
    increaseBy : (value : number) => void;
}



export const ProductCard = ({children,product} : ProductCardProps) => {

    const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        <div className={styles.productCard}>
            {children}
            {/* <ProductImage img={product.img}/>
            <PruductTitle title={product.title}/>
            <ProductButtons counter={counter} 
                increaseBy={increaseBy }/> */}
            {/* <img className={styles.productImg} src={ notImge} alt="Coffe Mug" /> */}
        </div>
    </Provider>

  )
}


export default ProductCard
