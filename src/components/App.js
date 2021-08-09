
import './App.css';
import { Catalog } from './Catalog';
import {Viewer} from "./Viewer";
import styled, {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
html, body{
  display: block;
  box-sizing: border-box;
  width:100%;
  margin:0;
  padding:0;
  background-color:#fcfcfc;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}
`

const Title = styled.h1`
margin-top: 2rem;
font-size: 5rem;
font-weight: 400;
font-family: "Lato";
`
const LayoutContainer = styled.div`
`
function App() {
  return (
    <>
    <Global />
      <LayoutContainer>
        <Title>Sticker Viewer</Title>
        <Viewer />
        <Catalog />
      </LayoutContainer>

    </>
  );
}

export default App;
