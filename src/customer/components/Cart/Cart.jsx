import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className=' col-span-2'>
          {[1,1,1,1].map((item)=><CartItem />)}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className=' border'>
            <p className='uppercase font-bold opacity-68 pb-4'>Price Details</p>
          </div>
          <div className='space-y-3 font-semibold'>
            <div className=' flex justify-between pt-3 text-black'>
              <span>Price</span>
              <span >RS:5000</span>
            </div>
            <div className=' flex justify-between pt-3'>
              <span>Discount</span>
              <span className=' text-green-600'>RS:2000</span>
            </div>
            <div className=' flex justify-between pt-3 '>
              <span>Delivery</span>
              <span className=' text-green-600'>RS:5000</span>
            </div>
            <div className=' flex justify-between pt-3 font-bold '>
              <span>Total</span>
              <span className=' text-green-600 '>RS:5000</span>
            </div>
          </div>
          <div>
          <button
            type="submit"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to Bag
          </button>
        </div>
        </div>

       
      </div>

    </div>
  )
}

export default Cart
