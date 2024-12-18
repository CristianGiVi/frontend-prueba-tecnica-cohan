import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { ProfessorsPage } from "../pages/professors/ProfessorsPage";
import { StudentPage } from "../pages/students/StudentPage";
import { StudentCard } from "../pages/students/components/StudentCard";
import { Header } from "../pages/header/Header";
import { ProfessorCard } from "../pages/professors/components/ProfessorCard";

export const AppRoutes = () => {
  return (
    
    <div style={{backgroundColor: "#fafafa"}}>

      <Header />

        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/professors-page" element={<ProfessorsPage />} />

            <Route path="/students-page" element={<StudentPage />}/>

            <Route path="/students-details/:id" element={<StudentCard />} />

            <Route path="/professor-details/:id" element={<ProfessorCard />} />
        </Routes>


    </div>


  )
}