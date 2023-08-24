import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { CiLogin, CiLogout } from 'react-icons/ci'
import './Navbar.css'
import { logo } from '../../img'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = ({ searchBtn }) => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const [search, setSearch] = useState('')
    return (
        <>
            <div className='free'>
                <div className='icon'>
                    <FaTruckMoving />
                </div>
                <p>Free shipping when shopping up to 1000$ </p>
            </div>
            <div className='main_header'>
                <div className='container'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className='search_box'>
                        <input type='text' value={search} placeholder='Search your product...' autoComplete='off' onChange={e => setSearch(e.target.value)} />
                        <button onClick={() => searchBtn(search)}>Search</button>
                    </div>
                    <div className='icon'>
                        {
                            isAuthenticated &&
                            (
                                <div className='account'>
                                    <div className='user_icon'>
                                        <AiOutlineUser />
                                    </div>
                                    <p>Hello, {user.name}</p>
                                </div>
                            )
                        }
                        <div className='second_icon'>
                            <Link to={"/"} className='link'><AiOutlineHeart /></Link>
                            <Link to={"/cart"} className='link'><BsBagCheck /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>

                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/product' className='link'>Product</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='author'>
                        {
                            isAuthenticated ?
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                                :
                                <button onClick={() => loginWithRedirect()}> <CiLogin /></button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar