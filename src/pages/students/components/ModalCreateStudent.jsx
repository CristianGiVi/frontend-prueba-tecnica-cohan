import { Modal } from "react-bootstrap";
import { useState } from "react";

import { createAddress } from "../hooks/createAddress";
import { createStudent } from "../hooks/createStudent";
import { deleteAddressById } from "../hooks/DeleteAddressById";


export const ModalCreateStudent = ({ show, handleClose }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [averageMark, setAverageMark] = useState(0);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSave = async () => {
    try {
      const addressData = {
        street,
        city,
        country,
        state,
        postalCode,
      };


      let dataAddress = await createAddress(addressData);
      if (dataAddress.status) {
        const studentData = {
            name,
            phoneNumber,
            emailAddress,
            studentNumber,
            averageMark,
            address: { id: dataAddress.content.address.id},
          };

          let dataStudent = await createStudent(studentData);
          if (!dataStudent.status) {
            await deleteAddressById(dataAddress.content.address.id);
            console.error("Error obteniendo los datos del estudiante:", dataStudent.content);
          }

          handleClose();

      } else {
        console.error("Error obteniendo los datos de la direccion:", dataAddress.content);
      }

      
    } catch (error) {
      console.error("Error obteniendo los datos:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Añadir estudiante</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form
          className="p-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phoneNumber" className="form-label">
                Numero de celular
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="emailAddress" className="form-label">
                Correo
              </label>
              <input
                type="text"
                className="form-control"
                id="emailAddress"
                value={emailAddress}
                required
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="studentNumber" className="form-label">
                Numero de estudiante
              </label>
              <input
                type="text"
                className="form-control"
                id="studentNumber"
                value={studentNumber}
                required
                onChange={(e) => setStudentNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="averageMark" className="form-label">
                Calificacion promedio
              </label>
              <input
                type="number"
                className="form-control"
                id="averageMark"
                value={averageMark}
                required
                min="0"
                max="5"
                step="0.1"
                onChange={(e) => setAverageMark(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="country" className="form-label">
                Pais
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="state" className="form-label">
                Departamento
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                value={state}
                required
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">
                Ciudad
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="postalCode" className="form-label">
                Codigo Postal
              </label>
              <input
                type="text"
                className="form-control"
                id="postalCode"
                value={postalCode}
                required
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="street" className="form-label">
                Direccion de hogar
              </label>
              <input
                type="text"
                className="form-control"
                id="street"
                value={street}
                required
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex justify-content-around">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              CERRAR
            </button>
            <button type="submit" className="btn btn-success">
              GUARDAR
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
