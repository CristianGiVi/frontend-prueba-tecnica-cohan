import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";

import { getProfessors } from "../hooks/getProfessors";
import { ModalDeleteProfessor } from "./ModalDeleteProfessor";

export const ProfessorList = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [showModalDeleteProfessor, setShowModalDeleteProfessor] = useState(false);
  const [professors, setProfessors] = useState([]);
  const [currentProfessor, setCurrentProfessor] = useState({});

  const getAllProfessors = async () => {
    try {
      const data = await getProfessors();
      if (data.status) {
        setProfessors(data.content);
      } else {
        console.error("Error obteniendo los datos:", data.content);
      }
    } catch (error) {
      console.error("Error obteniendo los datos:", error);
    }
  };

  useEffect(() => {
    getAllProfessors();
  }, []);

  useImperativeHandle(ref, () => ({
    fetchData: getAllProfessors,
  }));

  return (
    <div className="container mt-5">
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Celular</th>
            <th scope="col">Correo</th>
            <th scope="col">Salario (COP)</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Direccion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {professors.map((professor) => (
            <tr key={professor.id}>
              <td>{professor.name}</td>
              <td>{professor.phoneNumber}</td>
              <td>{professor.emailAddress}</td>
              <td>{professor.salary}</td>
              <td>{professor.address.city}</td>
              <td>{professor.address.street}</td>
              <td>
                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-auto">
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() =>
                          navigate(`/professor-details/${professor.id}`)
                        }
                      >
                        EDITAR
                      </button>
                    </div>
                    <div className="col-auto">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {setShowModalDeleteProfessor(true); setCurrentProfessor(professor)}}
                      >
                        ELIMINAR
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para eliminar estudiante */}
      <ModalDeleteProfessor
        show={showModalDeleteProfessor}
        handleClose={() => setShowModalDeleteProfessor(false)}
        professor={currentProfessor}
        refreshList={getAllProfessors}
      />
    </div>
  );
});

