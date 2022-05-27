import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import App from './App'
import { Home } from './pages/Home/Home'
import { Location } from './pages/Location/Location'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="location" element={<Location />}/>
      </Route>
    </Routes>
    </BrowserRouter>
)
