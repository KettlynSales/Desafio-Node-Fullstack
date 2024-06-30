import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Card, Table, Button, Tag, Menu, Dropdown, Modal } from 'antd';
import {
  SearchOutlined,
  MoreOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import {
  StyledLayout,
  StyledContent,
  Breadcrumb,
  HeaderWrapper,
  HeaderTitle,
  HeaderSubtitle,
  SearchAndButtonWrapper,
  StyledInput,
  StyledButton,
  CustomEmptyText,
} from './styles';

import AppHeader from '../../components/header';

import { useEventStore } from '../../store/event';

import { getEvents, deleteEvent } from '../../services/event';

import { Event } from './types/event';

const { confirm } = Modal;

const Events = () => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm, eventsData, setEventEdit, setEventsData } =
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
      dataIndex: ['local', 'name'],
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
      render: (_text: string, record: Event) => (
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

  const filteredEvents = Array.isArray(eventsData)
    ? eventsData.filter(
        (event) =>
          event.name &&
          event.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  const handleMenuClick = (key: string, record: Event) => {
    if (key === '1') {
      setEventEdit(record);
      navigate(`/newEvent/${record.id}`);
    } else if (key === '2') {
      showDeleteConfirm(record.id);
    }
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

  const handleNavigateNewEvent = () => {
    navigate('/newEvent');
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

  return (
    <StyledLayout>
      <AppHeader />
      <StyledContent>
        <Breadcrumb>Home / Eventos</Breadcrumb>
        <HeaderWrapper>
          <HeaderTitle>Eventos</HeaderTitle>
          <HeaderSubtitle>
            Confira a lista de todos os eventos cadastrados
          </HeaderSubtitle>
        </HeaderWrapper>
        <Col>
          <Card>
            <SearchAndButtonWrapper>
              <StyledInput
                placeholder="Pesquise por nome do evento"
                prefix={<SearchOutlined />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <StyledButton type="primary" onClick={handleNavigateNewEvent}>
                Adicionar Evento
              </StyledButton>
            </SearchAndButtonWrapper>
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
      </StyledContent>
    </StyledLayout>
  );
};

export default Events;
