const getGifs = async (category) => {
    //siempre verificar el https:// cuando se hace llamadas a las apis
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=G74zSUKwSijCAItv2Mi0bsdpvlrsVIJW&q=${category}`;
    const resp = await fetch(URL);
    const { data = [] } = await resp.json()
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs;
  }

  export default getGifs