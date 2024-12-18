import { Modal } from "react-bootstrap";
import { deleteProfessorById } from "../hooks/deleteProfessorById";

export const ModalDeleteProfessor = ({ show, handleClose, professor, refreshList }) => {
    const handleDelete = async (id) => {
      try {
        const data = await deleteProfessorById(professor.id);
        if (data.status) {
          alert("Profesor eliminado con exito");
          refreshList()
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Error obteniendo los datos:", error);
        alert("Hubo un error al eliminar el profesor");
      } finally{
        handleClose();
      }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Eliminar Profesor</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{`¿Estas seguro de querer eliminar al profesor`} <b>{professor.name}</b> {`?`}</p>
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
  