import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import GlobalStyles from './GlobalStyles.js'
import Home from './pages/Home/index.jsx'
import { ActiveContextProvider } from './contexts/active.context.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <ActiveContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </ActiveContextProvider>
        </Router>
        <GlobalStyles />
    </React.StrictMode>
)
