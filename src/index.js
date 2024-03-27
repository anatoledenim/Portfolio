import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import GlobalStyles from './GlobalStyles.js'
import Home from './pages/Home/index.jsx'
import Portfolio from './pages/Portfolio/index.jsx'
import BgVideo from './components/BgVideo/index.jsx'
import { ActiveContextProvider } from './contexts/active.context.jsx'
import Footer from './components/Footer/index.jsx'
import Work from './pages/Work/index.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <ActiveContextProvider>
                <BgVideo />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/work/:id" element={<Work />} />
                </Routes>
                <Footer />
            </ActiveContextProvider>
        </Router>
        <GlobalStyles />
    </React.StrictMode>
)
