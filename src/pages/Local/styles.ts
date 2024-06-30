import styled from 'styled-components';
import { Layout, Card, Input, Button, Breadcrumb as AntBreadcrumb } from 'antd';

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background-color: #191e28;
`;

export const StyledContent = styled(Content)`
  padding: 0 50px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
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

export const HeaderTitle = styled.h1`
  color: white;
  margin-bottom: 5px;
`;

export const HeaderSubtitle = styled.p`
  color: white;
`;

export const StyledCard = styled(Card)`
  margin-bottom: 30px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SearchInput = styled(Input)`
  width: 30%;
`;

export const AddButton = styled(Button)`
  background-color: #cad6ec;
  color: black;
  border-width: 0;
`;

export const CustomEmptyText = styled.div`
  color: white;
  text-align: center;
  padding: 10px 0;
`;
