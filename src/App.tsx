import QR from "./components/qr";
import Home from "./pages/Home";
import UrlQr from "./pages/UrlQr";
import WifiQr from "./pages/WifiQr";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/url-qr" element={<UrlQr />}></Route>
          <Route path="/wifi-qr" element={<WifiQr />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
