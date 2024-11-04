import React from 'react'
import './ProductCard.css'


function Productcard({product}) {
    return (
        <div className='productcard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className=' h-full w-full object-cover object-left-top' src={product.image} alt="" />
            </div>
            <div className='textpart bg-white p-3'>
               <div>
               <p className=' font-bold opacity-60'>{product.brand}</p>
               <p>{product.title}</p>
               </div>
                <div className='flex space-x-4'>
                    <p className=' font-semibold'>{product.selling_price}</p>
                    <p className=' line-through opacity-50'>{product.price}</p>
                    <p className='  opacity-50'>{product.disscount}</p>
                </div>
            </div>
        </div>
    )
}

export default Productcard
