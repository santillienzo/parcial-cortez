import axios from 'axios'

import { config } from './config'


export const getAllProducts = async()=>{
    return await axios.get(`${config.databaseUrl}/api/instrumentos`,{
        'mode': 'no-cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    }).then(res=> res.data)
    .catch(err=> {
        console.log(err)
    })
}

export const getProductById = async(id)=>{
    return await axios.get(`${config.databaseUrl}/api/instrumentos/${id}`,{
        'mode': 'no-cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    }).then(res=> res.data)
    .catch(err=> {
        console.log(err)
    })
}

export const deleteProduct = async(id)=>{
    return await axios.delete(`${config.databaseUrl}/api/instrumentos/delete/${id}`)
    .then(res=> res.data)
    .catch(err=> {
        console.log(err)
    })
}

export const insertProduct = async(body)=>{
    return await axios.post(`${config.databaseUrl}/api/instrumentos/insert`,
        body
    ).then(res=> console.log(res))
    .catch(err=> {
        console.log(err)
    })
}

export const editProduct = async(body)=>{
    return await axios.put(`${config.databaseUrl}/api/instrumentos/update`,
        body
    ).then(res=> console.log(res))
    .catch(err=> {
        console.log(err)
    })
}