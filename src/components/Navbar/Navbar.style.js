import styled from 'styled-components';
import { LightMode } from '@styled-icons/material/LightMode';
import { DarkMode } from '@styled-icons/material-rounded/DarkMode';

const Moon = styled(DarkMode)`
  height: 40px;
  width: auto;
  color: white;
  border-radius: 50%;
  background-color: #805ad5;
  &:hover {
    background-color: #592fbb;
  }
`;

const Sun = styled(LightMode)`
  height: 40px;
  width: auto;
  border-radius: 50%;
  background-color: #fbd38d;
  &:hover {
    background-color: #fabf58;
  }
`;

const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-between;
  z-index: 1;

  h1 {
    margin: 0;
    padding: 0;
  }
  button {
    padding: 0;
    margin: 0;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }
`;

export { Moon, Sun, NavWrapper };
