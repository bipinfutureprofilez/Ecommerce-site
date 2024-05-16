import React from 'react'
import ProductItem from '../Elements/ProductItem';

export default function Shop() {
    return (
        <>
            <div className='shop_sec home_shop_sec py-5'>
                <div className='container'>
                    <h2 className='h1'>Products</h2>
                    <div className='row'>
                        {
                            Array.from(Array(8), (e, i) => {
                                return (
                                    <>
                                        <ProductItem />
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
