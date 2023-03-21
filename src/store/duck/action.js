//Action Creator

//altera notificacao
export const alterarNotificacao =(novaNotificacao)=>{
  
    return{
        //action
        type:'NOTIFICACAO_ID_ALTERADO',
        payload:novaNotificacao
    }
}

//altera titulo da notificacao
export const alterarTituloNotificacao =(novaNotificacao)=>{
    return{
        //action
        type:'NOTIFICACAO_TITULO_ALTERADO',
        payload:novaNotificacao.notification.title
    }
}
//altera mensagem da notificacao
export const alterarMensagemNotificacao =(novaNotificacao)=>{
    return{
        //action
        type:'NOTIFICACAO_MENSSAGEM_ALTERADO',
        payload:novaNotificacao.notification.body
    }
}