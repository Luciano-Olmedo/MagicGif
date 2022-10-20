import React,{useState} from 'react'
import AddCategory from './components/AddCategory'

const MagicGifApp = () => {

  const [categories, setCategories] = useState(['One Punch','Dragon Ball'])
  
  const onAddCategory = ()=>{
    setCategories([ ...categories, "nuevo item"]
     
    )
  }
  return (
  <>
  {/*titulo */}

    <h1>MagicgifApp</h1>

    {/*input */}
    <AddCategory/>
     {/*Listado de gifs */}
     <button onClick={onAddCategory}>Agregar</button>
     <ol>
        {
          categories.map((category,index) => {
            return <li key={index}>{category}</li>
          })
        }
     </ol>

      {/*items  gifs */}

  
  </>
  )
}

export default MagicGifApp