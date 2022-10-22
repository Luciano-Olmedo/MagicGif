import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const MagicGifApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
  const onAddCategory = (newCategory) => {
    //validacion para saber si la nueva categoria existe. En caso de q exista no se agrega
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
  }
  return (
    <>
      <h1>MagicgifApp</h1>
      <AddCategory
        onNewCategory={onAddCategory} />
      {
        categories.map((category) =>
          <GifGrid
            key={category}
            category={category}
          />)
      }
    </>
  )
}

export default MagicGifApp