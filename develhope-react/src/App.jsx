import './App.css'
import Welcome from './Welcome'


function App() {
  return (
      <div className="App">
        <h1>Hello, World!</h1>
        <Welcome name={<i>Kazim</i>} age="29" />
      </div>
  )
}

export default App
