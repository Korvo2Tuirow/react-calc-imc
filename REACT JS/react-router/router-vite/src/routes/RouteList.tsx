//import { Route, Routes } from "react-router-dom"
import { useRoutes } from "react-router-dom";
import { About } from '../pages/About';
import { AboutBonieky } from '../pages/AboutBonieky';
import { AboutKorvo } from '../pages/AboutKorvo';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { AboutItem } from '../pages/AboutItem';
import { RequireAuth } from '../RequireAuth';
import { Request } from "../album/request";
import { Album } from "../album/album";

export const RouteList = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path:'sobre', element: <RequireAuth><About/></RequireAuth>},
        {path:'sobre/korvo', element: <AboutKorvo/>},
        {path:'sobre/bonieky', element: <AboutBonieky/>},
        {path:"*", element: <NotFound/>},
        {path:"/:slug", element: <AboutItem/>},
        {path:"album/:id", element: <Album/>},
        {path:'album', element: <Request/>},
    ]);
    
    
        /*(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element=
                {<RequireAuth>
                    <About />
                </RequireAuth>} />
            <Route path='/sobre/korvo' element={<AboutKorvo />} />
            <Route path='/sobre/bonieky' element={<AboutBonieky />} />
            <Route path="*" element={<NotFound />} />
            <Route path="sobre/:slug" element={<AboutItem />} />
        </Routes>
    )*/
}