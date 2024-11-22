import { Label } from '@mui/icons-material'
import React from 'react'
import {Grid} from '@mui/material';
import OrderCard from './OrderCard';

const Order = () => {
    const Orderstatus = [
        { Label: "On the Way", value: "on_the_way" },
        { Label: "Delivered", value: "delivered" },
        { Label: "Cancelled", value: "cancelled" },
        { Label: "Returned", value: "returned" },
    ]
    return (
        <div className='px-5 lg:px-20'>
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                        <h1 className=' font-bold text-lg'>Filter</h1>
                        <div className=' space-y-4 mt-10'>
                            <h1 className='font-semibold'>Order status</h1>

                            {Orderstatus.map((option) => <div className=' flex items-center'>
                                <input defaultValue={option.value} type="checkbox" className=' w-h h-4 border-x-gray-300 text-indigo-600 focus:text-indigo-500' />
                                 <label htmlFor={option.value}>
                                    {option.Label}
                                 </label>
                                 </div>)}

                        </div>
                    </div>
                </Grid>

                <Grid item xs={9}>
                      <div className='space-y-5'>
                        {
                            [1,1,1,1,1].map((item)=><OrderCard/>)
                        }
                      </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Order
