import logo from "../assets/logo.png";
import { useState } from "react";

function Navigation() {
  const [login, setLogin] = useState(false);

  return (
    <nav className="Navigation">
      <img className="logo" src={logo} alt="logo" width="100" height="50" />
      <ul>
        <li>Home</li>
        <li>Loan Officer</li>
        <li>Real Estate Commission</li>
      </ul>
      <div className="buttons">
        <button className="login" onClick={() => setLogin(true)}>
          Login
        </button>
        <button className="signUp">Sign Up</button>
        <button className="posting">Posting an ad</button>
      </div>
    </nav>
  );
}

export default Navigation;
