import React from "react";
import TableWarga from "./component/table/table.jsx";
import DetailTable from "./component/table/detailTable.jsx";
import Home from "./component/home/home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/table" element={<TableWarga />}/>
        <Route path="/table/detailTable" element={<DetailTable />}/>
      </Routes>
    </Router>
  );
}

export default App;
