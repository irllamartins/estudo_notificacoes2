
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

//informações de config
const firebaseConfig = {
  apiKey: "AIzaSyDEwnbp_HJUx3Lsox56kB_4QMvioZGiT5o",
  authDomain: "estudo-notificacao.firebaseapp.com",
  projectId: "estudo-notificacao",
  storageBucket: "estudo-notificacao.appspot.com",
  messagingSenderId: "613507036757",
  appId: "1:613507036757:web:eb31f187df1ff1725746dc"
};

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
            console.log('Message received. ', payload);
            // ...
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
