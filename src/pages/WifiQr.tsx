import { useState, useRef } from "react";
import QR from "../components/qr";
import html2canvas from "html2canvas";

function WifiQr() {
  // State to store SSID, Password, and Encryption
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [enc, setEnc] = useState("WPA2");
  const [text, setText] = useState("");
  const qrCodeRef = useRef<HTMLDivElement>(null);

  // Function to generate Wi-Fi QR string
  const handlewifi = () => {
    if (!ssid) {
      alert("Please enter Wi-Fi name (SSID)");
      return;
    }
    const qrString = `WIFI:T:${enc};S:${ssid};P:${password};;`;
    setText(qrString);
    console.log("Generated QR String:", qrString);
  };

  // Function to download the QR code as an image
  const handleDownload = () => {
    if (qrCodeRef.current) {
      html2canvas(qrCodeRef.current).then((canvas) => {
        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = image;
        link.download = `${ssid}-qr.png`;
        link.click();
      });
    }
  };

  return (
    <>
      <div className="vh-100 bg-secondary-subtle text-primary-emphasis p-4">
        <div
          className="input-group input-group-lg"
          style={{ width: 500, marginTop: 60, marginLeft: "30%" }}
        >
          <div className="input-group input-group-lg mb-3">
            <span className="input-group-text">Wi-Fi Name</span>
            <input
              type="text"
              className="form-control"
              placeholder="Wi-Fi SSID"
              value={ssid}
              onChange={(e) => setSsid(e.target.value)}
            />
          </div>

          <div className="input-group input-group-lg mb-3">
            <span className="input-group-text">Password</span>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group input-group-lg mb-3">
            <span className="input-group-text">Encryption</span>
            <input
              type="text"
              className="form-control"
              placeholder="Encryption"
              value={enc}
              onChange={(e) => setEnc(e.target.value)}
            />
          </div>
        </div>

        <div
          className="d-flex flex-row mb-3 justify-content-center"
          style={{ marginRight: 100 }}
        >
          <div className="p-2">
            <button type="button" className="btn btn-dark" onClick={handlewifi}>
              Generate QR
            </button>
          </div>

          <div className="p-2">
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleDownload}
              style={{
                fontSize: 15,
                marginTop: 0,
                marginLeft: "38%",
                paddingLeft: 30,
                paddingRight: 30,
              }}
            >
              Download
            </button>
          </div>
        </div>

        {text && (
          <div>
            <div ref={qrCodeRef} style={{ width: "25%", marginLeft: "35%" }}>
              <QR value={text} />
            </div>
            <br />
          </div>
        )}
      </div>
    </>
  );
}

export default WifiQr;
