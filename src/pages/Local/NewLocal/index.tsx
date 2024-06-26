// pages/Locais/NewLocal.tsx

import React, { useEffect } from "react";
import { Layout, Col, Card, Form, Input, Button, Select, Row } from "antd";
import AppHeader from "../../../components/header";
import useLocalStore from "../../../store/localStore"; // importe a store
import { useNavigate } from "react-router-dom";
import "./styles";

const { Content } = Layout;
const { Option } = Select;

const NewLocal = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const editLocal = useLocalStore((state) => state.editLocal);
  const clearEditLocal = useLocalStore((state) => state.clearEditLocal);

  useEffect(() => {
    if (editLocal) {
      form.setFieldsValue(editLocal);
    } else {
      form.resetFields();
    }
  }, [editLocal, form]);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    clearEditLocal();
    navigate("/locations");
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
          marginBottom: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Home / Locais</p>
          <h1>Adicionar novo local</h1>
          <p>*Campos obrigatórios</p>
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
                        { required: true, message: "Informe o nome do local" },
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
                      rules={[{ required: true, message: "Selecione um tipo" }]}
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
                      rules={[{ required: true, message: "Informe a cidade" }]}
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
                      rules={[{ required: true, message: "Informe um e-mail" }]}
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
      </Content>
    </Layout>
  );
};

export default NewLocal;
