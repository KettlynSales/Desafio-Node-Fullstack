import { useState } from "react";
import { Layout, Col, Card, Table, Button, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";

import { SearchOutlined } from "@ant-design/icons";

import AppHeader from "../components/header";

const { Content } = Layout;

type Local = {
  key: string;
  title: string;
  address: string;
  cep: string;
  gates: string;
  update: string;
};

const Locations = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10); // Define quantos itens por página

  const LabelDataLocations = [
    {
      title: "Nome do Local",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Endereço",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Cidade e Estado",
      dataIndex: "cep",
      key: "cep",
    },
    {
      title: "Portões Cadastrados",
      dataIndex: "gates",
      key: "gates",
    },
    {
      title: "Atualização",
      dataIndex: "update",
      key: "update",
    },
  ];
  const locaisData: Local[] = [
    {
      key: "1",
      title: "Morumbi",
      address: "Avenida Francisco Morato, 1000",
      cep: "São Paulo, SP",
      gates: "C.D.E.F.G.H.I.J.K",
      update: "05/10/2023",
    },
    {
      key: "2",
      title: "Allianz Parque",
      address: "Avenida Francisco Matarazzo, 1705",
      cep: "São Paulo, SP",
      gates: "C.D.E.F.G.H.I.J.K",
      update: "05/10/2023",
    },
    {
      key: "3",
      title: "Neo Química Arena",
      address: "Avenida Miguel Inácio Curi, 111",
      cep: "São Paulo, SP",
      gates: "C.D.E.F.G.H.I.J.K",
      update: "05/10/2023",
    },
    {
      key: "4",
      title: "Neo Química Arena",
      address: "Avenida Miguel Inácio Curi, 111",
      cep: "São Paulo, SP",
      gates: "C.D.E.F.G.H.I.J.K",
      update: "05/10/2023",
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

  const handleNavigateNewLocal = () => {
    navigate("/newLocal");
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
          <h1 style={{ color: "white" }}>ola mariana</h1>
          <p style={{ color: "white" }}>
            Confira a lista de todos os locais cadastrados
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
            <Button type="primary" onClick={handleNavigateNewLocal}>
              Adicionar Local
            </Button>
            <Table
              columns={LabelDataLocations}
              dataSource={locaisData}
              pagination={paginationConfig} // Adicionando configuração de paginação
            />
          </Card>
        </Col>
      </Content>
    </Layout>
  );
};

export default Locations;
