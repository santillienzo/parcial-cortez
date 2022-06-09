import React, { useEffect, useState } from 'react';
import './DetailProduct.css'
import { Button, Container } from 'react-bootstrap';
import camion from '../../assets/img/camion.png'
import { useParams } from 'react-router-dom';
import { getProductById } from '../../service/products';



const DetailProduct = () => {
    const [mounted, setMounted] = useState(false)
    const [product, setProduct] = useState({})

    const {idProduct} = useParams()


    useEffect(()=>{
        setMounted(true)

        Promise.all([
            getProductById(idProduct),
        ]).then(([product])=>{
            setProduct(product[0])
        }).catch(error=>{
            new Error(error)
            console.log(error)
        })
    }, [mounted, idProduct])


    return mounted &&(
        <Container>

        <div className='detailProductList'>
            <div className='detailProductSideOne'>
                <div className='detailProductImage'><img src={`http://localhost:3000/img/${product.imagen}`} alt="" /></div>
                <div className='detailProductDescription'>
                    <h5>Descripción</h5>
                    <p>{product.descripcion}</p>
                </div>
            </div>
            <div className='detailProductSideTwo'>
                <span className='productSoldOut'>{product.cantidadVendida} vendidos</span>
                <h3 className='productDetailTitle'>{product.product}</h3>
                <p className='productPrice'>$ {product.precio}</p>
                <div className='brandInfo'>
                    <p>Marca: {product.marca}</p>
                    <p>Modelo: {product.modelo}</p>
                </div>
                {
                    product.costoEnvio === "0" ?(
                        <span className='productShipping free'><img src={camion} alt="" /> Envío gratis</span>
                    ):(
                        <span className='productShipping non-free'>Costo de envío Interior de Argentina: {product.costoEnvio}</span>
                    )
                }
                <div className='mt-4'>
                    <Button variant="outline-primary">Agregar al carrito</Button>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default DetailProduct;