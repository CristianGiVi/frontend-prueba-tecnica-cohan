import { Modal } from "react-bootstrap";
import { deleteStudentById } from "../hooks/deleteStudent";

export const ModalDeleteStudent = ({ show, handleClose, student, refreshList }) => {
    const handleDelete = async (id) => {
      try {
        const data = await deleteStudentById(student.id);
        if (data.status) {
          alert("Estudiante eliminado con exito");
          refreshList()
        } else {
          console.error("Error obteniendo los datos:", data.content);
          alert("Hubo un error al eliminar el estudiante");
        }
      } catch (error) {
        console.error("Error obteniendo los datos:", error);
        alert("Hubo un error al eliminar el estudiante");
      } finally{
        handleClose();
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
            <button type="button" className="btn btn-danger" onClick={handleDelete}>ELIMINAR</button>
            </Modal.Footer>
        </Modal>
      
    );
  };
  