import { ReactElement } from "react";
import ProductCard from '../components/ProductCard';



export interface ProductCardProps {
    product : Product;
    children?: ReactElement | ReactElement[];
 }
 
 export interface Product {
     id : string;
     title : string;
     img? : string;
 }
 
 export interface ProductContextProps {
     counter: number;
     increaseBy :  (value : number) => void;
     product : Product;
 }
 