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
        { variant: "success", message: props.frase.body },
        { variant: "error", message: props.frase.body  },
        { variant: "warning", message: props.frase.body  },
        { variant: "info", message: props.frase.body  },
        { variant: "default", message: props.frase.body  },
    ]

    const handleClickDefault=(e)=>{
        enqueueSnackbar(e)
    }
    //memoriza a função e rederiza só quando tiver uma nova nootificação na fila
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
                    onClick={handleClick(button)}
                    onChange={ handleClickDefault(props.frase)}
                    >
                    {button.variant}
                </Button>
            ))}

        </Paper>
    )
}