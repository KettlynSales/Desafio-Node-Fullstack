import { Layout, Menu, Avatar } from "antd";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <img
        src={Logo}
        alt="Imagem ao lado do texto"
        style={{ height: "24px" }}
      />
      <Menu
        mode="horizontal"
        style={{
          background: "transparent",
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        <Menu.Item key="1">
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/events" style={{ color: "white" }}>
            Eventos
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/locations" style={{ color: "white" }}>
            Locais
          </Link>
        </Menu.Item>
      </Menu>
      <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
      <body>Olá, Nome</body>
    </Header>
  );
};

export default AppHeader;
