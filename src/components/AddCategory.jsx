
import { useState } from 'react';

const AddCategory = ({setCategories}) => {
    //Estado de los input
    const [inputValue, setInputValue] = useState("")

    //Capturando el campo del input
    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    //Deteniendo el refresh de la pagina y enviando los nuevos estados de los inputs
    const onSubmit =(e)=>{
        e.preventDefault()
        //el metodo trim borra los espacios delante y detras del input
        if(inputValue.trim().length <= 1)return;
        setCategories(categories =>[...categories,inputValue])
        setInputValue("")      
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