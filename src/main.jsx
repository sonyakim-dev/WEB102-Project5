import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavBar from "./routers/NavBar";
import Detail from "./routers/Detail";
import Analysis from "./routers/Analysis";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" index element={<App />} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path="/analysis" element={<Analysis/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
