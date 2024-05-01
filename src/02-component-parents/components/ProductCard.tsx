import styles from '../styles/styles.module.css'
import  { CSSProperties, ReactElement, createContext, useContext, useState } from 'react'
import { useProduct } from '../hooks/useProduct'
import { Product, ProductContextProps } from '../interfaces/interfaces';

export interface Props {
    product : Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties
 }

export const ProductContext =  createContext({} as ProductContextProps);
const {Provider} = ProductContext;


interface ProductButtonsProps{
    counter : number,
    increaseBy : (value : number) => void;
}



export const ProductCard = ({children,product,className, style} : Props) => {

    const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        <div className={`${styles.productCard} ${className}` } style={style}>
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
