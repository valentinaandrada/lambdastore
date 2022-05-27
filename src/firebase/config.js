
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDA2QfVzljZdc2MVmeXWA6XE1FqI27ABhg",
  authDomain: "lambdastore-35448.firebaseapp.com",
  projectId: "lambdastore-35448",
  storageBucket: "lambdastore-35448.appspot.com",
  messagingSenderId: "675546846493",
  appId: "1:675546846493:web:df5bd59bc946c31c49bdf4"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}