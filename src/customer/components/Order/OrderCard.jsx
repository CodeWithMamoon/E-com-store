import React from 'react'
import { Grid } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';


export default function OrderCard() {
    const navigate=useNavigate()
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" alt="error" />
                        <div className='ml-5 space-y-2'>
                            <p>Men slim mid Rise</p>
                            <p className='opacrity-50 font-semibold text-xs'>Size:M</p>
                            <p className='opacrity-50 font-semibold text-xs'>Color:Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>Rs:5000</p>
                </Grid>
                <Grid item xs={4}>
                    
                   {true &&
                    <div> <p>
                        <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                     <span> Delivered on march 3</span>
                    </p>
                    <p className=' text-xs'>YOur item has Deliverd</p>
                    </div>
                   }
                   
                   {false && <p>
                    <span>
                        Expected Develiery on 4
                    </span>
                   </p>
                   }
                    
                </Grid>
            </Grid>
        </div>
    )
}
