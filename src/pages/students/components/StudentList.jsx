import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getStudentList } from "../hooks/getStudentList";
import { ModalDeleteStudent } from "./ModalDeleteStudent";

export const StudentList = () => {
  const navigate = useNavigate();
  const [showModalDeleteStudent, setShowModalDeleteStudent] = useState(false);
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});

  const getAllStudents = async () => {
    try {
      const data = await getStudentList();
      if (data.status) {
        setStudents(data.content);
      } else {
        console.error("Error obteniendo los datos:", data.content);
      }
    } catch (error) {
      console.error("Error obteniendo los datos:", error);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div className="container mt-5">
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Celular</th>
            <th scope="col">Correo</th>
            <th scope="col">#Estudiante</th>
            <th scope="col">Nota promedio</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Direccion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.emailAddress}</td>
              <td>{student.studentNumber}</td>
              <td>{student.averageMark}</td>
              <td>{student.address.city}</td>
              <td>{student.address.street}</td>
              <td>
                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-auto">
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() =>
                          navigate(`/students-details/${student.id}`)
                        }
                      >
                        EDITAR
                      </button>
                    </div>
                    <div className="col-auto">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {setShowModalDeleteStudent(true); setCurrentStudent(student)}}
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
      <ModalDeleteStudent
        show={showModalDeleteStudent}
        handleClose={() => setShowModalDeleteStudent(false)}
        student={currentStudent}
        refreshList={getAllStudents}
      />
    </div>
  );
};
