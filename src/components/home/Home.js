import { Link } from 'react-router-dom'
import { BsArrowRight, BsCurrencyDollar, BsEye } from 'react-icons/bs'
import { FiTruck } from 'react-icons/fi'
import { CiPercent } from 'react-icons/ci'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { AiOutlineCloseCircle, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { Headphone, cpuHeat, mobilePhone, slider, smartWatch } from '../../img'
import './home.css'

import Homeproducts from '../../HomeProducts'
const Home = ({ detail, view, close, setClose }) => {
    return (
        <>
            {
                close ?
                    <div className='product_detail'>
                        <div className='container'>
                            <button onClick={() => setClose(false)} className='closeBtn'><AiOutlineCloseCircle /></button>
                            {detail.map((item) => (
                                <div className='productbox'>
                                    <div className='product_img'>
                                        <img src={item.Img} alt={item.Title} />
                                    </div>
                                    <div className='detail'>
                                        <h4>{item.Cat}</h4>
                                        <h2>{item.Title}</h2>
                                        <p>A Screen Everyone Will Love: Whether Your Family is streaming or video chatting with friends tablet AB</p>
                                        <h3>{item.Price}</h3>
                                        <button>Add To Cart</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> : null
            }

            <div className='top_banner'>
                <div className='container'>
                    <div className='detail'>
                        <h2>The Best Note Collection 2023</h2>
                        <Link to={'/product'} className='link'> Shop Now <BsArrowRight /></Link>
                    </div>
                    <div className='img_box'>
                        <img src={slider} alt='Slider' />
                    </div>
                </div>
            </div>
            <div className='product_type'>
                <div className='container'>
                    <div className='box'>
                        <div className='img_box'>
                            <img src={mobilePhone} alt='Moblie Phone' />
                        </div>
                        <div className='detail'>
                            <p>23 products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src={Headphone} alt='HeadPhone' />
                        </div>
                        <div className='detail'>
                            <p>52 products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box' >
                            <img src={cpuHeat} alt='Cpu Heat' style={{ width: '100px', height: '100px', marginLeft: '45px' }} />
                        </div>
                        <div className='detail'>
                            <p>63 products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src={smartWatch} alt='Smart Watch' />
                        </div>
                        <div className='detail'>
                            <p>27 products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className='box'>
                        <div className='icon'>
                            <FiTruck />
                        </div>
                        <div className='detail'>
                            <h3>Free Shipping </h3>
                            <p>Above $1000</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BsCurrencyDollar />
                        </div>
                        <div className='detail'>
                            <h3>Return & Refund</h3>
                            <p>Money Back Guarantee</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <CiPercent />
                        </div>
                        <div className='detail'>
                            <h3>Member Discount</h3>
                            <p>On Every Order</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <TfiHeadphoneAlt />
                        </div>
                        <div className='detail'>
                            <h3>Customer Support</h3>
                            <p>Every Time Call Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='products'>
                <h2>Top Products</h2>
                <div className='container'>

                    {Homeproducts.map(item => (
                        <div className='box' key={item.id}>
                            <div className='img_box'>
                                <img src={item.Img} alt={item.Title} />
                                <div className='icons'>
                                    <li><AiOutlineShoppingCart /></li>
                                    <li onClick={() => view(item)}><BsEye /></li>
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
            <div className='banner'>
                <div className='container'>
                    <div className='detail'>
                        <h4>LATEST TECHNOLOGY ADDED</h4>
                        <h3>Apple iPad 10.2 9th Gen - 2023</h3>
                        <p>$ 986</p>
                        <Link to={'/product'} className='link'> Shop Now <BsArrowRight /></Link>
                    </div>
                    <div className='img'>
                        <img src={slider} alt='slider' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home