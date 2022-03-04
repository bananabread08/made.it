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
  text: '#121212',
  button: '#582FBB',
  ddtext: '#fff',
  ddbg: '#121212',
};

export const darkTheme = {
  text: '#fff',
  body: '#121212',
  button: '#FABE58',
  ddtext: '#121212',
  ddbg: '#fff',
};
