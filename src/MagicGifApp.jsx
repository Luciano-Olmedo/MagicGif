import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const MagicGifApp = () => {
  const [categories, setCategories] = useState(["digimon"])
  const onAddCategory = (newCategory) => {
    //validacion para saber si la nueva categoria existe. En caso de q exista no se agrega
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
  }
  return (
    <>
    <div className='container'>
      <h1 className='center'>MagicGifApp</h1>
      <AddCategory 
        onNewCategory={onAddCategory} />
      {
        categories.map((category) =>
          <GifGrid
            key={category}
            category={category}
          />)
      }
      </div>
    </>
  )
}

export default MagicGifApp