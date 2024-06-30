import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Event";
import Locais from "./pages/Local";
import NewLocal from "./pages/Local/NewLocal";
import NewEvent from "./pages/Event/NewEvent";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/events", element: <Events /> },
  { path: "/locais", element: <Locais /> },
  { path: "/newLocal", element: <NewLocal /> },
  { path: "/newEvent", element: <NewEvent /> },
  { path: "/newLocal/:id", element: <NewLocal /> },
  { path: "/newEvent/:id", element: <NewEvent /> },

]);
