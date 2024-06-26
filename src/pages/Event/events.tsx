import { useState } from "react";
import { Layout, Col, Card, Table, Button, Input, Space, Tag } from "antd";
import { useNavigate } from "react-router-dom";

import { SearchOutlined } from "@ant-design/icons";

import AppHeader from "../../components/header";

const { Content } = Layout;

type Local = {
  key: string;
  title: string;
  address: string;
  local: string;
  gates: string;
  type: string;
  date: string;
};

const Events = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10); // Define quantos itens por página

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
        <Tag color={type === "Futebol" ? "green" : "blue"}>{type}</Tag>
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
  ];
  const eventsData: Local[] = [
    {
      key: "1",
      title: "Final Copa América",
      local: "Morumbi",
      type: "Futebol",
      address: "Avenida Miguel Inácio Curi, 111",
      gates: "C.D.E.F.G.H.I.J.K",
      date: "05/10/2023,",
    },
    {
      key: "2",
      title: "Semi Final Copa América",
      local: "Morumbi",
      type: "Futebol",
      address: "Avenida Miguel Inácio Curi, 111",
      gates: "C.D.E.F.G.H.I.J.K",
      date: "05/10/2023,",
    },
    {
      key: "3",
      title: "Love on tour - Harry Styles",
      local: "Morumbi",
      type: "Futebol",
      address: "Avenida Miguel Inácio Curi, 111",
      gates: "C.D.E.F.G.H.I.J.K",
      date: "05/10/2023,",
    },
  ];

  // Configurações de paginação
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

  const handleNavigateNewEvent = () => {
    navigate("/newEvent");
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#191E28" }}>
      <AppHeader />
      <Content
        style={{
          padding: "0 50px",
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <body style={{ color: "white" }}>Home / Locais</body>
        <div>
          <h1 style={{ color: "white" }}>Eventos</h1>
          <p style={{ color: "white" }}>
            Confira a lista de todos os eventos cadastrados
          </p>
        </div>
        <Col>
          <Card style={{ backgroundColor: "#10141D", borderWidth: 0 }}>
            <Space.Compact>
              <Input
                addonBefore={<SearchOutlined />}
                placeholder="Pesquise por nome do local"
                style={{ backgroundColor: "#333B49", borderColor: "#333B49" }}
              />
            </Space.Compact>
            <Button type="primary" onClick={handleNavigateNewEvent}>
              Adicionar evento
            </Button>
            <Table
              columns={LabelDataEvents}
              dataSource={eventsData}
              pagination={paginationConfig} // Adicionando configuração de paginação
            />
          </Card>
        </Col>
      </Content>
    </Layout>
  );
};

export default Events;
