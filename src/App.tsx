import { useContext } from "react";

import { Context } from "./functions/context";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

import "./App.css";

function App() {
  const { user } = useContext(Context);

  if (user) {
    return <ChatsPage />;
  } else {
    return <AuthPage />;
  }
}

export default App;
