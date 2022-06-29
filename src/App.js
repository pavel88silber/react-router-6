// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Blogpage from './pages/Blogpage'
import Notfoundpage from './pages/Notfoundpage'

import Layout from './component/Layout';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path='blog' element={<Blogpage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>

    </>
  );
}

export default App
