import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { ShowData } from "./pages/ShowData";
import { ContextProvider } from "./contexts/Context";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/exibir" element={<ShowData />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;