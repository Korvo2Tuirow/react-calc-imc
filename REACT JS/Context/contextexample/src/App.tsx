import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { ShowData } from "./pages/ShowData";
import { Context } from "./contexts/Context";
import { useContext } from "react";

const App = () => {

  const {state, dispatch} = useContext(Context);

  const handleSwitchTheme = () =>{
    if(state.theme.status === "light"){
      dispatch({
        type: 'CHANGE_STATUS',
        payload:{
          status: 'dark',
        }
      });
    }else{
      dispatch({
        type: 'CHANGE_STATUS',
        payload:{
          status: 'light',
        }
      });
    }

  }

  return (
    <div className="h-screen overflow-hidden" style={{backgroundColor: state.theme.status === 'light'? '#f8f6f6' : '#232231',
      color: state.theme.status === 'light'? '#232231' : '#f8f6f6'
    }}>
      <BrowserRouter>
        <div className="flex justify-end  ">
          <button onClick={handleSwitchTheme} className="p-3 shadow shadow-black rounded-lg">Tema: {state.theme.status}</button>
        </div>
        <div className="flex flex-col justify-center h-[100%]">
          
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/exibir" element={<ShowData />} />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;