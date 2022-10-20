import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Card() {
    const [arr, setArr] = useState(
        [{
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            "images": "https://dummyjson.com/image/i/products/1/1.jpg"


        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
            "images": "https://dummyjson.com/image/i/products/2/1.jpg"


        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
            "images": "https://dummyjson.com/image/i/products/3/1.jpg"
        }
        ])
    var cart = [];
    function addToCart(item) {

        if (!localStorage.getItem("item")) {
            cart.push(item)
            localStorage.setItem('item', JSON.stringify(cart))
        }
        else {
            cart = JSON.parse(localStorage.getItem("item"))
            cart.push(item)
            localStorage.setItem('item', JSON.stringify(cart))
        }
    }

    return (
        <div className='container'>
            <div className='mt-5 row row-cols-3 row-cols-md-3 g-4' >

                {
                    arr.map((item) => <div className="col" key={arr.index}>
                        <div className="card col" style={{ "width": "18rem" }}  >
                            <img src={item.images} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text" >{item.description}</p>
                                <button className='btn btn-primary' onClick={() => { addToCart(item) }} >Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>

    )
}





export default Card