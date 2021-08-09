import styled from "styled-components"
import data from "../data"

const CatalogContainer = styled.div`
position: fixed;
top:0;
right:0;
background-color: #fffdff;
border: 1px solid rgba(0,0,0,0.1);
height: 100%;
overflow-y:scroll;
width: 30rem;
border-radius: 15px;

`
const StickerList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
padding-left: 0.5rem;
padding-right: 0.5rem;
gap:0.5rem;
`
const StickerListItem = styled.li`
text-decoration: none;
display: flex;
align-items: center;
height: rem;
border-radius: 10px;
box-shadow: 0px 4px 7px -1px rgba(0,0,0,0.2);
background-color: #fff;
`
const StickerListItemImage= styled.img`
height: 4rem;
`
const StickerListItemText = styled.p`

font-size: 1rem;
font-family: Arial, Helvetica, sans-serif;
`
const CatalogHeader = styled.div`
margin:0;
background-image: linear-gradient(to right, #5b7cfa, #3659db);
height:10%;
color:#fff;
display: flex;
justify-content: center;
font-size: 1.5rem;
letter-spacing: 0.5rem;
text-transform: uppercase;
`
export const Catalog = () => {
    
    return(
        <CatalogContainer>
        <CatalogHeader>
            <h2>Catalog</h2>
        </CatalogHeader>
            <StickerList>
            {data.map((sticker, index) =>{
                return(
                <StickerListItem key={index}>
                <StickerListItemImage src={sticker.src} alt="aweawea" />
                <StickerListItemText>{sticker.name}</StickerListItemText></StickerListItem>
                )
                
            })}
            </StickerList>

        </CatalogContainer>
    )
}
