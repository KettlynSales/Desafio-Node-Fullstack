import styled from 'styled-components';
import { Layout, Card, Button, Breadcrumb as AntBreadcrumb } from 'antd';

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background-color: #191e28;
`;

export const StyledContent = styled(Content)`
  padding: 0 50px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 50%;
  max-width: 900px;
`;

export const BreadcrumbContainer = styled(AntBreadcrumb)`
  margin-bottom: 24px;
  text-align: left;
  a {
    color: white;
  }
  .ant-breadcrumb-separator {
    color: white;
  }
`;

export const StyledCard = styled(Card)`
  border-width: 0;
  margin-bottom: 50px;
  border-radius: 20px;
`;

export const SectionTitle = styled.p`
  color: white;
  margin-bottom: 20px;
`;

export const FormButton = styled(Button)`
  background-color: transparent;
  color: #fff;
  margin-right: 15px;
`;

export const SubmitButton = styled(Button)`
  background-color: #ebf0f9;
  color: #000;
`;
