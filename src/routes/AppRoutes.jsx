import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";

export const AppRoutes = () => {
  return (
    
    <div style={{backgroundColor: "#fafafa"}}>

        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>


    </div>


  )
}