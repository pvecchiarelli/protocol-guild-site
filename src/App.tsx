import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/home'
import Donate from './pages/donate'
import Blog from './pages/blog'
import BlogPost from './pages/blog-post'
import About from './pages/about'
import DocPage from './pages/doc-page'
import Endowment from './pages/endowment'
import ScrollToTop from './components/ScrollToTop'

const App: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/endowment" element={<Endowment />} />
          <Route path="/docs" element={<Navigate to="/docs/01-membership" replace />} />
          <Route path="/docs/:slug" element={<DocPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
