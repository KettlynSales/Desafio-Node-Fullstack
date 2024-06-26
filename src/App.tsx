import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import GlobalStyle from "../src/globalStyles";

export function App() {
  return (
    <>
      {" "}
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
