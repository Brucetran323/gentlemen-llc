import "./styles/globals.css"
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Toaster containerClassName="mt-14" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
