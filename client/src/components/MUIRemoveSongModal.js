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
    height: 200,
    bgcolor: 'background.paper',
    borderRadius: '25px',
};
const buttons = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '10px',
    margin: '10px'
};

export default function MUIRemoveSongModal() {
    const { store } = useContext(GlobalStoreContext);

    function handleConfirmRemoveSong () {
        store.addRemoveSongTransaction();
    }

    function handleCancelRemoveSong () {
        store.hideModals();
    }
    
    let modalClass = "modal";
    console.log("are we inside the remove modal");
    console.log(store.isRemoveSongModalOpen())
    if (store.isRemoveSongModalOpen()) {
        modalClass += " is-visible";
    }
    let songTitle = "";
    if (store.currentSong) {
        songTitle = store.currentSong.title;
    }

    return (
        <Modal
            open={store.isRemoveSongModalOpen() === true}
            aria-labelledby = 'modal-title'
            aria-describedby='modal-description'
        >
            <Box sx={style}>
                <h2 id = 'modal-title'
                align = 'center'
                >
                Remove {songTitle}?
                </h2>
                <p id = 'modal-description'
                align = 'center'
                sx = {{mt: 2}}
                >
                 Are you sure you wish to permanently remove {songTitle} from the playlist?
                </p>

            <Box sx = {buttons}>
                    <Button variant = "outlined"
                        onClick={handleConfirmRemoveSong}
                    >Confirm
                    </Button>  
                    <Button variant = "outlined"
                        onClick={handleCancelRemoveSong}
                    >Cancel
                    </Button>
            </Box>
            </Box>
        </Modal>
    );
}