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
import { MoreOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AppHeader from "../../components/header";
import Doll from "../../assets/boneco.png";
import BackgroundImage from "../../assets/background.png";

const { Content } = Layout;

type Local = {
  key: string;
  title: string;
  address: string;
  details: string;
};

type Evento = {
  key: string;
  title: string;
  category: string;
  location: string;
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
      dataIndex: "title",
      key: "title",
    },
    {
      dataIndex: "address",
      key: "address",
    },
    {
      dataIndex: "details",
      key: "details",
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
      title: "Morumbi",
      address: "Avenida Francisco Morato, 1000",
      details: "C.D.E.F.G.H.I.J.K",
    },
    {
      key: "2",
      title: "Allianz Parque",
      address: "Avenida Francisco Matarazzo, 1705",
      details: "3,4,5,6,7,8,9,10",
    },
    {
      key: "3",
      title: "Neo Química Arena",
      address: "Avenida Miguel Inácio Curi, 111",
      details: "info@corinthians.com",
    },
  ];

  const eventosColumns = [
    {
      title: "Evento",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Categoria",
      dataIndex: "category",
      key: "category",
      render: (category: string) => (
        <Tag color={category === "Futebol" ? "green" : "blue"}>{category}</Tag>
      ),
    },
    {
      title: "Local",
      dataIndex: "location",
      key: "location",
    },
  ];

  const eventosData: Evento[] = [
    {
      key: "1",
      title: "Final Copa América",
      category: "Futebol",
      location: "Morumbi",
    },
    {
      key: "2",
      title: "Semi Final Copa América",
      category: "Futebol",
      location: "Morumbi",
    },
    {
      key: "3",
      title: "Love on tour - Harry Styles",
      category: "Show",
      location: "Morumbi",
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
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AppHeader />
      <Content
        style={{
          padding: "0 50px",
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
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
            <Card style={{ backgroundColor: "#2F3B28", color: "white" }}>
              <p>Locais</p>
              <p> Confira todos os locais cadastrados!</p>{" "}
              <Button type="primary" onClick={handleNavigateLocais}>
                Conferir locais
              </Button>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card style={{ backgroundColor: "#461527", color: "white" }}>
              <p>Eventos</p>
              <p> Confira todos os eventos cadastrados!</p>{" "}
              <Button type="primary" onClick={handleNavigateEventos}>
                Conferir eventos
              </Button>
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
