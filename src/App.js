import { HashRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from 'components/ScrollToTop.js'
import NavLayout from 'layouts/NavLayout.js'
import Home from 'pages/Home.js'

import 'App.css'
import AcademicWork from 'pages/AcademicWork'
import CreativeWork from 'pages/CreativeWork'
import Reporting from 'pages/Reporting'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path='academicwork' element={<AcademicWork />} />
          <Route path='creativework' element={<CreativeWork />} />
          <Route path='reporting' element={<Reporting />} />

          {/* TODO use for future individual projects pages */}
          {/* <Route path=':projectId' element={<ProjectLayout />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
