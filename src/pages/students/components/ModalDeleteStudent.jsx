import { Modal } from "react-bootstrap";
import { deleteStudentById } from "../hooks/deleteStudent";

export const ModalDeleteStudent = ({ show, handleClose, student }) => {


    const fetchData = async (id) => {
      try {
        const data = await deleteStudentById(student.id);
        if (data.status) {
          console.log(data);
        } else {
          console.error("Error obteniendo los datos:", data.content);
        }
      } catch (error) {
        console.error("Error obteniendo los datos:", error);
      } finally {
          setIsLoading(false)
      }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Eliminar Estudiante</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{`¿Estas seguro de querer eliminar al estudiante`} <b>{student.name}</b> {`?`}</p>
            </Modal.Body>

            <Modal.Footer>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              CERRAR
            </button>
            <button type="button" className="btn btn-danger" onClick={fetchData}>ELIMINAR</button>
            </Modal.Footer>
        </Modal>
      
    );
  };
  