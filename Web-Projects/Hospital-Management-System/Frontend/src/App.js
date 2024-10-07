import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateDoctor from "./components/CreateDoctor";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route path="/create-doctor" element={<CreateDoctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
