import React from "react";
import { Layout, Col, Card, Flex } from "antd";
import AppHeader from "../../../components/header";
import { Form, Input, Button, Select, Row } from "antd";
// import "./styles.css";

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
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Flex gap="middle" vertical align="center">
          <body style={{ color: "white" }}>Home / Locais</body>
          <div>
            <h1 style={{ color: "white" }}>Adicionar novo local</h1>
            <p style={{ color: "white" }}>*Campos obrigatórios</p>
          </div>
          <Col>
            <Card style={{ backgroundColor: "#10141D", borderWidth: 0 }}>
              <p style={{ color: "white" }}>Informações básicas</p>
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
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item label="Apelido" name="apelido">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Selecione um tipo"
                        name="tipo"
                        rules={[
                          { required: true, message: "Selecione um tipo" },
                        ]}
                      >
                        <Select>
                          <Option value="tipo1">Tipo 1</Option>
                          <Option value="tipo2">Tipo 2</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item label="CNPJ" name="cnpj">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="Cidade"
                        name="cidade"
                        rules={[
                          { required: true, message: "Informe a cidade" },
                        ]}
                      >
                        <Input />
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
                        <Select>
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
                        <Input />
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
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item label="Complemento" name="complemento">
                    <Input />
                  </Form.Item>

                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[
                          { required: true, message: "Informe um e-mail" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item label="Telefone" name="telefone">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item label="Cadastre as entradas" name="entradas">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item label="Cadastre as catracas" name="catracas">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Cadastrar
                    </Button>
                    <Button
                      htmlType="button"
                      onClick={() => form.resetFields()}
                      style={{ marginLeft: "8px" }}
                    >
                      Cancelar
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Card>
          </Col>
        </Flex>
      </Content>
    </Layout>
  );
};

export default NewLocal;
