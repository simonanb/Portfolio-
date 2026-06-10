import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import CategoryPage from './pages/CategoryPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <BrowserRouter basename="/Portfolio-">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ux" element={<CategoryPage category="ux" />} />
        <Route path="/ux/:slug" element={<ProjectPage />} />
        <Route path="/graphic" element={<CategoryPage category="graphic" />} />
        <Route path="/graphic/:slug" element={<ProjectPage />} />
        <Route path="/clay" element={<CategoryPage category="clay" />} />
        <Route path="/clay/:slug" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}
