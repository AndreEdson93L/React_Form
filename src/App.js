import logo from './logo.svg';
import './App.css';
import { useState, createRef } from 'react';

function App() {
  const [getUserInput, setUserInput] = useState({
    name: '',
    nickname: ''
  });

  const inputRef = createRef();

  const handleUserInputs = event => {
    const { name, value } = event.target
    setUserInput({
      ...getUserInput,
      [name]: value
    });

    console.log([name] + ' ' + value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log('getUserInput.name: ' + getUserInput.name + ', getUserInput.nickname: ' + getUserInput.nickname + ', inputRef: ' + inputRef.current.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input name='name' value={getUserInput.name} onChange={handleUserInputs}/>
          <input name='nickname' value={getUserInput.nickname} onChange={handleUserInputs}/>
          <input ref={inputRef} placeholder="lastname"/>
          <button type='submit'>Register</button>
        </form>
      </header>
    </div>
  );
}

export default App;
