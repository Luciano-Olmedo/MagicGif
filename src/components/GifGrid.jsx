import getGifs from "./FetchApi/GetGifs"
import { useEffect, useState } from "react"

const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getImages = async () => {
    const newImages = await getGifs(category)
    setImages(newImages)
  }
  //el useEffect llama a una constante getImages para q setee setImages
  useEffect(() => {
    getImages()
  }, [])
  return (
    // las llaves del map dentro de (({ id,title})) es una desustructuracion de images
    <>    
      <ol>
        {
          images.map(({ id, title }) => (
            <li key={id}>{title}</li>
            
          ))
        }
      </ol>

      <h3>{category}</h3>
    </>
  )
}

export default GifGrid