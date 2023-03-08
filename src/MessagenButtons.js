import React,{useCallback} from "react"
import { Button, Paper } from '@mui/material'

import { useSnackbar } from 'notistack';

 export const  MessageButtons= () =>{

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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
    const buttons = [
        { variant: "success", message: "Sucessu" },
        { variant: "error", message: "Errro" },
        { variant: "warning", message: "Warning" },
        { variant: "info", message: "Info" },
    ]
    const handleClick = useCallback((button) => () => {
        enqueueSnackbar(button.message, { variant: button.variant });
    }, [enqueueSnackbar]);

    return (
        <Paper>
            {buttons.map((button) => (
                <Button
                    key={button.variant}
                    variant='outlined'
                    style={{ ...styles.button, ...styles[button.variant] }}
                    onClick={handleClick(button)}>
                    {button.variant}
                </Button>
            ))}
        </Paper>
    )
}