import { SetStateAction, useState } from "react";
import { useRef } from "react";
import QR from "../components/qr";
import html2canvas from "html2canvas";

function UrlQr() {
  const [text, setText] = useState("");
  const qrCodeRef = useRef(null);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setText(event.target.value);
    console.log(text);
  };

  const handleDownload = () => {
    if (qrCodeRef.current) {
      html2canvas(qrCodeRef.current).then((canvas) => {
        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = image;
        link.download = `${text}-qr.png`;
        link.click();
      });
    }
  };

  return (
    <>
      <div
        className="vh-100 bg-secondary-subtle text-primary-emphasis p-4 "
        style={{ backgroundColor: "var(--bs-saran-bg)" }}
      >
        <div
          className="input-group input-group-lg"
          style={{ width: 500, marginTop: 60, marginLeft: "30%" }}
        >
          <span className="input-group-text" id="inputGroup-sizing-lg">
            example.com
          </span>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="form-control w-50"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>

        {text && (
          <div>
            {" "}
            <div ref={qrCodeRef} style={{ width: "25%", marginLeft: "35%" }}>
              <QR value={`https://${text}`}></QR>
            </div>
            <br />
            <button
              type="button"
              className="btn btn-info"
              onClick={handleDownload}
              style={{
                fontSize: 25,
                marginTop: 50,
                marginLeft: "38%",
                paddingLeft: 80,
                paddingRight: 80,
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              Download
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default UrlQr;
