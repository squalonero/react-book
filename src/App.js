import './App.css'
import './Custom.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import UseEffectPromiseComponent from './components/1_UseEffectPromiseComponent/UseEffectPromiseComponent'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promise" element={<UseEffectPromiseComponent />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
