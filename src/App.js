// import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Blogpage from './pages/Blogpage'
import Notfoundpage from './pages/Notfoundpage'

function App() {
  return (
    <>

      <header className='header'>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </header>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/blog' element={<Blogpage />} />
        <Route path='/*' element={<Notfoundpage />} />
      </Routes>




    </>
  );
}

export default App
