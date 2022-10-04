import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from 'components/ScrollToTop.js'
import NavLayout from 'layouts/NavLayout.js'
import ProjectLayout from 'layouts/ProjectLayout.js'
import Home from 'pages/Home.js'

import 'App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path=':projectId' element={<ProjectLayout />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
