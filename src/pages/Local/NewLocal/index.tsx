import React from "react";
import { Layout, Col, Card, Row } from "antd";
import AppHeader from "../../../components/header";
import { Form, Input, Button, Select, Divider } from "antd";

const { Content } = Layout;
const { Option } = Select;

const NewLocal = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#191E28" }}>
      <AppHeader />
      <Content
        style={{
          padding: "0 50px",
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%", maxWidth: "900px" }}>
          <div style={{ marginBottom: "24px", textAlign: "left" }}>
            <body style={{ color: "white", marginBottom: "25px" }}>
              Home / Locais
            </body>
            <h1 style={{ color: "white", marginBottom: "5px" }}>
              Adicionar novo local
            </h1>
            <p style={{ color: "white" }}>*Campos obrigatórios</p>
          </div>
          <Card style={{ borderWidth: 0, marginBottom: "50px", borderRadius: 20  }}>
            <p style={{ color: "white", marginBottom: "20px" }}>
              Informações básicas
            </p>
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
                      name="nomeLocal"
                      rules={[
                        {
                          required: true,
                          message: "Informe o nome do local",
                        },
                      ]}
                    >
                      <Input placeholder="Informe o nome do local" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Apelido" name="apelido">
                      <Input placeholder="Informe um apelido (caso exista)" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Selecione um tipo"
                      name="tipo"
                      rules={[{ required: true, message: "Selecione um tipo" }]}
                    >
                      <Select placeholder="Selecione um tipo">
                        <Option value="tipo1">Tipo 1</Option>
                        <Option value="tipo2">Tipo 2</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="CNPJ" name="cnpj">
                      <Input placeholder="Informe o CNPJ" />
                    </Form.Item>
                  </Col>
                </Row>
                <Divider />

                <p style={{ color: "white", marginBottom: "20px" }}>
                  Localização
                </p>

                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Cidade"
                      name="cidade"
                      rules={[{ required: true, message: "Informe a cidade" }]}
                    >
                      <Input placeholder="Informe a cidade" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Estado"
                      name="estado"
                      rules={[
                        { required: true, message: "Selecione um estado" },
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
                      name="cep"
                      rules={[{ required: true, message: "Informe o CEP" }]}
                    >
                      <Input placeholder="Informe o CEP" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Endereço"
                      name="endereco"
                      rules={[
                        { required: true, message: "Informe o endereço" },
                      ]}
                    >
                      <Input placeholder="Informe o endereço" />
                    </Form.Item>
                  </Col>
                </Row>

                <Col xs={24} md={12}>
                  <Form.Item label="Complemento" name="complemento">
                    <Input placeholder="Informe o complemento" />
                  </Form.Item>
                </Col>
                <Divider />
                <p style={{ color: "white", marginBottom: "20px" }}>Contato</p>

                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="E-mail"
                      name="email"
                      rules={[{ required: true, message: "Informe um e-mail" }]}
                    >
                      <Input placeholder="Informe um e-mail" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Telefone" name="telefone">
                      <Input placeholder="Informe um telefone" />
                    </Form.Item>
                  </Col>
                </Row>
                <Divider />
                <p style={{ color: "white", marginBottom: '20px' }}>Cadastro de entradas e catracas</p>

                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item label="Cadastre as entradas" name="entradas">
                      <Input placeholder="Insira as entradas" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item label="Cadastre as catracas" name="catracas">
                      <Input placeholder="Insira as catracas" />
                    </Form.Item>
                  </Col>
                </Row>
                <Divider />

                <Form.Item style={{ textAlign: "right"}}>
                  <Button
                    htmlType="button"
                    onClick={() => form.resetFields()}
                    style={{ marginRight: "15px", backgroundColor: 'transparent', color: "#fff" }}
                  >
                    Cancelar
                  </Button>
                  <Button type="primary" htmlType="submit" style={{backgroundColor: "#EBF0F9", color: "#000" }}>
                    Cadastrar
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default NewLocal;
