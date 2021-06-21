export const getGifs = async (category) => {
    const url = 'http://api.giphy.com/v1/gifs/search?api_key=';
    const limit = 9;
    const gif = await fetch(`${url}${process.env.REACT_APP_API_KEY}&q=${encodeURI(category)}&limit=${limit}`);
    const { data } = await gif.json();
    const all = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return all
};