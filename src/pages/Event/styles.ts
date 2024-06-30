import styled from 'styled-components';
import { Layout, Button, Input } from 'antd';

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

export const Breadcrumb = styled.p`
  color: white;
  margin-bottom: 35px;
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 25px;
`;

export const HeaderTitle = styled.h1`
  color: white;
  margin-bottom: 5px;
`;

export const HeaderSubtitle = styled.p`
  color: white;
`;

export const SearchAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const StyledInput = styled(Input)`
  width: 30%;
`;

export const StyledButton = styled(Button)`
  background-color: #cad6ec;
  color: black;
  border-width: 0;
`;

export const CustomEmptyText = styled.div`
  text-align: center;
  color: #ffffff;
`;
