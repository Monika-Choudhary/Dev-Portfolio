import { Route, Routes } from "react-router";
import MyProjects from "../features/pages/MyProjects";
import Contact from "../features/pages/Contact";
import AboutMe from "../features/pages/AboutMe";
import Home from "../features/pages/Home";
import ROUTES from "./RoutePaths";

function AllRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT_ME} element={<AboutMe />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.My_PROJECTS} element={<MyProjects />} />
    </Routes>
  );
}

export default AllRoutes;
