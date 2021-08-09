import React,{useState, useEffect} from 'react'
import data from "../data"
export const Viewer =() =>{
    const[inputValue, setInputValue] = useState("")
    const [currentSticker, setCurrentSticker] = useState("")
    
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
        <>
        <div>
       
        
        <img src={currentSticker} alt="Sticker Image" />
        
            
            <input type="text" name="" id="" value={inputValue} onChange={handleChange}  />
        </div>

        <div>
            <h2>Catalog</h2>
            {data.map((sticker, index) =>{
                return <ul>
                <div>
                <img src={sticker.src} alt="aweawea" />
                <li key={index}>{sticker.name}</li>
                </div>
                </ul>
            })}

        </div>
        </>
    )
}

