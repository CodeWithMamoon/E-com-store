import React from 'react'
import { Rating, Grid, Avatar, Box } from '@mui/material';
const ProductReviewcard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className='space-y-2'>
            <div>
              <p>RAM</p>
              <p>Aprail 5,2024</p>
            </div>

          </div>
          <Rating name="read-only" value={4.5} readOnly precision={.5} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, reiciendis!</p>
        </Grid>

      </Grid>
    </div>
  )
}

export default ProductReviewcard
