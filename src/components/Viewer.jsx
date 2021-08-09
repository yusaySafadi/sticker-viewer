import React,{useState} from 'react'

export const Viewer =() =>{
    const [currentSticker, setCurrentSticker] = useState("")
    const[inputValue, setInputValue] = useState("")

    const handleChange = (e) =>{
        setInputValue(e.target.value)
    }
    return (
        <div>
        <picture>
        
        <img src={currentSticker} alt="aweawea" type="image/webp" />
        </picture>
            
            <input type="text" name="" id="" value={inputValue} onChange={handleChange}  />
        </div>
    )
}

