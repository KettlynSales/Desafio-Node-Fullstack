import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Table, Tag, Row, Col, Menu, Dropdown, Card, Button } from 'antd';
import { MoreOutlined, HomeOutlined, CalendarFilled } from '@ant-design/icons';
import {
  StyledLayout,
  BackgroundOverlay,
  StyledContent,
  HeaderContainer,
  GreetingText,
  StyledRow,
  LocalCard,
  EventCard,
  CardContent,
  CardTitle,
  CardButton,
  CardDescription,
} from './styles';

import AppHeader from '../../components/header';
import Doll from '../../assets/boneco.png';
import BackgroundImage from '../../assets/background.jpg';

import { Gate, Local } from '../Local/types/local';
import { Event } from '../Event/types/event';

import { getLocais } from '../../services/local';
import { getEvents } from '../../services/event';

import { useEventStore } from '../../store/event';
import { useLocalStore } from '../../store/local';

const Home = () => {
  const navigate = useNavigate();
  const { locaisData, setLocaisData } = useLocalStore();
  const { eventsData, setEventsData } = useEventStore();

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

  const locaisColumns = [
    {
      title: 'Local',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Endereço',
      dataIndex: 'address',
      key: 'address',
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
      render: (_text: any, record: Local) => (
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

  const eventosColumns = [
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
      title: 'Local',
      dataIndex: 'localId',
      key: 'localId',
    },
    {
      dataIndex: 'action',
      key: 'action',
      render: (_text: any, record: Event) => (
        <Dropdown
          menu={{
            items,
            onClick: ({ key }) => handleMenuClickEvent(key, record),
          }}
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

  const handleMenuClick = (key: string, record: Local) => {
    if (key === '1') {
      navigate(`/newLocal/${record.id}`);
    } else if (key === '2') {
      console.log('Apagar registro:', record.id);
    }
  };

  const handleMenuClickEvent = (key: string, record: Event) => {
    if (key === '1') {
      navigate(`/newEvent/${record.id}`);
    } else if (key === '2') {
      console.log('Apagar registro:', record.id);
    }
  };

  const handleNavigateLocais = () => {
    navigate('/locais');
  };

  const handleNavigateEventos = () => {
    navigate('/events');
  };

  return (
    <StyledLayout backgroundImage={BackgroundImage}>
      <BackgroundOverlay />
      <AppHeader />
      <StyledContent>
        <HeaderContainer>
          <img src={Doll} alt="Imagem ao lado do texto" />
          <div>
            <h1>Olá, Mariana</h1>
            <GreetingText>
              Confira todos os seus eventos e locais em um só lugar!
            </GreetingText>
          </div>
        </HeaderContainer>
        <StyledRow gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <LocalCard>
              <CardContent>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <HomeOutlined style={{ fontSize: 28, marginRight: 10 }} />
                    <CardTitle>Locais</CardTitle>
                  </div>
                  <CardDescription>
                    Confira todos os locais cadastrados!
                  </CardDescription>
                </div>
                <CardButton onClick={handleNavigateLocais}>
                  Conferir locais
                </CardButton>
              </CardContent>
            </LocalCard>
          </Col>
          <Col xs={24} md={12}>
            <EventCard>
              <CardContent>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarFilled style={{ fontSize: 28, marginRight: 10 }} />
                    <CardTitle>Eventos</CardTitle>
                  </div>
                  <CardDescription>
                    Confira todos os eventos cadastrados!
                  </CardDescription>
                </div>
                <CardButton onClick={handleNavigateEventos}>
                  Conferir eventos
                </CardButton>
              </CardContent>
            </EventCard>
          </Col>
        </StyledRow>
        <Row gutter={[16, 16]} style={{ width: '100%' }}>
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
                dataSource={eventsData}
                pagination={false}
              />
            </Card>
          </Col>
        </Row>
      </StyledContent>
    </StyledLayout>
  );
};

export default Home;
