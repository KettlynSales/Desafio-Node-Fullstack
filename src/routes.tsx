import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/home";
import Events from "./pages/Event/events";
import Locations from "./pages/Local/locations";
import NewLocal from "./pages/Local/NewLocal";
import NewEvent from "./pages/Event/NewEvent";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/events", element: <Events /> },
  { path: "/locations", element: <Locations /> },
  { path: "/newLocal", element: <NewLocal /> },
  { path: "/newEvent", element: <NewEvent /> },
]);
