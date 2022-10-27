import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthRouter from "./authRouter";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthRouter />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="not-found" />} />
      </Routes>
    </div>
  );
}

export default App;
