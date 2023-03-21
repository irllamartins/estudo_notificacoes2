import { combineReducers, legacy_createStore as createStore } from "redux";
import reducersAll from './duck/reducer'

//pegar o valor atual para retornar o proximo estado
//gera estado
const reducers = combineReducers({
    notification: reducersAll
 
})

//cria estado
const storeConfig=()=> {
    return createStore(reducers)
}

export default storeConfig 
