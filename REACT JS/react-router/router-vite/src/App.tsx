//import { Routes, Route } from 'react-router-dom';
//import { About } from './pages/About';
//import { AboutBonieky } from './pages/AboutBonieky';
//import { AboutKorvo } from './pages/AboutKorvo';
//import { Home } from './pages/Home';
//import { NotFound } from './pages/NotFound';
//import { AboutItem } from './pages/AboutItem';
//import { RequireAuth } from './RequireAuth';


import { RouteList } from './routes/RouteList';

const App = () => {

  return (

    <div className="p-4">
      <header>
        <h1 className="text-blue-950">ROUTERS</h1>
      </header>
      <hr />
      <div className="py-4">
       {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<RequireAuth><About/></RequireAuth>} />
          <Route path='/sobre/korvo' element={<AboutKorvo />} />
          <Route path='/sobre/bonieky' element={<AboutBonieky />} />
          <Route path="*" element={<NotFound />} />
          <Route path="sobre/:slug" element={<AboutItem />} />
        </Routes>*/}

        <RouteList/>
        

      </div>

      <div>
        
      </div>
     
      <footer>
        <p>Todos os direitos reservados</p>
      </footer>

    </div>
  )
}

export default App
