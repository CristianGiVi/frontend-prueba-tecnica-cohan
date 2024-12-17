import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { ProfessorsPage } from "../pages/Professors/ProfessorsPage";
import { StudentPage } from "../pages/students/StudentPage";
import { StudentCard } from "../pages/students/components/StudentCard";

export const AppRoutes = () => {
  return (
    
    <div style={{backgroundColor: "#fafafa"}}>

        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/professors-page" element={<ProfessorsPage />} />

            <Route path="/students-page" element={<StudentPage />}/>

            <Route path="/students-details/:id" element={<StudentCard />} />
        </Routes>


    </div>


  )
}