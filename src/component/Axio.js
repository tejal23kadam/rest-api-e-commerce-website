import React, { useState, useEffect } from 'react'
import axios from 'axios';
function Axio() {

    const [datas, Setdata] = useState([]);

    const getProductList = async () => { 

        axios.get('https://fakestoreapi.com/products/categories')
            .then(function (response) {
                // handle success
                Setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        getProductList()
    }, [])

    return (
        <div>
            {
                datas.map((i) => {
                    return <li> {i}</li>
                })
            }
        </div>
    )
}
export default Axio