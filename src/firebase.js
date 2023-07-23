import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1rPSH2pRMG1AyaxLautegfDFE_VVHO0Y",
  authDomain: "todo-app-cp-e5053.firebaseapp.com",
  projectId: "todo-app-cp-e5053",
  storageBucket: "todo-app-cp-e5053.appspot.com",
  messagingSenderId: "761725540121",
  appId: "1:761725540121:web:c302ebc4ee4d1256b4d788",
  measurementId: "G-R0KTJ2FPBV",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export default app;
