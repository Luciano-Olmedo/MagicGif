import getGifs from "./FetchApi/GetGifs"
import { useEffect, useState } from "react"
import GifItem from "./GifItem"

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
    <div >
      <h3 className="title">{category}</h3>
      <ol>
        {
          images.map((image) => (
            <GifItem 
              key={image.id}
              {...image}
            />
          ))
        }
      </ol>


    </div>
  )
}

export default GifGrid