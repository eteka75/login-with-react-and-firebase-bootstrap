import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import SignUpModale from "./Components/SignUpModale";

function App() {
  return (
    <>
    <SignUpModale/>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
     </>
  );
}

export default App;
