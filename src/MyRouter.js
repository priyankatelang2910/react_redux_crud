
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import {Home} from "./components/Home";
import {About} from "./components/About";
import { Add } from "./components/Add";
import { Edit } from "./components/Edit";

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
       
        </Route>
      </Routes>

    </BrowserRouter>
    
  );
}
