
import { Props as ProductButtonPropss } from "../components/ProductButtons";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { ReactElement } from "react";
import ProductCard, { Props  as ProductCardProps} from '../components/ProductCard';

 export interface Product {
     id : string;
     img? : string;
     title : string;
 }
 
 export interface ProductContextProps {
     counter: number;
     increaseBy :  (value : number) => void;
     product : Product;
 }
 

 export interface ProductCardHOCProps {
    ({ children, product } : ProductCardProps): JSX.Element,
    Buttons: (Props: ProductButtonPropss) => JSX.Element 
    Image:   (Props: ProductImageProps) => JSX.Element,
    Title:   (Props: ProductTitleProps) => JSX.Element,
 }