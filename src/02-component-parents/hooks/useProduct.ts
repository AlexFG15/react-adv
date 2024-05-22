import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product : Product
    onChange? : (args : onChangeArgs ) => void
    value ? : number;
    initialValues?: InitialValues;
}

export const useProduct = ( {onChange, product, value = 0, initialValues }: useProductArgs) => {


    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);
    console.log(initialValues?.count);


    const increaseBy = (value : number) => {

        let newValue = Math.max(counter + value, 0 );
        if(initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues.maxCount);
        }
        setCounter(newValue);

       onChange && onChange( {count : newValue, product});
    }

    const reset = () =>{ 
        setCounter(initialValues?.count || value)
    }
    

    useEffect(() => {
        if(!isMounted.current) return;
        else isMounted.current = true

        setCounter(value);
    }, [value]);
    


    return{
        counter,
        isMaxCounterReached : !!initialValues?.maxCount && initialValues?.maxCount == counter,
        maxCount: initialValues?.maxCount ,
        increaseBy,
        reset
    }

}