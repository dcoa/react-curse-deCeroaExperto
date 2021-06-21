import { useState } from 'react'
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

const GifExpertApp = props => {
    //const category = ['One Punch', 'Samurai X', 'Dragon Ball', 'One Piece', 'Gintama'];
    const [categories, setCategories] = useState(['Gintama']);

    // const handleApp =() => {
    //     setCategories([...categories, "Hunter x Hunter"])
    // }
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategory={setCategories} /> 
            <hr />
            <ul>
                {
                    categories.map(anime => <GifGrid key={anime} Category={anime}>{anime}</GifGrid>)
                }
            </ul>
        </>
    )
}

export default GifExpertApp;
