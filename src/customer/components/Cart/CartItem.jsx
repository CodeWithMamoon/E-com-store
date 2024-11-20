import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material';


export default function CartItem() {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className=' flex items-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" alt="error" />
        </div>
        <div className='ml-5 space-y-1'>
          <p className='font-semibold'>Men Slim Mid Raise Black</p>
          <p className=' opacity-70'>Size:L,White</p>
          <p className=' opacity-70 mt-2'>Sller :Mamoon</p>
          <div className=' flex items-center space-x-5 text-gray-900 pt-6'>
            <div className=' flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
              <p className='font-semibold'>RS:1900</p>
              <p className='font-semibold line-through'>RS:2100</p>
              <p className='font-semibold text-green-600'>50%OFF</p>
            </div>
          </div>

          <div className=' lg:flex items-center lg:space-x-10 pt-4'>
            <div className=' flex items-center space-x-2'>
              <IconButton>
                <RemoveCircleOutline />
              </IconButton>
              <span className='py-1 px-7 border rounded-sm'>3</span>
              <IconButton sx={{ color: "RGB(145 85 253)" }}>
                <AddCircleOutline />
              </IconButton>
            </div>
            <div>
              <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
