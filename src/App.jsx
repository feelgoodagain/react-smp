import { useState } from 'react'
import './style/App.css'
import RouteList from "./route"
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <RouteList />
    </div>
  )
}

export default App
