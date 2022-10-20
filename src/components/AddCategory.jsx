
import { useState } from 'react';

const AddCategory = () => {
    //Estado de los input
    const [inputValue, setInputValue] = useState("")

    //Capturando el campo del input
    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    //Deteniendo el refresh de la pagina y enviando los nuevos estados de los inputs
    const onSubmit =(e)=>{
        e.preventDefault()
        console.log(inputValue)
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </>

    )
}

export default AddCategory