import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbars from "./components/Navbars";
import AddEdit from "./components/Home/addEdit";
import Home from "./components/Home/Home";
import List from "./components/Home/List";

function App() {
  return (
    <div className="App">
      {" "}
      <Navbars></Navbars>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<AddEdit />} />
        <Route path="/edit/:id" element={<AddEdit></AddEdit>} />
      </Routes>
    </div>
  );
}

export default App;
