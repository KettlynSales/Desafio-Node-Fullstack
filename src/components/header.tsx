import { Layout, Menu, Avatar, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
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
        position: "relative",
        zIndex: 2
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
          marginLeft: '65px',
          marginTop: '6px'

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
          <Link to="/locais" style={{ color: "white" }}>
            Locais
          </Link>
        </Menu.Item>
      </Menu>
      <Row align="middle" gutter={8} style={{ color: '#fff' }}>
        <Col>
          <Avatar style={{ backgroundColor: "#9ED0E6", color: "#000" }}>TA</Avatar>
        </Col>
        <Col>
          <p style={{ margin: 0 }}>Olá, Nome</p>
        </Col>
        <Col>
          <DownOutlined />
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
