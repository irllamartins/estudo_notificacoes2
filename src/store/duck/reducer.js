import { Types } from "./types"

const INITIAL_STATE = {
   
        messageId: "0",
        title: "titulo teste",
        body: "corpo da notificação teste"
    
}

//action->reducers
const reducersAll = (state = INITIAL_STATE, action) =>{
   console.log("-- state",state,"\n-- action",action.payload)

    switch (action.type) {
        case Types.NOTIFICATION:
            return {
                messageId: action.payload.messageId,
                title: action.payload.notification.title,
                body: action.payload.notification.body
            }
        case Types.TITLE:
            return {
                ...state, title: action.payload
            }
        case Types.BODY:
            return {
                ...state, body: action.payload
            }
        default:
            return state

    }
     
}

export default reducersAll