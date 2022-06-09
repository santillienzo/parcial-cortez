import React from 'react';
import './Product.css'
import camion from '../../assets/img/camion.png'
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {id, instrumento, imagen, precio, costoEnvio, cantidadVendida}= product


    return (
        <div className='productContainer'>
            <div className='productImageContainer'>
                <img src={`${imagen}`} alt="" />
            </div>
            <div className='productInfoContainer'>
                <Link to={`/detalle/${id}`} className='productTitle'>{instrumento}</Link>
                <p className='productPrice'>$ {precio}</p>
                {
                    costoEnvio === "0" ?(
                        <span className='productShipping free'><img src={camion} alt="" /> Envío gratis a todo el país</span>
                    ):(
                        <span className='productShipping non-free'>Costo de envío Interior de Argentina: {costoEnvio}</span>
                    )
                }
                <span className='productSoldOut'>{cantidadVendida} vendidos</span>
            </div>
        </div>
    );
};

export default Product;