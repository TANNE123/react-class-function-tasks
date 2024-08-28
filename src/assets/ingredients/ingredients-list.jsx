

const Ingredients=({list})=>{
    return(
        <ol>
        <>
        {
            list.map(eachItem=>{
                return<li key={eachItem}>{eachItem}</li>
            })
        }
        </>
        </ol>
        
    )
}

export default Ingredients;