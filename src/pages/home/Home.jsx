import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="col-12 d-flex flex-column align-items-center">
          <div className="d-grid gap-2 mb-3 w-50">
            <button
              type="button"
              className="btn btn btn-info btn-lg"
              onClick={() => navigate("/students-page")}
            >
              ESTUDIANTES
            </button>
          </div>
          <div className="d-grid gap-2 w-50">
            <button
              type="button"
              className="btn btn btn-info btn-lg"
              onClick={() => navigate("/professors-page")}
            >
              PROFESORES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
