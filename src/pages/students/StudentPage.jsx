import { StudentList } from "./components/StudentList";

export const StudentPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <h1 className="text-center mb-4 mt-4">Datos de estudiantes</h1>

      <button 
        className="btn btn-success"
        onClick={() => alert("Crear nuevo estudiante")}
      >
        Crear Nuevo Estudiante
      </button>

      <StudentList />
    </div>
  );
};
