import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { AboutBonieky } from './pages/AboutBonieky';
import { AboutKorvo } from './pages/AboutKorvo';
import { Home } from './pages/Home';

const App = () => {

  return (

    <div className="p-4">
      <header>
        <h1 className="text-blue-950">OLA</h1>
      </header>
      <hr />
      <div className="py-4">
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/sobre' element={<About/>}/>
          <Route path='/sobre/korvo' element={<AboutKorvo/>}/>
          <Route path='/sobre/bonieky' element={<AboutBonieky/>}/>
        </Routes>
      </div>
      <hr />
      <footer>
        <p>Todos os direitos reservados</p>
      </footer>

    </div>
  )
}

export default App
