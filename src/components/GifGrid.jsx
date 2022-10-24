import getGifs from "./FetchApi/GetGifs"
import { useEffect } from "react"

const GifGrid = ({ category }) => {
useEffect(()=>{
  getGifs(category)

},[])

  return (
    <>
      <h3>{category}</h3>
    </>
  )
}

export default GifGrid