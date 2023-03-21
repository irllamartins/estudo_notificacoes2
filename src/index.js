import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';

const store = storeConfig()
console.log("store",store.getState())
store.subscribe(()=>console.log("store atualizado",store.getState()))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //integrar react+redux
  <Provider store={store}>
    <React.StrictMode>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </React.StrictMode>
  </Provider>
);
