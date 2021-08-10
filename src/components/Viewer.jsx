import React,{useState, useEffect} from 'react'
import data from "../data"
import styled from 'styled-components'


export const Viewer =({currentSticker,setCurrentSticker}) =>{
    const[inputValue, setInputValue] = useState("")
    
    
    //Load first Sticker at start once
    useEffect(()=>{
        if(data[0]!== undefined){
            setInputValue(data[0].name)
            setCurrentSticker(data[0].src)
        } else{
            setCurrentSticker("/images/image-not-found.jfif")
        }
        
    },[])

    const handleChange = (e) =>{ 
        let searchInput = e.target.value
        let result = data.find(({name})=> name.toLowerCase() === searchInput.toLowerCase())
        setInputValue(e.target.value)
        if(result !== undefined){
            setCurrentSticker(result.src)
        }
        

    }
    return (
        <div>
        <ViewerContainer>
       
        
        <StickerImage src={currentSticker} alt="Sticker Image" />
        
            
            <SearchInput type="text" name="" id="" value={inputValue} onChange={handleChange}  />
        </ViewerContainer>
</div>
        
        
    )
}
const ViewerContainer = styled.div`

 width:30rem;
 height:40rem;
 margin: 0 auto;
 margin-top: 2rem;
 background-color: #fff;
 display: flex;
 flex-direction: column;
 padding:0.5rem;
 border-radius: 20px;
 box-shadow: 0px 15px 7px #ccc, -15px 0px 5px #ccc;
align-items: center;
`
const StickerImage= styled.img`

margin-top: 10px;
width:auto;
height: 75%;
`
const SearchInput = styled.input`

margin-top: 2rem;
width:75%;
height:10%;
outline: none;
border: 1px solid rgba(0,0,0,0.4);
border-radius: 10px;
font-size: 1.75rem;
text-align: center;

`