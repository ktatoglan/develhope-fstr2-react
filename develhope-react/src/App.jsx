import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const sayHello = (name) => {
    return <h1>Hello, {name}!</h1>;
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{sayHello("Kazim")}</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


/* 
03 - JSX
What happens if the name variable is not passed to the function?

- It works but only return "Hello, !".


04 - JSX
What happens if the name variable contains a JSX expression instead of a string?

- If the name variable contains a JSX expression instead of a string, React will render the JSX expression.
*/
