
import "./card.modules.css"
const CardComponent=({name,temp_max,temp_min,input,onInputChange,onSearch})=>{
    return(
        <div className="card">
        <input  type="text"  placeholder="Enter the City Name" value={input} onChange={onInputChange}/>
        <button onClick={onSearch}>Search</button>
        <div>{name}</div>
        <div>{temp_max}</div>
        <div>{temp_min}</div>
        
        </div>
    )
}

export default  CardComponent;