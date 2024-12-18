import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getStudentById } from "../hooks/getStudentById";
import { ModalEditAddress } from "./ModalEditAddress";

import { editStudent } from "../hooks/editStudent";

export const StudentCard = () => {
  const [showModalEditAddres, setShowModalEditAddres] = useState(false);
  const [studentData, setStudentData] = useState({});
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [averageMark, setAverageMark] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getStudentData = async () => {
    try {
      const data = await getStudentById(id);
      if (data.status) {
        setStudentData(data.content.student);
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
    getStudentData();
  }, []);

  useEffect(() => {
    if (studentData) {
      setName(studentData.name || "");
      setPhoneNumber(studentData.phoneNumber || "");
      setEmailAddress(studentData.emailAddress || "");
      setStudentNumber(studentData.studentNumber || "");
      setAverageMark(studentData.averageMark || 0);
    }
  }, [studentData]);

  const handleSave = async () => {
    try {
      const updatedStudent = {
        name,
        phoneNumber,
        emailAddress,
        studentNumber,
        averageMark,
        address: { id: studentData.address.id },
      };
      let data = await editStudent(updatedStudent, id);
      if (!data.status) {
        alert(data.content.message);
      } else {
        alert("Datos actualizados correctamente.");
        getStudentData()
      }

    } catch (error) {
      console.error("Error obteniendo los datos:", error);
      alert("Hubo un error al actualizar los datos");
    }
  };

  if (isLoading) {
    return (
      <div className="text-center mt-5">Cargando datos del estudiante...</div>
    );
  }

  if (!studentData) {
    return (
      <div className="text-center mt-5">
        No se encontraron datos del estudiante
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
          <h3>Editar Estudiante</h3>
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
              type="text"
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
            <label htmlFor="studentNumber" className="form-label">
              Numero de Estudiante
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
          <div className="mb-3">
            <label htmlFor="averageMark" className="form-label">
              Nota Promedio
            </label>
            <input
              type="number"
              className="form-control"
              id="averageMark"
              value={averageMark}
              min="0"
              max="5"
              required
              step="0.1"
              onChange={(e) => setAverageMark(e.target.value)}
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
        Address={studentData.address}
      />
    </div>
  );
};
