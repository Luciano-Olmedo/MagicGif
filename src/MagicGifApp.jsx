import React,{useState} from 'react'
import AddCategory from './components/AddCategory'

const MagicGifApp = () => {
  const [categories, setCategories] = useState(['One Punch','Dragon Ball'])  
  const onAddCategory = ({setCategories})=>{
    setCategories([ ...categories, "nuevo item"]     
    )
  }
  return (
  <>
    <h1>MagicgifApp</h1>
    <AddCategory setCategories={setCategories}/>    
     <button onClick={onAddCategory}>Agregar</button>
     <ol>
        {
          categories.map((category,index) => {
            return <li key={index}>{category}</li>
          })
        }
     </ol>

      

  
  </>
  )
}

export default MagicGifApp