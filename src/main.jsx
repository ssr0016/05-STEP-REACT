import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppV1 from "./Appv1.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <AppV1 />
  </StrictMode>,
);
