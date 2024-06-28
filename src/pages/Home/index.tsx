import {
  Layout,
  Card,
  Button,
  Table,
  Tag,
  Row,
  Col,
  Menu,
  Dropdown,
} from "antd";
import { MoreOutlined, HomeOutlined, CalendarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AppHeader from "../../components/header";
import Doll from "../../assets/boneco.png";
import BackgroundImage from "../../assets/background.jpg";

const { Content } = Layout;

type Local = {
  key: string;
  localName: string;
  address: string;
  gates: string;
};

type Evento = {
  key: string;
  eventName: string;
  category: string;
  local: string;
};

const Home = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e: any, record: Local) => {
    if (e.key === "edit") {
      // Navegar para a página de edição com os detalhes do registro
      navigate(`/edit/${record.key}`);
    } else if (e.key === "delete") {
      // Lógica para apagar o registro
      console.log("Apagar registro:", record.key);
    }
  };

  const menu = (record: Local) => (
    <Menu onClick={(e) => handleMenuClick(e, record)}>
      <Menu.Item key="edit">Editar</Menu.Item>
      <Menu.Item key="delete">Apagar</Menu.Item>
    </Menu>
  );

  const locaisColumns = [
    {
      title: "Local",
      dataIndex: "localName",
      key: "localName",
    },
    {
      title: "Endereço",
      dataIndex: "address",
      key: "address",
    },
    {
      title: 'Portões',
      dataIndex: "gates",
      key: "gates",
    },
    {
      dataIndex: "action",
      key: "action",
      render: (text: any, record: Local) => (
        <Dropdown overlay={menu(record)} trigger={["click"]}>
          <Button
            type="text"
            icon={<MoreOutlined style={{ color: "#1890ff" }} />}
          />
        </Dropdown>
      ),
    },
  ];

  const locaisData: Local[] = [
    {
      key: "1",
      localName: "Morumbi",
      address: "Avenida Francisc...",
      gates: "C.D.E.F.G.H.I.J.K",
    },
    {
      key: "2",
      localName: "Allianz Parque",
      address: "Avenida Francisc...",
      gates: "3,4,5,6,7,8,9,10",
    },
    {
      key: "3",
      localName: "Neo Química Arena",
      address: "Avenida Francisc...",
      gates: "info@corinthians.com",
    },
  ];

  const eventosColumns = [
    {
      title: "Evento",
      dataIndex: "eventName",
      key: "eventName",
    },
    {
      title: "Categoria",
      dataIndex: "category",
      key: "category",
      render: (category: string) => (
        <Tag style={{color: category === "Futebol" ? "#000" : "#fff"}} color={category === "Futebol" ? "#CAD6EC" : "#61461F"}>{category}</Tag>
      ),
    },
    {
      title: "Local",
      dataIndex: "local",
      key: "local",
    },
    {
      dataIndex: "action",
      key: "action",
      render: (text: any, record: Local) => (
        <Dropdown overlay={menu(record)} trigger={["click"]}>
          <Button
            type="text"
            icon={<MoreOutlined style={{ color: "#1890ff" }} />}
          />
        </Dropdown>
      ),
    },
  ];

  const eventosData: Evento[] = [
    {
      key: "1",
      eventName: "Final Copa América",
      category: "Futebol",
      local: "Morumbi",
    },
    {
      key: "2",
      eventName: "Semi Final Copa América",
      category: "Futebol",
      local: "Morumbi",
    },
    {
      key: "3",
      eventName: "Love on tour - Harry Styles",
      category: "Show",
      local: "Morumbi",
    },
   
   
  ];

  const handleNavigateLocais = () => {
    navigate("/locations");
  };

  const handleNavigateEventos = () => {
    navigate("/events");
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Ajuste a opacidade aqui
          zIndex: 1,
        }}
      />
      <AppHeader />
      <Content
        style={{
          padding: "0 50px",
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <img
            src={Doll}
            alt="Imagem ao lado do texto"
            style={{ marginRight: "20px", maxWidth: "200px", height: "auto" }}
          />
          <div>
            <h1 style={{ color: "white" }}>Olá, Mariana</h1>
            <p style={{ color: "white" }}>
              Confira todos os seus eventos e locais em um só lugar!
            </p>
          </div>
        </div>
        <Row gutter={[16, 16]} style={{ width: "100%", marginBottom: "16px" }}>
          <Col xs={24} md={12}>
            <Card
              style={{
                backgroundColor: "#2F3B28",
                color: "white",
                borderWidth: 0,
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <HomeOutlined style={{ fontSize: 28, marginRight: 10 }} />
                    <h1 style={{ fontSize: 28, color: "white", margin: 0 }}>
                      Locais
                    </h1>
                  </div>
                  <div>
                    <p style={{ margin: 0 }}>
                      Confira todos os locais cadastrados!
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    type="primary"
                    onClick={handleNavigateLocais}
                    style={{
                      backgroundColor: "#CAD6EC",
                      color: "black",
                      borderWidth: 0,
                    }}
                  >
                    Conferir locais
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              style={{
                backgroundColor: "#461527",
                color: "white",
                borderWidth: 0,
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CalendarFilled style={{ fontSize: 28, marginRight: 10 }} />
                    <h2 style={{ fontSize: 28, color: "white", margin: 0 }}>
                      Eventos
                    </h2>
                  </div>
                  <div>
                    <p style={{ margin: 0 }}>
                      Confira todos os eventos cadastrados!
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    type="primary"
                    onClick={handleNavigateEventos}
                    style={{
                      backgroundColor: "#CAD6EC",
                      color: "black",
                      borderWidth: 0,
                    }}
                  >
                    Conferir eventos
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ width: "100%" }}>
          <Col xs={24} md={12}>
            <Card
              title="Últimos locais adicionados"
              extra={
                <a href="#" onClick={handleNavigateLocais}>
                  Ver todos
                </a>
              }
              
            >
              <Table
                columns={locaisColumns}
                dataSource={locaisData}
                pagination={false}

              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title="Últimos eventos adicionados"
              extra={
                <a href="#" onClick={handleNavigateEventos}>
                  Ver todos
                </a>
              }
            >
              <Table
                columns={eventosColumns}
                dataSource={eventosData}
                pagination={false}


              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
