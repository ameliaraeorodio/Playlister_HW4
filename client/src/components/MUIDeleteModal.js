import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '25px'
};
const text = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '25px'
};
const buttons = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: '10px',
    margin: '10px'
}
export default function MUIDeleteModal() {
    const { store } = useContext(GlobalStoreContext);
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
    }
    function handleDeleteList(event) {
        store.deleteMarkedList();
    }
    function handleCloseModal(event) {
        store.unmarkListForDeletion();
    }

    return (
        <Modal
            open={store.listMarkedForDeletion !== null}
        >
            <Box sx={style}>
                <div className="modal-dialog">
                <Box sx = {text}>
                    Delete the {name} Playlist?
                </Box>
                <div id="confirm-cancel-container">
                    <Box sx = {buttons}>
                        <Button variant = "outlined"
                            onClick={handleDeleteList}
                        >Confirm
                        </Button>
                        <Button variant = "outlined"
                            onClick={handleCloseModal}
                        >Close
                        </Button>
                    </Box>
                </div>
            </div>
            </Box>
        </Modal>
    );
}