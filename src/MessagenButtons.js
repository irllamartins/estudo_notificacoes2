import React, { useCallback } from "react"
import { Button, Paper} from '@mui/material'

import { useSnackbar } from 'notistack';

import { connect } from 'react-redux'

const MessageButtons = (props) => {
 
    // usa a notificação em forma de fila
    const { enqueueSnackbar } = useSnackbar();

    const {body} = props

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
        { variant: "success", message: body },
        { variant: "error", message: body  },
        { variant: "warning", message: body  },
        { variant: "info", message: body  },
        { variant: "default", message: body  },
    ]


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
                    >
                    {button.variant}
                </Button>
            ))}

        </Paper>
    )
}
//mapeia o estado do valor na store para esse componente
const mapStateToProps = (state) => {
    return {
      body: state.notification.body
    }   
  }
  
 
  //percorre primeiro a função do conect para depois colocar media como parametro
export default connect(mapStateToProps)(MessageButtons);
  