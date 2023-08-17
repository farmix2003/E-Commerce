import React, { useState } from 'react'
import Productdetails from '../ProductDetails'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import './Product.css'
const Product = () => {
    const [product, setProduct] = useState(Productdetails)
    const filterProduct = (product) => {
        const update = Productdetails.filter(x => (
            x.Cat === product
        ))
        setProduct(update)
    }
    const allProducts = () => {
        setProduct(Productdetails)
    }
    return (
        <>
            <div className='product'>
                <h2># Product</h2>
                <p>Home - products</p>
                <div className='container'>
                    <div className='filter'>
                        <div className='categories'>
                            <h3>Categories</h3>

                            <ul>
                                <li onClick={() => allProducts()}>All</li>
                                <li onClick={() => filterProduct('Tablet')}>Tablet</li>
                                <li onClick={() => filterProduct('Smart Watch')}>Smart Watch</li>
                                <li onClick={() => filterProduct('Headphone')}>Headphone</li>
                                <li onClick={() => filterProduct('Camera')}>Camera</li>
                                <li onClick={() => filterProduct('Gaming')}>Gaming</li>
                            </ul>
                        </div>
                    </div>
                    <div className='productbox'>
                        <div className='content'>
                            {product.map(item => (
                                <div className='box' key={item.id}>
                                    <div className='img_box'>
                                        <img src={item.Img} alt={item.Title} />
                                        <div className='icons'>
                                            <li><AiOutlineShoppingCart /></li>
                                            <li><BsEye /></li>
                                            <li><AiOutlineHeart /></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <p>{item.Cat}</p>
                                        <h3>{item.Title}</h3>
                                        <h4>{item.Price}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product