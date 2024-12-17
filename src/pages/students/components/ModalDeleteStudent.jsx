import { Modal } from "react-bootstrap";

export const ModalDeleteStudent = ({ show, handleClose, student }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Eliminar Estudiante</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{`¿Estas seguro de querer eliminar al estudiante ${student.name}?`}</p>
                <p>{}</p>
            </Modal.Body>

            <Modal.Footer>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              CERRAR
            </button>
            <button type="button" className="btn btn-danger">ELIMINAR</button>
            </Modal.Footer>
        </Modal>
      
    );
  };
  