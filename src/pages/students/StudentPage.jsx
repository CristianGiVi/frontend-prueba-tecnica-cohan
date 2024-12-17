import { useState } from "react";

import { StudentList } from "./components/StudentList";
import { ModalCreateStudent } from "./components/ModalCreateStudent";

export const StudentPage = () => {
  const [showModalCreateStudent, setShowModalCreateStudent] = useState(false);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <h1 className="text-center mb-4 mt-4">Datos de estudiantes</h1>

      <button
        className="btn btn-success"
        onClick={() => {
          setShowModalCreateStudent(true);
        }}
      >
        Crear Nuevo Estudiante
      </button>

      <StudentList />

      {/* Modal para crear un nuevo estudiante */}
      <ModalCreateStudent
        show={showModalCreateStudent}
        handleClose={() => setShowModalCreateStudent(false)}
      />
    </div>
  );
};
