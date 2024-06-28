import React from "react";
import { Layout, Col, Card, Flex, Divider } from "antd";
import AppHeader from "../../../components/header";
import { Form, Input, Button, Select, Row } from "antd";
import "./styles";

const { Content } = Layout;
const { Option } = Select;

const NewEvent = () => {
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
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%", maxWidth: "900px" }}>
          <div style={{ marginBottom: "24px", textAlign: "left" }}>
            <body style={{ color: "white", marginBottom: "25px" }}>
              Home / Eventos
            </body>
            <h1 style={{ color: "white", marginBottom: "5px" }}>
              Adicionar novo evento
            </h1>
            <p style={{ color: "white" }}>*Campos obrigatórios</p>
          </div>
          <Card
            style={{ borderWidth: 0, marginBottom: "40px", borderRadius: 20 }}
          >
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
                      label="Nome do evento"
                      name="nomeEvent"
                      rules={[
                        {
                          required: true,
                          message: "Informe o nome do evento",
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
                      rules={[{ required: true, message: "Selecione um tipo" }]}
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
                          message: "Informe a data do evento",
                        },
                      ]}
                    >
                      <Input placeholder="00/00/0000" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label="Horário do evento"
                      name="nomeEvent"
                      rules={[
                        {
                          required: true,
                          message: "Informe o horário",
                        },
                      ]}
                    >
                      <Input placeholder="00:00" />
                    </Form.Item>
                  </Col>
                </Row>

                <Col xs={24} md={12}>
                  <Form.Item
                    label="Selecione um local"
                    name="local"
                    rules={[{ required: true, message: "Selecione um local" }]}
                  >
                    <Select placeholder="Selecione um local">
                      <Option value="local1">Morumbi</Option>
                      <Option value="local2">Allianz</Option>
                    </Select>
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

export default NewEvent;
