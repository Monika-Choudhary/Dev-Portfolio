import { BrowserRouter } from "react-router";
import "./App.css";
import NavBar from "./navigation/NavBar";
import AllRoutes from "./routing/AllRoutes";
import SocialMediaLinks from "./components/SocialMediaLinks";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <SocialMediaLinks />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
