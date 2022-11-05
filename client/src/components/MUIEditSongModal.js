import { useContext, useState } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField, Button, Typography } from '@mui/material';
import { flexbox } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 350,
    bgcolor: 'background.paper',
    borderRadius: '25px',
};
const textbox = {
    display: 'flex',
    flexDirection: 'column',
    'MuiTextField-root': {width: '10ch'},
    gap: '10px',
    margin: '10%'
}
const buttons = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '10px',
    margin: '10px'
}

export default function MUIEditSongModal() {
    const { store } = useContext(GlobalStoreContext);
    const [ title, setTitle ] = useState(store.currentSong.title);
    const [ artist, setArtist ] = useState(store.currentSong.artist);
    const [ youTubeId, setYouTubeId ] = useState(store.currentSong.youTubeId);

    function handleConfirmEditSong() {
        let newSongData = {
            title: title,
            artist: artist,
            youTubeId: youTubeId
        };
        store.addUpdateSongTransaction(store.currentSongIndex, newSongData);        
    }

    function handleCancelEditSong() {
        store.hideModals();
    }

    function handleUpdateTitle(event) {
        setTitle(event.target.value);
    }

    function handleUpdateArtist(event) {
        setArtist(event.target.value);
    }

    function handleUpdateYouTubeId(event) {
        setYouTubeId(event.target.value);
    }

    return (
        <Modal
            open={store.isEditSongModalOpen() === true}
            aria-labelledby = "modal-title"
        >
            <Box sx={style}>
                <h2 id='modal-title' 
                align = 'center'
                >Edit Song</h2>
                <Box sx = {textbox}>
                    <TextField id = "outlined-basic"
                        label = "Title"
                        size = 'small'
                        defaultValue = {title}
                        onChange = {handleUpdateTitle}
                    />
                    <TextField id = "outlined-basic"
                        label = "Artist"
                        size = "small"
                        defaultValue = {artist}
                        onChange = {handleUpdateArtist}
                    />
                    <TextField id = "outlined-basic"
                        label = "Youtube ID"
                        size = "small"
                        defaultValue = {youTubeId}
                        onChange = {handleUpdateYouTubeId}
                    />
                </Box>
                <Box sx = {buttons}>
                    <Button variant = "outlined"
                        onClick={handleConfirmEditSong}
                    >Confirm
                    </Button>  
                    <Button variant = "outlined"
                        onClick={handleCancelEditSong}
                    >Close
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}