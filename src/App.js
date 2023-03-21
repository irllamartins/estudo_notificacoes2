import React from 'react';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { Paper } from '@mui/material'
import './index.css'

import { useSnackbar } from 'notistack';
import MessageButtons from './MessagenButtons';
import { alterarNotificacao, alterarTituloNotificacao, alterarMensagemNotificacao } from './store/duck/action';
import { connect } from 'react-redux'

//informações de config
const firebaseConfig = {
  apiKey: "AIzaSyDEwnbp_HJUx3Lsox56kB_4QMvioZGiT5o",
  authDomain: "estudo-notificacao.firebaseapp.com",
  projectId: "estudo-notificacao",
  storageBucket: "estudo-notificacao.appspot.com",
  messagingSenderId: "613507036757",
  appId: "1:613507036757:web:eb31f187df1ff1725746dc"
};


function App(props) {

  const { enqueueSnackbar } = useSnackbar();

  const {
    messageId,
    title,
    body,
    alterarNotificacaoAgora,
    alterarTituloNotificacaoAgora,
    alterarMensagemNotificacaoAgora
  } = props

  //altera o estado
  const handleClickDefault = (payload) => {
    //alterarTituloNotificacaoAgora(payload)
    //alterarMensagemNotificacaoAgora(payload)
    alterarNotificacaoAgora(payload)
  }

  //Acessa o token de registro 
  function requestPermission() {

    console.log("Requesting permission...");

    //verificação de permissão
    Notification.requestPermission().then((permission) => {

      if (permission === "granted") {

        console.log("Notification permission granted.");
        const app = initializeApp(firebaseConfig);

        //registro do token
        const messaging = getMessaging(app);

        //recupera token
        getToken(messaging, {
          vapidKey:
            "BFOCGLD3ay_ujz7cXdx3ka9Wk30wQ9rOyn0Jf93nj_HfyvbL15Dc33A1v-0_o_W730F79o6B-ZdanmxipdXpbxI",
        }).then((currentToken) => {

          if (currentToken) {
            onMessage(messaging, (payload) => {
              // console.log('Message received. ', payload);

              //atualiza com o redux
              handleClickDefault(payload)

              //faz aparecer a parte visual da notificao
              enqueueSnackbar(`${body}`, { variant: 'success' })
            });

            //token
            console.log("currentToken: ", currentToken);


          } else {
            console.log("Can not get token");
          }
        });
      } else {
        console.log("Do not have permission!");
      }
    });

  }

  requestPermission();

  return (
    <div className="App">

      <h1>Notificações</h1>
      <span>Teste para recebimento de notificações</span>
      
      <MessageButtons />
      <Paper >
        <p>ID: {messageId}</p>
        <p>Titulo: {title}</p>
        <p>Mensagem: {body}</p>
      </Paper>
    </div>
  );
}

//mapeia o estado do valor na store para esse componente
const mapStateToProps = (state) => {
  return {
    messageId: state.notification.messageId,
    title: state.notification.title,
    body: state.notification.body

  }
}

//notifica quando ocorre uma alteração nas funções
const mapDispatchToProp = (dispatch) => {
  return {
    alterarNotificacaoAgora(novaNotificacao) {
      const action = alterarNotificacao(novaNotificacao)
      dispatch(action)
    },
    alterarTituloNotificacaoAgora(novaNotificacao) {
      const action = alterarTituloNotificacao(novaNotificacao)
      dispatch(action)
    },
    alterarMensagemNotificacaoAgora(novaNotificacao) {
      const action = alterarMensagemNotificacao(novaNotificacao)
      dispatch(action)
    }
  }
}

//percorre primeiro a função do conect para depois colocar media como parametro
export default connect(mapStateToProps, mapDispatchToProp)(App);
