import { useState } from "react";
import { Layout, Col, Card, Table, Button, Input, Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
import AppHeader from "../../components/header";
import { useLocalStore } from '../../store/localStore';
import { Local } from './types/local';
import { CustomEmptyText } from './styles'; 

const { Content } = Layout;

const Locais = () => {
  const navigate = useNavigate();
  const { searchTerm, locaisData, setSearchTerm } = useLocalStore();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5); // Definindo o valor inicial de pageSize como 5

  const handleMenuClick = (e: any, record: Local) => {
    if (e.key === "edit") {
      navigate(`/edit/${record.key}`);
    } else if (e.key === "delete") {
      console.log("Apagar registro:", record.key);
    }
  };

  const menu = (record: Local) => (
    <Menu onClick={(e) => handleMenuClick(e, record)}>
      <Menu.Item key="edit">Editar</Menu.Item>
      <Menu.Item key="delete">Apagar</Menu.Item>
    </Menu>
  );

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

  const filteredData = locaisData.filter((local) =>
    local.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginationConfig = {
    current: currentPage,
    pageSize: pageSize,
    onChange: (page: number) => {
      setCurrentPage(page);
    }
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
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ color: "white", marginBottom: "35px" }}>
          Home / Locais
        </p>
        <div style={{ marginBottom: "25px" }}>
          <h1 style={{ color: "white", marginBottom: "5px" }}>Locais</h1>
          <p style={{ color: "white" }}>
            Confira a lista de todos os locais cadastrados
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
                placeholder="Pesquise por nome do local"
                prefix={<SearchOutlined />}
                style={{ width: "30%" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <Button
                type="primary"
                onClick={handleNavigateNewLocal}
                style={{
                  backgroundColor: "#CAD6EC",
                  color: "black",
                  borderWidth: 0,
                }}
              >
                Adicionar Local
              </Button>
            </div>
            <Table
              columns={LabelDataLocations}
              dataSource={filteredData}
              pagination={paginationConfig}
              locale={{ emptyText: <CustomEmptyText>Nenhum resultado encontrado</CustomEmptyText> }} // Usando o componente estilizado
            />
          </Card>
        </Col>
      </Content>
    </Layout>
  );
};

export default Locais;
