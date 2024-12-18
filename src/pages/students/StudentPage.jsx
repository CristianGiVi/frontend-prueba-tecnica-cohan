import { useState, useRef } from "react";

import { StudentList } from "./components/StudentList";
import { ModalCreateStudent } from "./components/ModalCreateStudent";

export const StudentPage = () => {

  const studentListRef = useRef();

  const [showModalCreateStudent, setShowModalCreateStudent] = useState(false);

  const refreshStudentList = () => {
    if (studentListRef.current) {
      studentListRef.current.fetchData();
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <h1 className="text-center mb-4 mt-4">Datos de estudiantes</h1>

      <button
        className="btn btn-success"
        onClick={() => {
          setShowModalCreateStudent(true);
        }}
      >
        AÑADIR ESTUDIANTE
      </button>

      <StudentList ref={studentListRef}/>

      {/* Modal para crear un nuevo estudiante */}
      <ModalCreateStudent
        show={showModalCreateStudent}
        handleClose={() => setShowModalCreateStudent(false)}
        refreshList={refreshStudentList}
      />
    </div>
  );
};
