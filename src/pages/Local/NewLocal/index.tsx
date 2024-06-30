import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Col,
  Row,
  message,
  Form,
  Input,
  Select,
  Divider,
  Breadcrumb,
} from 'antd';
import {
  StyledLayout,
  StyledContent,
  FormContainer,
  BreadcrumbContainer,
  StyledCard,
  SectionTitle,
  FormButton,
  SubmitButton,
} from './styles';

import AppHeader from '../../../components/header';
import TagsInput from '../../../components/tagsInput';

import {
  createLocal,
  getLocalById,
  updateLocal,
} from '../../../services/local';

import { useLocalStore } from '../../../store/local';

import { formatCNPJ, formatCEP, formatPhone } from '../../../utils/utils';

const { Option } = Select;

const NewLocal = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setLocalEdit, setGates, setTicketGates } = useLocalStore();

  const [form] = Form.useForm();

  useEffect(() => {
    const fetchLocalData = async () => {
      try {
        if (id) {
          const response = await getLocalById(id);
          form.setFieldsValue(response);
          setLocalEdit(response);
          setGates(response.gates);
          setTicketGates(response.tickets);
        }
      } catch (error) {
        console.error('Erro ao buscar local:', error);
        message.error('Erro ao buscar local. Tente novamente mais tarde.');
      }
    };

    fetchLocalData();
  }, [id, form, setLocalEdit]);

  const onFinish = async (values: any) => {
    try {
      const gates = form.getFieldValue('gates');
      const ticketGates = form.getFieldValue('ticketGates');
      if (id) {
        await updateLocal(id, values);
        message.success('Local atualizado com sucesso!');
      } else {
        await createLocal({ ...values, gates, ticketGates });
        message.success('Local cadastrado com sucesso!');
      }
      navigate('/locais');
    } catch (error) {
      console.error('Erro ao cadastrar/editar local', error);
      message.error(
        'Erro ao cadastrar/editar local. Verifique os dados e tente novamente.',
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
        <FormContainer>
          <BreadcrumbContainer>
            <Breadcrumb.Item>
              <a href="/">Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/locais">Locais</a>
            </Breadcrumb.Item>
          </BreadcrumbContainer>
          <div style={{ marginBottom: '24px', textAlign: 'left' }}>
            <h1 style={{ color: 'white', marginBottom: '5px' }}>
              {id ? 'Editar Local' : 'Adicionar novo local'}
            </h1>
            <p style={{ color: 'white' }}>*Campos obrigatórios</p>
          </div>
          <StyledCard>
            <SectionTitle>Informações básicas</SectionTitle>
            <div className="form-container">
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Nome do local"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Informe o nome do local',
                        },
                      ]}
                    >
                      <Input placeholder="Informe o nome do local" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Apelido" name="surname">
                      <Input placeholder="Informe um apelido (caso exista)" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Selecione um tipo"
                      name="type"
                      rules={[{ required: true, message: 'Selecione um tipo' }]}
                    >
                      <Select placeholder="Selecione um tipo">
                        <Option value="tipo1">Tipo 1</Option>
                        <Option value="tipo2">Tipo 2</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="CNPJ"
                      name="cnpj"
                      getValueFromEvent={(e) => formatCNPJ(e.target.value)}
                    >
                      <Input placeholder="Informe o CNPJ" />
                    </Form.Item>
                  </Col>
                </Row>
                <Divider />
                <SectionTitle>Localização</SectionTitle>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Cidade"
                      name="city"
                      rules={[{ required: true, message: 'Informe a cidade' }]}
                    >
                      <Input placeholder="Informe a cidade" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Estado"
                      name="state"
                      rules={[
                        { required: true, message: 'Selecione um estado' },
                      ]}
                    >
                      <Select placeholder="Selecione um estado">
                        <Option value="estado1">Estado 1</Option>
                        <Option value="estado2">Estado 2</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="CEP"
                      name="zipCode"
                      rules={[{ required: true, message: 'Informe o CEP' }]}
                      getValueFromEvent={(e) => formatCEP(e.target.value)}
                    >
                      <Input placeholder="Informe o CEP" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Endereço"
                      name="address"
                      rules={[
                        { required: true, message: 'Informe o endereço' },
                      ]}
                    >
                      <Input placeholder="Informe o endereço" />
                    </Form.Item>
                  </Col>
                </Row>

                <Col xs={24} md={12}>
                  <Form.Item label="Complemento" name="complement">
                    <Input placeholder="Informe o complemento" />
                  </Form.Item>
                </Col>
                <Divider />
                <SectionTitle>Contato</SectionTitle>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="E-mail"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Informe um e-mail válido',
                          type: 'email',
                        },
                      ]}
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
                <SectionTitle>Cadastro de entradas e catracas</SectionTitle>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <TagsInput
                      label="Cadastre as entradas"
                      placeholder="Insira as entradas"
                      name="gates"
                      form={form}
                    />
                  </Col>
                  <Col xs={24} md={12}>
                    <TagsInput
                      label="Cadastre as catracas"
                      placeholder="Insira as catracas"
                      name="ticketGates"
                      form={form}
                    />
                  </Col>
                </Row>
                <Divider />
                <Form.Item style={{ textAlign: 'right' }}>
                  <FormButton htmlType="button" onClick={() => navigate(-1)}>
                    Cancelar
                  </FormButton>
                  <SubmitButton type="primary" htmlType="submit">
                    {id ? 'Salvar Alterações' : 'Cadastrar'}
                  </SubmitButton>
                </Form.Item>
              </Form>
            </div>
          </StyledCard>
        </FormContainer>
      </StyledContent>
    </StyledLayout>
  );
};

export default NewLocal;
