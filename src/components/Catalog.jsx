import data from "../data"

export const Catalog = () => {
    return(
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
    )
}