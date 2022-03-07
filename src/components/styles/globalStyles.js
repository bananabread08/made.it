import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html,
body {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
  overflow-wrap: break-word;
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.5s linear;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  min-height: 100vh;
}
`;

export const lightTheme = {
  body: '#fff',
  text: '#1A1A1B',
  button: '#582FBB',
  mainbg: '#dae0e5',
};

export const darkTheme = {
  text: '#D7DADC',
  body: '#1A1A1B',
  button: '#FABE58',
  mainbg: '#030303',
};
