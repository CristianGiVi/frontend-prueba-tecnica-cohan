import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-dark shadow-sm">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-light mx-2"
                onClick={() => navigate("/")}
              >
                HOME
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-light mx-2"
                onClick={() => navigate("/students-page")}
              >
                ESTUDIANTES
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-light mx-2"
                onClick={() => navigate("/professors-page")}
              >
                PROFESORES
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
