import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { editProduct, getProductById } from '../../service/products';

const EditProduct = () => {
    const {idProduct} = useParams()
    
    const [mounted, setMounted] = useState(false)
    const [data, setData] = useState({
        id:'',
        instrumento: '',
        marca: '',
        modelo: '',
        imagen: '',
        precio: '',
        costoEnvio: '',
        cantidadVendida: '',
        descripcion: '',
    })
    const {instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion} = data;
    
    const handleChange = (name, value)=>{
        setData({
            ...data,
            [name]: value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        editProduct(data)
        window.location.href="/grilla-productos"
    }

    useEffect(()=>{
        setMounted(true)

        Promise.all([
            getProductById(idProduct),
        ]).then(([product])=>{
            const {id,instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion} = product[0]
            setData({
                id,
                instrumento,
                marca,
                modelo,
                imagen,
                precio,
                costoEnvio,
                cantidadVendida,
                descripcion,
            })
        }).catch(error=>{
            new Error(error)
            console.log(error)
        })
    }, [mounted, idProduct])


    return (
                <Container className="mt-3">
            <Form onSubmit={(e)=> onSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Insertar nombre" name='instrumento' value={instrumento} onChange={(e)=> handleChange(e.target.name, e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control type="text" placeholder="Insertar marca" name='marca' value={marca} onChange={(e)=> handleChange(e.target.name, e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control type="text" placeholder="Insertar modelo" name='modelo' value={modelo} onChange={(e)=> handleChange(e.target.name, e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" placeholder="Insertar url de la imagen" name='imagen' value={imagen} onChange={(e)=> handleChange(e.target.name, e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" placeholder="Insertar precio" name='precio' value={precio} onChange={(e)=> handleChange(e.target.name, e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Costo envío</Form.Label>
                    <Form.Control type="text" placeholder="Insertar costo del envío" name='costoEnvio' value={costoEnvio} onChange={(e)=> handleChange(e.target.name, e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Cantidad vendida</Form.Label>
                    <Form.Control type="text" placeholder="Insertar cantidad vendida" name='cantidadVendida' value={cantidadVendida} onChange={(e)=> handleChange(e.target.name, e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Insertar descripción" name='descripcion' value={descripcion} onChange={(e)=> handleChange(e.target.name, e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-3'>
                    Enviar
                </Button>
            </Form>
        </Container>
    );
};

export default EditProduct;