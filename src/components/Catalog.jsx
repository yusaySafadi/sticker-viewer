import styled from "styled-components"
import data from "../data"

const CatalogContainer = styled.div`
position: fixed;
top:0;
right:0;
background-color: #fffdff;
border: 1px solid rgba(0,0,0,0.1);

width: 30rem;
height: 100%;
border-radius: 15px;

`
const StickerList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
padding-left: 0.5rem;
padding-right: 0.5rem;
gap:1.75rem;
height: 100%;
align-items: center;
overflow: auto;


`
const StickerListItem = styled.li`
text-decoration: none;
display: flex;
align-items: center;

border-radius: 10px;
box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.2);
background-color: #fff;
width: 75%;

padding:0.5rem;

cursor: pointer;
`
const StickerListItemImage= styled.img`
height:3.5rem;

`
const StickerListItemText = styled.p`

font-size: 1rem;
font-family: Arial, Helvetica, sans-serif;
`
const CatalogHeader = styled.div`
margin:0;
background-image: linear-gradient(to right, #5b7cfa, #3659db);
height:100px;
color:#fff;
display: flex;
justify-content: center;
font-size: 1.5rem;
letter-spacing: 0.5rem;
text-transform: uppercase;
`


export const Catalog = ({setCurrentSticker}) => {
    const changeCurrentSticker = (e) =>{
        let src = e.currentTarget.firstChild.src;
        setCurrentSticker(src)
    }

    return(
        <CatalogContainer>
        <CatalogHeader>
            <h2>Catalog</h2>
        </CatalogHeader>
            <StickerList>
            {data.map((sticker, index) =>{
                return(
                <StickerListItem key={index} onClick={changeCurrentSticker}>
                    <StickerListItemImage src={sticker.src} alt="aweawea" />
                    <StickerListItemText>{sticker.name}</StickerListItemText>
                </StickerListItem>
                )
                
            })}
            </StickerList>

        </CatalogContainer>
    )
}
