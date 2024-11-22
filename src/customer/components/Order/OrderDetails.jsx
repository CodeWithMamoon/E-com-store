import React from 'react'
import AdressCard from '../CheckOut/AdressCard'
import OrderTracker from './OrderTracker'
import { Grid,Box} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function OrderDetails() {
    return (
        <div className='px-5 lg:px-20'>
            <div>
                <h1 className='font-semibold text-xl py-7'>Delivery Address</h1>
                <AdressCard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>
            <Grid container className='space-y-5'>
                {[1,1,1,1].map((item)=> <Grid item container className="shadow-xl rounded-md p-5 border" sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-2'>
                            <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" className='w-[5rem] h-[5rem] object-cover object-top' alt="" />
                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>Men alm adsnflnas mind</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'><span>color:pink</span> <span>Size:M</span></p>
                                <p>seller:Linaria</p>
                                <p>Rs:5000</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item>
                     <Box sx={{color:deepPurple[500]}}> 
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                        <span>Rate & Review Product</span>
                     </Box>
                    </Grid>
                </Grid> )}
                <Grid item container className="shadow-xl rounded-md p-5 border" sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-2'>
                            <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" className='w-[5rem] h-[5rem] object-cover object-top' alt="" />
                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>Men alm adsnflnas mind</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'><span>color:pink</span> <span>Size:M</span></p>
                                <p>seller:Linaria</p>
                                <p>Rs:5000</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item>
                     <Box sx={{color:deepPurple[500]}}> 
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                        <span>Rate & Review Product</span>
                     </Box>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderDetails
