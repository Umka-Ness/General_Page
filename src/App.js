import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { createContext } from "react";
import { Login } from "./components/Auth/Login";

// Инициализация Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB1mWqevmipidxWW264EnXV__YFdSkx93M",
  authDomain: "umka-77a72.firebaseapp.com",
  databaseURL: "https://umka-77a72-default-rtdb.firebaseio.com",
  projectId: "umka-77a72",
  storageBucket: "umka-77a72.appspot.com",
  messagingSenderId: "270019919476",
  appId: "1:270019919476:web:28ff114af689a2143bdb21",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
export const Context = createContext(null);

function App() {
  return (
    <div className="App">
      <Context.Provider
        value={{
          firebase,
          auth,
          firestore,
        }}
      >
        {/* <Register /> */}
        <Login />
      </Context.Provider>
    </div>
  );
}

export default App;
