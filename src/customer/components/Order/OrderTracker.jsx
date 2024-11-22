import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

function OrderTracker({ activeStep }) {
    const steps = [
        "Placed",
        "Order Confirmed",
        "Shipped",
        "Out for Delivery",
        "Delivered"
    ];

    return (
        <div className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel
                            sx={{
                                '& .MuiStepLabel-label': {
                                    color: activeStep >= index ? '#9155FD' : '#9E9E9E', // Color based on active step
                                    fontSize: '16px', // Adjust the font size
                                }
                            }}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

export default OrderTracker;
