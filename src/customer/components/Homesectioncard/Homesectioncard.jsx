import React from 'react';

function Homesectioncard({product}) {
  return (
    <div className='flex flex-col cursor-pointer border border-black bg-white shadow-lg items-center rounded-lg overflow-hidden w-[15rem] mx-3'>
      <div className='h-[13rem] w-[10rem]'>
        <img 
          className='object-cover object-top w-full h-full' 
          src={product.image}
          alt="Businessman"
        />
      </div>
      <div>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
      </div>
    </div>
  );
}

export default Homesectioncard;
