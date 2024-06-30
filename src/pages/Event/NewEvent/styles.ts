import styled from 'styled-components';
import { Layout, Card, Button, Breadcrumb as AntBreadcrumb } from 'antd';

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background-color: #191e28;
`;

export const StyledContent = styled(Content)`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Wrapper = styled.div`
  width: 50%;
  max-width: 900px;
`;

export const Breadcrumb = styled.p`
  color: white;
  margin-bottom: 25px;
`;

export const HeaderTitle = styled.h1`
  color: white;
  margin-bottom: 5px;
`;

export const HeaderSubtitle = styled.p`
  color: white;
`;

export const StyledCard = styled(Card)`
  border-width: 0;
  margin-bottom: 40px;
  border-radius: 20px;
`;

export const SectionTitle = styled.p`
  color: white;
  margin-bottom: 20px;
`;

export const FormContainer = styled.div`
  .ant-form-item-label > label {
    color: white;
  }
`;

export const CancelButton = styled(Button)`
  margin-right: 15px;
  background-color: transparent;
  color: #fff;
`;

export const SubmitButton = styled(Button)`
  background-color: #ebf0f9;
  color: #000;
`;
