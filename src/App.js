import logo from "./logo.svg";
import "./App.css";
import RestrictedPage from "./components/RestrictedPage";
import { useState } from "react";

function App() {
  const user = "Hiran";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let Login = () => {
    setIsLoggedIn(true);
  };
  let Logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RestrictedPage
          user={user}
          isLoggedIn={isLoggedIn}
          Login={Login}
          Logout={Logout}
        ></RestrictedPage>
      </header>
    </div>
  );
}

export default App;
