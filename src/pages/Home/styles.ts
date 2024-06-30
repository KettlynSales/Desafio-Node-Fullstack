import styled from 'styled-components';
import { Layout, Row, Card, Button } from 'antd';

export const StyledLayout = styled(Layout)<{ backgroundImage: string }>`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const StyledContent = styled(Layout.Content)`
  padding: 0 50px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  img {
    margin-right: 20px;
    max-width: 200px;
    height: auto;
  }

  h1 {
    color: white;
  }
`;

export const GreetingText = styled.p`
  color: white;
`;

export const StyledRow = styled(Row)`
  width: 100%;
  margin-bottom: 16px;
`;

export const LocalCard = styled(Card)`
  background-color: #2f3b28;
  color: white;
  border-width: 0;
  border-radius: 16px;
`;

export const EventCard = styled(Card)`
  background-color: #461527;
  color: white;
  border-width: 0;
  border-radius: 16px;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h1`
  font-size: 28px;
  color: white;
  margin: 0;
`;

export const CardButton = styled(Button)`
  background-color: #cad6ec;
  color: black;
  border-width: 0;

  &:hover {
    background-color: white;
    color: #2f3b28;
  }
`;

export const CardDescription = styled.p`
  color: white;
  margin: 0;
`;
