import { useState, useRef } from "react";

import {ProfessorList} from "./components/ProfessorList";
import {ModalCreateProfessor} from "./components/ModalCreateProfessor";

export const ProfessorsPage = () => {

  const professorListRef = useRef();

  const [showModalCreateProfessor, setShowModalCreateProfessor] = useState(false);

  const refreshProfessorList = () => {
    if (professorListRef.current) {
      professorListRef.current.fetchData();
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <h1 className="text-center mb-4 mt-4">Datos de profesores</h1>

      <button
        className="btn btn-success"
        onClick={() => {
          setShowModalCreateProfessor(true);
        }}
      >
        AÑADIR PROFESOR
      </button>

      <ProfessorList ref={professorListRef}/>

      {/* Modal para crear un nuevo profesor */}
      <ModalCreateProfessor
        show={showModalCreateProfessor}
        handleClose={() => setShowModalCreateProfessor(false)}
        refreshList={refreshProfessorList}
      />
    </div>
  );
};
