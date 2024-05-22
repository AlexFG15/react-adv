import styles from '../styles/styles.module.css'
import  { CSSProperties, ReactElement, createContext} from 'react'
import { useProduct } from '../hooks/useProduct'
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

export interface Props {
    product : Product;
    // children?: ReactElement | ReactElement[];
    children : ( argumen : ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args : onChangeArgs) => void;
    value? : number;
    initialValues?: InitialValues
 }

export const ProductContext =  createContext({} as ProductContextProps);
const {Provider} = ProductContext;


interface ProductButtonsProps{
    counter : number,
    increaseBy : (value : number) => void;
}

export const ProductCard = ({children,product,className, style, onChange, value, initialValues} : Props) => {

    const {counter, increaseBy, maxCount, isMaxCounterReached,reset} = useProduct({onChange, product, value, initialValues});

  

  return (
    <Provider value={{
        counter,
        increaseBy,
        maxCount,
        product
    }}>
        <div className={`${styles.productCard} ${className}` } style={style}>
            {children ({
                count: counter,
                isMaxCounterReached,
                maxCount : initialValues?.maxCount,
                product,
                increaseBy,
                reset
            })}
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
