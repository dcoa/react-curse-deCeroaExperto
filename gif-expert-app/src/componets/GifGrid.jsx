import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ Category }) => {
    // const [images, setImages] = useState([]);
    const { data, loading } = useFetchGifts(Category);
    //transformación para crear una galeria de imagenes
    let columns = [];

    for (let i = 0; i < data.length; i += 3) {
        columns.push(data.slice(i, i + 3))
    }

    return (
        <>
            <h3>{Category}</h3>
            <div className='card-grid'>
                {loading && 'Cargandoo...'}
                {
                    columns.map((images, i) => <div key={'columns' + i} className='columns'>
                        {images.map(img => <GifGridItem key={img.id} {...img} />)}
                    </div>)
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    Category: PropTypes.string.isRequired
}
