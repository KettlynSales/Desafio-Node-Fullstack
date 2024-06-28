import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import GlobalStyle from "./styles/globalStyles";
import { ConfigProvider } from "antd";
import { AntDesignTheme } from "./styles/antDesignStyles";

export function App() {
  return (
    <ConfigProvider theme={AntDesignTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
