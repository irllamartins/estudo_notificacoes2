const INITIAL_STATE = {
   
        messageId: "0",
        title: "titulo teste",
        body: "corpo da notificação teste"
    
}

//action->reducers
const reducersAll = (state = INITIAL_STATE, action) =>{
   console.log("-- state",state,"\n-- action",action.payload)

    switch (action.type) {
        case "NOTIFICACAO_ID_ALTERADO":
            return {
                messageId: action.payload.messageId,
                title: action.payload.notification.title,
                body: action.payload.notification.body
            }
        case "NOTIFICACAO_TITULO_ALTERADO":
            return {
                ...state, title: action.payload
            }
        case "NOTIFICACAO_MENSSAGEM_ALTERADO":
            return {
                ...state, body: action.payload
            }
        default:
            return state

    }
     
}

export default reducersAll