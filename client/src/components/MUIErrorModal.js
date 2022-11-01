import { useContext } from 'react'
import GlobalStoreContext from '../auth';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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
                <header className="dialog-header">
                    ERROR! {error}
                </header>
                <div id="confirm-cancel-container">
                    <button
                        id="dialog-no-button"
                        className="modal-button"
                        onClick={handleCloseError}
                    >Cancel</button>
                </div>
            </div>
            </Box>
        </Modal>
    );
}