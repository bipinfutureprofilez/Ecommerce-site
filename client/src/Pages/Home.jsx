import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../Elements/ProductItem';
// import { Link } from 'react-router-dom';

export default function Home() {

    // const [quntity, setQuantity] = useState(1);

    // const addQuantity = (e) => {
        
    // }
    // const minusQuantity = (e) => {
        
    // }

    return (
        <>  
            <div className='hero_sec'>
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

                            <div className="container">
                                <div className="carousel-caption text-center">
                                    <h1>Example headline.</h1>
                                    <p className='my-3'>Some representative placeholder content for the first slide of the carousel.</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/register">Sign up today</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

                            <div className="container">
                                <div className="carousel-caption text-center">
                                    <h1>Another example headline.</h1>
                                    <p className='my-3'>Some representative placeholder content for the first slide of the carousel.</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/register">Sign up today</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

                            <div className="container">
                                <div className="carousel-caption text-center">
                                    <h1>One more for good measure.</h1>
                                    <p className='my-3'>Some representative placeholder content for the first slide of the carousel.</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/register">Sign up today</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
            <div className='shop_sec home_shop_sec py-5'>
                <div className='container'>
                    {/* {hostName} */}
                    <h2 className='h1'>Products</h2>
                    <div className='row'>
                        {
                            Array.from(Array(8), (e,i) => {
                                return(
                                    <>
                                        <ProductItem setKey={i} />
                                    </>
                                );
                            })
                        }
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}
