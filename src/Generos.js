import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Generos = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get('/api/genres')
        .then(res => {
            setData(res.data.data)
        })
    }, [])

    const renderizaLinha = record => {
        return (
            <tr key={record.id}>
                <th scope='row'>{record.id}</th>
                <td>{record.name}</td>
                <td><button>+</button></td>
            </tr>
        )
    }

    if(data.length === 0){
        return(
            <div className='container'>
                <h1>Genêros</h1>
                <div className='alert alert-warning' role='alert'>
                    Você não possui genêros criados
                </div>
            </div>    
        )
    }

    return ( 
        <div className='container'>
            <h1>Genêros</h1>
            <table class='table table-dark'>
                <thread>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Ações</th>
                    </tr>
                </thread>
                <tbody>
                    {data.map(renderizaLinha)}
                </tbody>
            </table>
        </div>
    )
}

export default Generos;