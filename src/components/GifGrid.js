import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );
  

    return (
        <>
            <h3 key={ category } 
                className='animate_animated animate__fadeIn'>{ category }</h3>
            { loading && <p className='animate_animated animate_flash'>Loading</p> }
            <div className='card-grid'>
                {
                    images.map( ( img ) => {
                        return (
                            <GifGridItem 
                                    key={ img.id } 
                                    { ...img }
                                />
                        )
                    })
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid