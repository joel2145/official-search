import React from "react"
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import { SearchPage } from "./pages/SearchPage"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SearchPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
