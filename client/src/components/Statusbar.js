import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { Typography } from '@mui/material'

/*
    Our Status bar React component goes at the bottom of our UI.
    
    @author McKilla Gorilla
*/
function Statusbar() {
    const { store } = useContext(GlobalStoreContext);
    const style = {
        position: "fixed",
        bottom: "0",
        display: "flex",
        justifyContent: 'center',
        paddingBottom : '50px',
        color: "#6495ED"
    }
    let text ="";
    if (store.currentList)
        text = store.currentList.name;
    return (
        <div id="playlister-statusbar">
            <Typography  sx = {style} variant="h4">{text}</Typography>
        </div>
    );
}

export default Statusbar;