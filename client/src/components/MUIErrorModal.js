import { useContext } from 'react'
import GlobalStoreContext from '../auth';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AlertTitle, Alert, Button, autocompleteClasses } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '25px'
};
const button = {
    display: 'flex',
    justifyContent: 'center'
}

export default function MUIErrorModal() {
    const { auth } = useContext(GlobalStoreContext);
    let error = "";
    if (auth.error) {
        console.log("are we making it to error register");
        console.log("error message: "+ auth.error);
        error = auth.error;
    }
    function handleCloseError(event){
        auth.removeErrorMessage();
    }
    return (
        <Modal
            open={auth.error !== null}
        >
            <Box sx={style}>
                <div className="modal-dialog">
                <Alert severity = "warning">
                    <AlertTitle> Warning</AlertTitle>
                    {error}
                </Alert>
                <Box sx = {button}>
                    <Button variant = "outlined"
                        onClick={ handleCloseError}
                    >Close
                    </Button>
                </Box>
            </div>
            </Box>
        </Modal>
    );
}