import './App.css'
import './Custom.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import UseEffectPromiseComponent from './components/1_UseEffectPromiseComponent/UseEffectPromiseComponent'
import ParameterRouteComponent from './components/3_ParameterRouteComponent/ParameterRouteComponent'
import RouterArticlesComponent from './components/utils/RouterArticlesComponent'
import FormComponent from './components/4_FormComponent/FormComponent'
import NotFoundComponent from './components/5_NotFoundComponent/NotFoundComponent'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promise" element={<UseEffectPromiseComponent />} />
          <Route path="/posts" element={<RouterArticlesComponent />} />
          <Route path="/post/:id" element={<ParameterRouteComponent />} />
          <Route path="/new" element={<FormComponent />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
