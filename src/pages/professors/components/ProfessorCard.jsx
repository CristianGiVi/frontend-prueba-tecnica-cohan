import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getProfessorById } from "../hooks/getProfessorById";
import { ModalEditAddress } from "./ModalEditAddress";
import { editProfessor } from "../hooks/editProfessor";

export const ProfessorCard = () => {
    const [showModalEditAddres, setShowModalEditAddres] = useState(false);
    const [professorData, setProfessorData] = useState({});
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [salary, setSalary] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
  
    const { id } = useParams();

  const getProfessorData = async () => {
    try {
      const data = await getProfessorById(id);
      if (data.status) {
        setProfessorData(data.content.professor);
      } else {
        console.error("Error obteniendo los datos:", data.content);
      }
    } catch (error) {
      console.error("Error obteniendo los datos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
      getProfessorData();
    }, []);
  
    useEffect(() => {
      if (professorData) {
        setName(professorData.name || "");
        setPhoneNumber(professorData.phoneNumber || "");
        setEmailAddress(professorData.emailAddress || "");
        setSalary(professorData.salary || 0);
      }
    }, [professorData]);
  
    const handleSave = async () => {
      try {
        const updatedProfessor = {
          name,
          phoneNumber,
          emailAddress,
          salary,
          address: { id: professorData.address.id },
        };
        let data = await editProfessor(updatedProfessor, id);
        if (!data.status) {
          alert(data.content.message);
        } else {
          alert("Datos actualizados correctamente.");
          getProfessorData()
        }
  
      } catch (error) {
        console.error("Error obteniendo los datos:", error);
        alert("Hubo un error al actualizar los datos");
      }
    };
  
    if (isLoading) {
      return (
        <div className="text-center mt-5">Cargando datos del profesor...</div>
      );
    }
  
    if (!professorData) {
      return (
        <div className="text-center mt-5">
          No se encontraron datos del profesor
        </div>
      );
    }
  
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
      >
        <div
          className="card shadow-lg p-3 mb-5 bg-white rounded"
          style={{ width: "30rem" }}
        >
          <div className="card-header bg-primary text-white text-center">
            <h3>Editar profesor</h3>
          </div>
          <form
            className="p-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            <div className="mb-3">
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
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Celular
              </label>
              <input
                type="number"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="emailAddress"
                value={emailAddress}
                required
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => {
                  setShowModalEditAddres(true);
                }}
              >
                EDITAR DIRECCION
              </button>
            </div>
            <div className="mb-3">
              <label htmlFor="salary" className="form-label">
                Salario
              </label>
              <input
                type="number"
                className="form-control"
                id="salary"
                value={salary}
                min="100"
                required
                step="0.1"
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              GUARDAR CAMBIOS
            </button>
          </form>
        </div>
  
        {/* Modal para editar la direccion */}
        <ModalEditAddress
          show={showModalEditAddres}
          handleClose={() => setShowModalEditAddres(false)}
          Address={professorData.address}
        />
      </div>
    );
  };
  