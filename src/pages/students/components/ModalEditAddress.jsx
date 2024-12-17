import { Modal } from "react-bootstrap";
import { useState } from "react";
import { editAddress } from "../hooks/editAddress";

export const ModalEditAddress = ({ show, handleClose, Address }) => {
  const [street, setStreet] = useState(Address.street);
  const [city, setCity] = useState(Address.city);
  const [country, setCountry] = useState(Address.country);
  const [state, setState] = useState(Address.state);
  const [postalCode, setPostalCode] = useState(Address.postalCode);

  const fetchData = async () => {
    try {
      const addressData = {
        street,
        city,
        country,
        state,
        postalCode,
      };

      let data = await editAddress(addressData, Address.id);
      if (!data.status) {
        console.error("Error obteniendo los datos:", data.content);
      } 
    } catch (error) {
      console.error("Error obteniendo los datos:", error);
    } finally{
        handleClose()
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Editar Direccion</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form className="p-4">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Pais
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              Departamento
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="postalCode" className="form-label">
              Codigo Postal
            </label>
            <input
              type="text"
              className="form-control"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="street" className="form-label">
              Direccion de hogar
            </label>
            <input
              type="text"
              className="form-control"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <button
          type="button"
          className="btn btn-secondary "
          onClick={handleClose}
        >
          CERRAR
        </button>
        <button type="submit" className="btn btn-warning" onClick={fetchData}>
          EDITAR
        </button>
      </Modal.Footer>
    </Modal>
  );
};
