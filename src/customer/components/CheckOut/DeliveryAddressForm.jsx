import React from 'react'
import { Button, Grid, TextField, Box } from '@mui/material';
import AdressCard from './AdressCard';
export default function DeliveryAddressForm() {

    const handelSubmit=(e)=>{
        e.preventDefault();
        const data= new FormData(e.currentTarget)

        const address={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            Address:data.get("Address"),
            city:data.get("city"),
            Zip:data.get("Zip"),
            PhoneNumber:data.get("PhoneNumber"),
        } 
        console.log("dress",address)
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-12 py-7 border-b cursor-pointer'>
                        <AdressCard />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                            size='large'
                            variant='contained'>
                            Delivery Here
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handelSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='firstName'
                                        name='firstName'
                                        label='First Name'
                                        fullWidth
                                        autoComplete='given-name' />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='lastName'
                                        name='lastName'
                                        label='Last Name'
                                        fullWidth
                                        autoComplete='given-name' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id='Address'
                                        name='Address'
                                        label='Address'
                                        fullWidth
                                        autoComplete='given-name'
                                        rows={4}
                                        multiline />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='city'
                                        name='city'
                                        label='City'
                                        fullWidth
                                        autoComplete='given-name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='State/Provence/Region'
                                        name='State/Provence/Region'
                                        label='State/Provence/Region'
                                        fullWidth
                                        autoComplete='given-name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='Zip'
                                        name='Zip'
                                        label='Zip/postalCode'
                                        fullWidth
                                        autoComplete='given-name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='PhoneNumber'
                                        name='PhoneNumber'
                                        label='Phone Number'
                                        fullWidth
                                        autoComplete='given-name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                                        size='large'
                                        variant='contained'
                                        type='submit'>
                                        Delivery Here
                                    </Button>
                                </Grid>
                            </Grid>

                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
