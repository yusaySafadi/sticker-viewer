import React,{useState} from 'react'

export const Viewer =() =>{
    const [currentSticker, setCurrentSticker] = useState("")
    const[inputValue, setInputValue] = useState("Nase")

    const handleChange = (e) =>{
        setInputValue(e.target.value)
    }
    return (
        <div>
            <img src={currentSticker} alt="" />
            <input type="text" name="" id="" value={inputValue} onChange={handleChange}  />
        </div>
    )
}

