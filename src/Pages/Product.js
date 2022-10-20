import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCard';
import { axiosInstance } from '../Config/Axios';

function Product() {
    const [product, setproduct] = useState([])

    useEffect(() => {
        axiosInstance.get('/products').then((res) => {

            setproduct(res.data.products)
        })
    }, [])
    return (
        <div>
            <div className='row'>
                {
                    product.map((item) => <div className='col-2 mt-3 me-5' ><ProductCard data={item} /></div>)
                }
            </div>
        </div>
    )
}

export default Product


