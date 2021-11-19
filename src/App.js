import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './common/Footer'
import Header from './common/Header'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
