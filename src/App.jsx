import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HoverCards from './components/HoverCard'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import OurMessage from './components/OurMessage'
import AboutPage1 from './pages/AboutPage1'
import AboutPage2 from './pages/AboutPage2'
import AboutPage3 from './pages/AboutPage3'
import AcademicsPage1 from './pages/AcademicsPage1'
import AcademicsPage2 from './pages/AcademicsPage2'
import AcademicsPage3 from './pages/AcademicsPage3'
import NewsPage1 from './pages/NewsPage1'
import NewsPage2 from './pages/NewsPage2'
import NewsPage3 from './pages/NewsPage3'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Hero /><Welcome /><HoverCards/><OurMessage /></>}/>
            <Route path="/about/page1" element={<AboutPage1 />} />
            <Route path="/about/page2" element={<AboutPage2 />} />
            <Route path="/about/page3" element={<AboutPage3 />} />
            <Route path="/academics/page1" element={<AcademicsPage1 />} />
            <Route path="/academics/page2" element={<AcademicsPage2 />} />
            <Route path="/academics/page3" element={<AcademicsPage3 />} />
            <Route path="/news/page1" element={<NewsPage1 />} />
            <Route path="/news/page2" element={<NewsPage2 />} />
            <Route path="/news/page3" element={<NewsPage3 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

