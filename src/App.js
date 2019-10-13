import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import api from "./service/api";

function App() {

  const [email, setEmail] = useState(''); 

  function handleSubmit(event) {
    event.preventDefault();

    console.log(email)
    
  }
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input type="email" id="email" 
          placeholder="Seu melhor e-mail" 
          value={email}
          onChange={event => setEmail(event.target.email)}
          />
        </form>
        <button className="btn" type="submit">
          Entrar
        </button>
      </div>
    </div>
  );
}

export default App;
