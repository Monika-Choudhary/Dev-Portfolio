import { BrowserRouter } from "react-router";
import "./App.css";
import NavBar from "./navigation/NavBar";
import AllRoutes from "./routing/AllRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
