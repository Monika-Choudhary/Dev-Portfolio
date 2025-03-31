import { BrowserRouter } from "react-router";
import "./App.css";
import NavBar from "./navigation/NavBar";
import AllRoutes from "./routing/AllRoutes";
import SocialMediaLinks from "./components/SocialMediaLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <SocialMediaLinks />
          <AllRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
