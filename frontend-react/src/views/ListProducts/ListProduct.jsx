import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../../componets/Product/Product';
import { getAllProducts } from '../../service/products';



const ListProduct = () => {
    const [mounted, setMounted] = useState(false)
    const [products, setProducts] = useState(false)


    useEffect(()=>{
        setMounted(true)
        
        Promise.all([
            getAllProducts(),
        ]).then(([products])=>{
            setProducts(products)
        }).catch(error=>{
            new Error(error)
        })
    }, [mounted])


    return mounted && products &&(
        <Container className="mt-3">
        {
            products.length > 0 &&(
                products.map((e, i)=>(
                    <Product key={i} product={e}/>
                ))
            )
        }
        </Container>
    );
};

export default ListProduct;