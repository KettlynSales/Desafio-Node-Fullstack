import { useState } from "react";
import { Layout, Col, Card, Table, Button, Input, Space, Tag, Menu, Dropdown } from "antd";
import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AppHeader from "../../components/header";
import useEventsStore from "../../store/eventStore";
import { Event } from "./types/event";
import { CustomEmptyText } from './styles'; 

const { Content } = Layout;

const Events = () => {
  const navigate = useNavigate();
  const { events, searchTerm, setSearchTerm } = useEventsStore((state) => ({
    events: state.events,
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);



  const handleMenuClick = (e: any, record: Event) => {
    if (e.key === "edit") {
      navigate(`/edit/${record.key}`);
    } else if (e.key === "delete") {
      console.log("Apagar registro:", record.key);
    }
  };

  const menu = (record: Event) => (
    <Menu onClick={(e) => handleMenuClick(e, record)}>
      <Menu.Item key="edit">Editar</Menu.Item>
      <Menu.Item key="delete">Apagar</Menu.Item>
    </Menu>
  );

 

  const LabelDataEvents = [
    {
      title: "Evento",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Tipo",
      dataIndex: "type",
      key: "type",
      render: (type: string) => (
        <Tag style={{color: type === "Futebol" ? "#000" : "#fff"}} color={type === "Futebol" ? "#CAD6EC" : "#61461F"}>{type}</Tag>
      ),
    },
    {
      title: "Local associado",
      dataIndex: "local",
      key: "local",
    },
    {
      title: "Endereço",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Portões cadastrados",
      dataIndex: "gates",
      key: "gates",
    },
    {
      title: "Data",
      dataIndex: "date",
      key: "date",
    },
    {
      dataIndex: "action",
      key: "action",
      render: (text: any, record: Event) => (
        <Dropdown overlay={menu(record)} trigger={["click"]}>
          <Button
            type="text"
            icon={<MoreOutlined style={{ color: "#1890ff" }} />}
          />
        </Dropdown>
      ),
    },
  ];

  const handleNavigateNewEvent = () => {
    navigate("/newEvent");
  };

  // Filtragem dos eventos com base no termo de pesquisa
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginationConfig = {
    current: currentPage,
    pageSize: pageSize,
    onChange: (page: number, pageSize?: number) => {
      setCurrentPage(page);
    },
    onShowSizeChange: (current: number, size: number) => {
      setPageSize(size);
    },
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#191E28" }}>
      <AppHeader />
      <Content
        style={{
          padding: "0 50px",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ color: "white", marginBottom: "35px" }}>Home / Eventos</p>
        <div style={{ marginBottom: "25px" }}>
          <h1 style={{ color: "white", marginBottom: "5px" }}>Eventos</h1>
          <p style={{ color: "white" }}>
            Confira a lista de todos os eventos cadastrados
          </p>
        </div>
        <Col>
          <Card>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              <Input
                placeholder="Pesquise por nome do evento"
                prefix={<SearchOutlined />}
                style={{ width: "30%" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                type="primary"
                onClick={handleNavigateNewEvent}
                style={{
                  backgroundColor: "#CAD6EC",
                  color: "black",
                  borderWidth: 0,
                }}
              >
                Adicionar Evento
              </Button>
            </div>
            <Table
              columns={LabelDataEvents}
              dataSource={filteredEvents}
              pagination={paginationConfig}
              locale={{ emptyText: <CustomEmptyText>Nenhum resultado encontrado</CustomEmptyText> }}
            />
          </Card>
        </Col>
      </Content>
    </Layout>
  );
};

export default Events;
