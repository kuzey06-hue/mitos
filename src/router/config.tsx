import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Expertise from "../pages/expertise/page";
import Projects from "../pages/projects/page";
import ProjectDetail from "../pages/projects/detail/page";
import Research from "../pages/research/page";
import Lab from "../pages/lab/page";
import Collections from "../pages/collections/page";
import Contact from "../pages/contact/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/expertise",
    element: <Expertise />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetail />,
  },
  {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/lab",
    element: <Lab />,
  },
  {
    path: "/collections",
    element: <Collections />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
