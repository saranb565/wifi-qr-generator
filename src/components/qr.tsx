import React from "react";
import QRCode from "react-qr-code";

const QR = (props: { value: string }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <QRCode value={props.value} size={300} />
    </div>
  );
};

export default QR;
