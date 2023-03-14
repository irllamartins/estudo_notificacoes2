import React, { useCallback } from "react"
import { Button, Paper,TextField } from '@mui/material'

import { useSnackbar } from 'notistack';

export const MessageButtons = (props) => {
 
    // usa a notificação em forma de fila
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    // personaliação de estilo de botão
    const styles = {
        root: {
            flexGrow: 1,
            display: 'flex',
            margin: 16,
            justifyContent: 'center',
            alignItems: 'middle'
        },
        button: {
            margin: 8,
            borderColor: '#313131',
            color: '#313131'
        },
        success: {
            borderColor: '#43a047',
            color: '#43a047'
        },
        error: {
            borderColor: '#d32f2f',
            color: '#d32f2f'
        },
        info: {
            borderColor: '#2979ff',
            color: '#2979ff'
        },
        warning: {
            borderColor: '#ffa000',
            color: '#ffa000'
        }
    };

    // tipos de botão
    const buttons = [
        { variant: "success", message: props.frase },
        { variant: "error", message: "Errro" },
        { variant: "warning", message: "Warning" },
        { variant: "info", message: "Info" },
        { variant: "default", message: "Info default" },
    ]

    const handleClickDefault=(e)=>{
        enqueueSnackbar(e)
    }
    //memoriza a função e rederiza só quando tiver uma nova nootificação na fila
    const handleClick = useCallback((button) => () => {

        console.log(button)
        enqueueSnackbar(button.message, { variant: button.variant });
    }, [enqueueSnackbar]);

    return (
        <Paper>
            {/*buttons.map((button) => (
                <Button
                    key={button.variant}
                    variant='outlined'
                    //style={{ ...styles.button, ...styles[button.variant] }}
                    onChange={ (frase) => handleClick( { variant: "success", message: frase })}>
                    {button.variant}
                </Button>
            ))*/}
            <TextField  onChange={e=>handleClickDefault(props.frase)}/>

        </Paper>
    )
}