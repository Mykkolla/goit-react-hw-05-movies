import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkGoBack = styled(Link)`
  position: relative;
  background-color: #ff6b6b;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px;

  &:hover {
    background-color: #ee5253;
  }
`;

export const DivPoster = styled.div`
  margin: 40px;
  display: flex;
  gap: 20px;
`;
