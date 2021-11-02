import { useState } from "react";
import './styles.css'

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  function HandleLogin(userInput) {
    if(userInput === ''){
        return window.alert('Insira seu nome')
    }
    setUser(userInput);
    setIsLoggedIn(true);
  }

  return (
    <form>
      <input className='input-text'
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
    </form>
  );
};

export default GetUserComponent;
