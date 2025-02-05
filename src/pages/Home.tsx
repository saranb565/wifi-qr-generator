import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="vh-100 bg-primary-subtle text-primary-emphasis p-4">
        <div className="d-flex p-2 justify-content-center mb-4 mt-4">
          <h1
            className="fw-bold mt-0"
            style={{ fontSize: 100, color: "white", marginBottom: 60 }}
          >
            QR Generator
          </h1>
        </div>

        <div className="d-flex justify-content-evenly">
          {/* For Wifi */}
          <button
            type="button"
            className="btn btn-primary btn-lg w-70"
            style={{
              fontSize: 40,
              padding: "100px 100px 100px 100px",
              borderRadius: "50px",
              minWidth: "100px",
            }}
            onClick={() => navigate("/wifi-qr")}
          >
            WiFi QR
          </button>

          {/* For url */}
          <button
            type="button"
            className="btn btn-success btn-lg w-70"
            style={{
              fontSize: 40,
              padding: "100px 100px 100px 100px",
              borderRadius: "50px",
              minWidth: "100px",
            }}
            onClick={() => navigate("/url-qr")}
          >
            Url QR
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
