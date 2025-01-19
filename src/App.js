import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from 'components/ScrollToTop.js'
import NavLayout from 'layouts/NavLayout.js'
import Home from 'pages/Home.js'

import 'App.css'
import CreativeWork from 'pages/CreativeWork'
import Reporting from 'pages/Reporting'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path='creativework' element={<CreativeWork />} />
          <Route path='reporting' element={<Reporting />} />

          {/* TODO use for future individual projects pages */}
          {/* <Route path=':projectId' element={<ProjectLayout />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
