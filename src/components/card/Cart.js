import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = ({ cart, setCart }) => {
    const incQty = (product) => {
        const exist = cart.find(x => {
            return x.id === product.id
        })
        setCart(cart.map(item => (
            item.id === product.id ? { ...exist, qyt: exist.qyt + 1 } : item
        )))
    }
    const decQty = (product) => {
        const exist = cart.find(x => {
            return x.id === product.id
        })
        setCart(cart.map(item => (
            item.id === product.id && item.qyt > 0 ? { ...exist, qyt: exist.qyt - 1 } : item
        )))
    }
    const removeItem = (product) => {
        const exist = cart.find(x => {
            return x.id === product.id
        })
        if (exist.qyt > 0) {
            setCart(cart.filter(x => (
                x.id !== product.id
            )))
        }
    }
    const totalPrice = cart.reduce((price, item) => price + item.qyt * item.Price, 0)
    return (
        <>
            <div className='cart_container'>
                {
                    cart.length === 0 &&
                    <div className='empty_cart'>
                        <h2 className='empty'>Cart is Empty</h2>
                        <Link to='/product' className='empty-cart_btn'>Shop Now</Link>
                    </div>
                }
                <div className='content'>
                    {cart.map(item => (
                        <div className='cart_item' key={item.id}>
                            <div className='cart_img'>
                                <img src={item.Img} alt={item.Title} />
                            </div>
                            <div className='details'>
                                <div className='info'>
                                    <h4>{item.Cat}</h4>
                                    <h3>{item.Title}</h3>
                                    <p>Price: ${item.Price}</p>
                                    <div className='qty'>
                                        <button className='decQty' onClick={() => decQty(item)}>-</button>
                                        <input type='text' value={item.qyt} />
                                        <button className='incQty' onClick={() => incQty(item)}>+</button>
                                    </div>
                                    <h4 className='subtotal'> Sub total: ${item.Price * item.qyt}</h4>
                                </div>
                                <div className='close'>
                                    <button onClick={() => removeItem(item)}><AiOutlineClose /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {
                    cart.length > 0 &&
                    <>
                        <h2 className='total-price'>${totalPrice}</h2>
                        <button className='checkoutBtn'>Checkout</button>
                    </>
                }
            </div>
        </>
    )
}

export default Cart