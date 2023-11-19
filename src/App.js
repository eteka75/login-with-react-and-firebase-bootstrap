import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import SignUpModale from "./Components/SignUpModale";
import Private from "./pages/Private/Private";
import Dashboard from "./pages/Private/PrivateHome/Dashboard";
import SignInModale from "./Components/SignInModale";

function App() {
  return (
    <>
    <SignUpModale/>
    <SignInModale />
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/private" element={ <Private /> } >
          <Route path="/private/dashboard" element={ <Dashboard /> } />
        </Route>
      </Routes>
     </>
  );
}

export default App;
