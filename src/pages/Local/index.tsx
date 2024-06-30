import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Table, Menu, Dropdown, Modal, Button, Breadcrumb } from 'antd';
import {
  SearchOutlined,
  MoreOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import {
  StyledLayout,
  StyledContent,
  HeaderTitle,
  HeaderSubtitle,
  StyledCard,
  SearchContainer,
  SearchInput,
  AddButton,
  CustomEmptyText,
  BreadcrumbContainer,
} from './styles';

import AppHeader from '../../components/header';

import { useLocalStore } from '../../store/local';

import { getLocais, deleteLocal } from '../../services/local';

import { Gate, Local } from './types/local';

const { confirm } = Modal;

const Locais = () => {
  const navigate = useNavigate();
  const {
    searchTerm,
    locaisData,
    setLocaisData,
    setLocalEdit,
    setSearchTerm,
    setGates,
    setTicketGates,
  } = useLocalStore();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(5);

  useEffect(() => {
    const fetchLocais = async () => {
      try {
        const data = await getLocais();
        setLocaisData(data);
      } catch (error) {
        console.error('Erro ao buscar locais:', error);
      }
    };

    fetchLocais();
  }, [setLocaisData]);

  const items = [
    {
      key: '1',
      label: <Menu.Item key="edit">Editar</Menu.Item>,
    },
    {
      key: '2',
      label: <Menu.Item key="delete">Apagar</Menu.Item>,
    },
  ];

  const LabelDataLocations = [
    {
      title: 'Nome do Local',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Endereço',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Cidade e Estado',
      dataIndex: 'cityState',
      key: 'cityState',
      render: (_: any, record: Local) => `${record.city}, ${record.state}`,
    },
    {
      title: 'Portões Cadastrados',
      dataIndex: 'gates',
      key: 'gates',
      render: (gates: Gate[]) => gates.map((gate) => gate.name).join(', '),
    },

    {
      dataIndex: 'action',
      key: 'action',
      render: (_text: string, record: Local) => (
        <Dropdown
          menu={{ items, onClick: ({ key }) => handleMenuClick(key, record) }}
          trigger={['click']}
        >
          <Button
            type="text"
            icon={<MoreOutlined style={{ color: '#1890ff' }} />}
          />
        </Dropdown>
      ),
    },
  ];

  const filteredData = Array.isArray(locaisData)
    ? locaisData.filter(
        (local) =>
          local.name &&
          local.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  const paginationConfig = {
    current: currentPage,
    pageSize: pageSize,
    onChange: (page: number) => {
      setCurrentPage(page);
    },
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

  const handleMenuClick = (key: string, record: Local) => {
    if (key === '1') {
      setLocalEdit(record);
      navigate(`/newLocal/${record.id}`);
    } else if (key === '2') {
      showDeleteConfirm(record.id);
    }
  };

  const handleNavigateNewLocal = () => {
    setGates([]);
    setTicketGates([]);
    navigate('/newLocal');
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteLocal(id);
      const updatedLocais = locaisData.filter((local) => local.id !== id);
      setLocaisData(updatedLocais);
    } catch (error) {
      console.error('Erro ao deletar local:', error);
    }
  };

  return (
    <StyledLayout>
      <AppHeader />
      <StyledContent>
        <BreadcrumbContainer>
          <Breadcrumb.Item>
            <a href="/">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/locais">Locais</a>
          </Breadcrumb.Item>
        </BreadcrumbContainer>
        <div style={{ marginBottom: '25px' }}>
          <HeaderTitle>Locais</HeaderTitle>
          <HeaderSubtitle>
            Confira a lista de todos os locais cadastrados
          </HeaderSubtitle>
        </div>
        <Col>
          <StyledCard>
            <SearchContainer>
              <SearchInput
                placeholder="Pesquise por nome do local"
                prefix={<SearchOutlined />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <AddButton type="primary" onClick={handleNavigateNewLocal}>
                Adicionar Local
              </AddButton>
            </SearchContainer>
            <Table
              columns={LabelDataLocations}
              dataSource={filteredData}
              pagination={paginationConfig}
              locale={{
                emptyText: (
                  <CustomEmptyText>Nenhum resultado encontrado</CustomEmptyText>
                ),
              }}
            />
          </StyledCard>
        </Col>
      </StyledContent>
    </StyledLayout>
  );
};

export default Locais;
