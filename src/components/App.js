
import {useState} from "react";
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
font-weight: 900;
font-family: "Lato";
color: #1c1c1c;
`
const LayoutContainer = styled.div`
`


function App() {

  const [currentSticker, setCurrentSticker] = useState("")

  return (
    <>
    <Global />
      <LayoutContainer>
        <Title>Sticker Viewer</Title>
        <Viewer currentSticker={currentSticker} setCurrentSticker={setCurrentSticker} />
        <Catalog setCurrentSticker={setCurrentSticker}/>
      </LayoutContainer>

    </>
  );
}

export default App;
