import React from 'react'
import { Box, Modal } from '@mui/material';
import RegistrationForm from './RegistrationForm';
import { useLocation } from 'react-router-dom';
import LoginForm from './loginForm'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    outline: "none",
    boxShadow: 24,
    p: 4,
};
const AuthModel = ({ handleClose, open }) => {
    const location = useLocation()
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {location.pathname === "/login" ? <LoginForm /> : <RegistrationForm />}

                </Box>
            </Modal>
        </div>
    )
}

export default AuthModel
