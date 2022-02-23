import React from "react"
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import { FormPage } from "./pages/FormPage"
import { WaitingRoomPage } from "./pages/WaitingRoomPage"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FormPage />}></Route>
        <Route exact path="/waitting" element={<WaitingRoomPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
