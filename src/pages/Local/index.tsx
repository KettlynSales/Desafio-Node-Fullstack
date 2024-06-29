import { useEffect, useState } from "react";
import { Layout, Col, Card, Table, Button, Input, Menu, Dropdown, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { SearchOutlined, MoreOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import AppHeader from "../../components/header";
import { useLocalStore } from '../../store/local';
import { Gate, Local } from './types/local';
import { CustomEmptyText } from './styles'; 
import { getLocais, deleteLocal } from '../../services/local'; // Importe o serviço para obter locais

const { Content } = Layout;
const { confirm } = Modal;

const Locais = () => {
  const navigate = useNavigate();
  const { searchTerm, locaisData, setLocaisData, setSearchTerm } = useLocalStore();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5); 

  useEffect(() => {
    const fetchLocais = async () => {
      try {
        const data = await getLocais();
        setLocaisData(data);
      } catch (error) {
        console.error("Erro ao buscar locais:", error);
      }
    };

    fetchLocais();
  }, [setLocaisData])

  const handleMenuClick = (e: any, record: Local) => {
    if (e.key === "edit") {
      navigate(`/edit/${record.id}`);
    } else if (e.key === "delete") {
      showDeleteConfirm(record.id);
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
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Endereço",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Cidade e Estado",
      dataIndex: "cityState",
      key: "cityState",
      render: (_: any, record: Local) => `${record.city}, ${record.state}`,
    },
    {
      title: "Portões Cadastrados",
      dataIndex: "gates",
      key: "gates",
      render: (gates: Gate[]) => gates.map(gate => gate.name).join(', '),
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

  const filteredData = Array.isArray(locaisData) ? locaisData.filter((local) =>
    local.name && local.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

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

  const showDeleteConfirm = (id: string) => {
    confirm({
      title: 'Tem certeza que deseja apagar este local?',
      icon: <ExclamationCircleOutlined />,
      content: 'Esta ação não pode ser desfeita.',
      okText: 'Sim',
      okType: 'danger',
      cancelText: 'Cancelar',
      onOk() {
        handleDelete(id);
      },
      onCancel() {
        console.log('Cancelado');
      },
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteLocal(id);
      const updatedLocais = locaisData.filter(local => local.id !== id);
      setLocaisData(updatedLocais);
    } catch (error) {
      console.error("Erro ao deletar local:", error);
    }
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
