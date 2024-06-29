import { useEffect, useState } from 'react';
import {
  Layout,
  Col,
  Card,
  Table,
  Button,
  Input,
  Tag,
  Menu,
  Dropdown,
  Modal,
} from 'antd';
import {
  SearchOutlined,
  MoreOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../../components/header';
import { useEventStore } from '../../store/event';
import { Event } from './types/event';
import { CustomEmptyText } from './styles';
import { getEvents } from '../../services/event';

const { Content } = Layout;
const { confirm } = Modal;

const Events = () => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm, eventsData, setEventsData } =
    useEventStore();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEventsData(data);
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    };

    fetchEvents();
  }, [setEventsData]);

  const handleMenuClick = (e: any, record: Event) => {
    if (e.key === 'edit') {
      navigate(`/edit/${record.id}`);
    } else if (e.key === 'delete') {
      showDeleteConfirm(record.id);
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
      title: 'Evento',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tipo',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => (
        <Tag
          style={{ color: type === 'Futebol' ? '#000' : '#fff' }}
          color={type === 'Futebol' ? '#CAD6EC' : '#61461F'}
        >
          {type}
        </Tag>
      ),
    },
    {
      title: 'Local associado',
      dataIndex: 'localId',
      key: 'localId',
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
    },
    {
      dataIndex: 'action',
      key: 'action',
      render: (text: any, record: Event) => (
        <Dropdown overlay={menu(record)} trigger={['click']}>
          <Button
            type="text"
            icon={<MoreOutlined style={{ color: '#1890ff' }} />}
          />
        </Dropdown>
      ),
    },
  ];

  const handleNavigateNewEvent = () => {
    navigate('/newEvent');
  };

  const filteredEvents = Array.isArray(eventsData)
    ? eventsData.filter(
        (event) =>
          event.name &&
          event.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  const paginationConfig = {
    current: currentPage,
    pageSize: pageSize,
    onChange: (page: number) => {
      setCurrentPage(page);
    },
    onShowSizeChange: (size: number) => {
      setPageSize(size);
    },
  };

  const showDeleteConfirm = (id: string) => {
    confirm({
      title: 'Tem certeza que deseja apagar este evento?',
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
      await deleteEvent(id);
      const updatedEvents = eventsData.filter((event) => event.id !== id);
      setEventsData(updatedEvents);
    } catch (error) {
      console.error('Erro ao deletar evento:', error);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#191E28' }}>
      <AppHeader />
      <Content
        style={{
          padding: '0 50px',
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p style={{ color: 'white', marginBottom: '35px' }}>Home / Eventos</p>
        <div style={{ marginBottom: '25px' }}>
          <h1 style={{ color: 'white', marginBottom: '5px' }}>Eventos</h1>
          <p style={{ color: 'white' }}>
            Confira a lista de todos os eventos cadastrados
          </p>
        </div>
        <Col>
          <Card>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '30px',
              }}
            >
              <Input
                placeholder="Pesquise por nome do evento"
                prefix={<SearchOutlined />}
                style={{ width: '30%' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                type="primary"
                onClick={handleNavigateNewEvent}
                style={{
                  backgroundColor: '#CAD6EC',
                  color: 'black',
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
              locale={{
                emptyText: (
                  <CustomEmptyText>Nenhum resultado encontrado</CustomEmptyText>
                ),
              }}
            />
          </Card>
        </Col>
      </Content>
    </Layout>
  );
};

export default Events;
function deleteEvent(id: string) {
  throw new Error('Function not implemented.');
}

