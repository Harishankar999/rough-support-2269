import "./App.css";
import Navbar from "./Component/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/signup" ||
      location.pathname === "/login" ? null : (
        <Navbar />
      )}
      <MainRoutes />
    </div>
  );
}

export default App;
