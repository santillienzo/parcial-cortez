import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { deleteProduct, getAllProducts } from '../../service/products';

const Grid = () => {
    const [mounted, setMounted] = useState(false)
    const [products, setProducts] = useState([])


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

    const eliminarProducto = (id)=>{
        setProducts(products.filter(product=> product.id !== id))
        deleteProduct(id)
    }


    return mounted &&(
        <Container className='mt-3'>
            <Button href="/agregar-producto" variant="success" className='mb-3'>Añadir</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Precio</th>
                        <th>Costo envío</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.length > 0 &&(
                        products.map((e, i)=>(
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.instrumento}</td>
                                <td>{e.descripcion}</td>
                                <td>{e.marca}</td>
                                <td>{e.modelo}</td>
                                <td>{e.precio}</td>
                                <td>{e.costoEnvio}</td>
                                <td><Button href={`/grilla-productos/${e.id}`} variant="outline-success">Editar</Button></td>
                                <td><Button variant="outline-danger" onClick={()=> eliminarProducto(e.id)}>Eliminar</Button></td>
                            </tr>
                        ))
                    )
                }
                </tbody>
            </Table>
        </Container>
    );
};

export default Grid;