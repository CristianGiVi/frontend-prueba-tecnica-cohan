import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-dark shadow-sm">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-light mx-2"
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-light mx-2"
                onClick={() => navigate("/students-page")}
              >
                Estudiantes
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-light mx-2"
                onClick={() => navigate("/professors-page")}
              >
                Profesores
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
