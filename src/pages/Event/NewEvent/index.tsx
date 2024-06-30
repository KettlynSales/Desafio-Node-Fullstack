import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Col,
  Divider,
  Row,
  Select,
  Form,
  Input,
  Breadcrumb,
  message,
} from 'antd';
import {
  StyledLayout,
  StyledContent,
  Wrapper,
  HeaderTitle,
  HeaderSubtitle,
  StyledCard,
  SectionTitle,
  FormContainer,
  CancelButton,
  SubmitButton,
  BreadcrumbContainer,
} from './styles';

import AppHeader from '../../../components/header';

import {
  createEvent,
  getEventById,
  updateEvent,
} from '../../../services/event';

import { useEventStore } from '../../../store/event';
import { useLocalStore } from '../../../store/local';

import { formatDate, formatTime, formatPhone } from '../../../utils/utils';

const { Option } = Select;

const NewEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { setEventEdit } = useEventStore();

  const { locaisData } = useLocalStore();
  console.log(locaisData);

  const [form] = Form.useForm();

  useEffect(() => {
    const fetchLocalData = async () => {
      try {
        if (id) {
          const response = await getEventById(id);
          form.setFieldsValue(response);
          setEventEdit(response);
        }
      } catch (error) {
        console.error('Erro ao buscar evento:', error);
        message.error('Erro ao buscar evento. Tente novamente mais tarde.');
      }
    };

    fetchLocalData();
  }, [id, form, setEventEdit]);

  const onFinish = async (values: any) => {
    try {
      if (id) {
        await updateEvent(id, values);
        message.success('Evento atualizado com sucesso!');
      } else {
        await createEvent(values);
        message.success('Evento cadastrado com sucesso!');
      }
      navigate('/events');
    } catch (error) {
      console.error('Erro ao cadastrar/editar evento', error);
      message.error(
        'Erro ao cadastrar/editar evento. Verifique os dados e tente novamente.',
      );
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledLayout>
      <AppHeader />
      <StyledContent>
        <Wrapper>
          <div style={{ marginBottom: '24px', textAlign: 'left' }}>
            <BreadcrumbContainer>
              <Breadcrumb.Item>
                <a href="/">Home</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/locais">Locais</a>
              </Breadcrumb.Item>
            </BreadcrumbContainer>
            <HeaderTitle>
              {' '}
              {id ? 'Editar evento' : 'Adicionar novo evento'}
            </HeaderTitle>
            <HeaderSubtitle>*Campos obrigatórios</HeaderSubtitle>
          </div>
          <StyledCard>
            <SectionTitle>Informações básicas</SectionTitle>
            <FormContainer>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Nome do evento"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Informe o nome do evento',
                        },
                      ]}
                    >
                      <Input placeholder="Informe o nome do evento" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Selecione um tipo"
                      name="type"
                      rules={[{ required: true, message: 'Selecione um tipo' }]}
                    >
                      <Select placeholder="Selecione um tipo">
                        <Option value="type1">Futebol</Option>
                        <Option value="type2">Show</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Data do evento"
                      name="date"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      getValueFromEvent={(e) => formatDate(e.target.value)}
                    >
                      <Input placeholder="00/00/0000" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Horário do evento"
                      name="hour"
                      rules={[
                        {
                          required: true,
                          message: 'Informe o horário',
                        },
                      ]}
                      getValueFromEvent={(e) => formatTime(e.target.value)}
                    >
                      <Input placeholder="00:00" />
                    </Form.Item>
                  </Col>
                </Row>

                <Col xs={24} md={12}>
                  <Form.Item
                    label="Selecione um local"
                    name="localId"
                    rules={[{ required: true, message: 'Selecione um local' }]}
                  >
                    <Select placeholder="Selecione um local">
                      {locaisData.map((local) => (
                        <Option key={local.id} value={local.id}>
                          {local.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Divider />
                <SectionTitle>Contato</SectionTitle>

                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="E-mail"
                      name="email"
                      rules={[{ required: true, message: 'Informe um e-mail' }]}
                    >
                      <Input placeholder="Informe um e-mail" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Telefone"
                      name="phone"
                      getValueFromEvent={(e) => formatPhone(e.target.value)}
                    >
                      <Input placeholder="Informe um telefone" />
                    </Form.Item>
                  </Col>
                </Row>
                <Divider />

                <Form.Item style={{ textAlign: 'right' }}>
                  <CancelButton htmlType="button" onClick={() => navigate(-1)}>
                    Cancelar
                  </CancelButton>
                  <SubmitButton type="primary" htmlType="submit">
                    {id ? 'Salvar Alterações' : 'Cadastrar'}
                  </SubmitButton>
                </Form.Item>
              </Form>
            </FormContainer>
          </StyledCard>
        </Wrapper>
      </StyledContent>
    </StyledLayout>
  );
};

export default NewEvent;
