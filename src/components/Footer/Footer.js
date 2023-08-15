import React from 'react'
import { logo } from '../../img'
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedin, BiLogoTelegram } from 'react-icons/bi'
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='about'>
                        <div className='logo'>
                            <img src={logo} alt='footer logo' />
                        </div>
                        <div className='detail'>
                            <p>We are a team of designers and developers that creat Full Stack web Applications</p>
                            <div className='icon'>
                                <li><BiLogoFacebookCircle /></li>
                                <li><BiLogoInstagram /></li>
                                <li><BiLogoTelegram /></li>
                                <li><BiLogoLinkedin /></li>
                            </div>
                        </div>
                    </div>
                    <div className='account'>
                        <h3>My Account</h3>
                        <ul>
                            <li>Account</li>
                            <li>Order</li>
                            <li>Cart</li>
                            <li>Shipping</li>
                            <li>Return</li>
                        </ul>
                    </div>
                    <div className='page'>
                        <h3>Pages</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Terms & Condition</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer