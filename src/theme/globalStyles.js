import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 20px;
    padding: 0;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  h1, h2 {
    color: #333;
  }
  p {
    margin: 10px 0;
  }
`;

export const Container = styled.div`
max-width: 800px;
margin: auto;
padding: 20px;
`

export const BlogPost = styled.div`
margin-bottom: 30px;
border: 1px solid #f4f4f4;
padding: 20px;
`

export const Date = styled.span`
margin-right: 10px;
font-size:14px;
font-weight:bold;
`

export const Author = styled.span`
margin-right: 10px;
font-size:14px;
font-weight:bold;
`