import React, { useState } from 'react'
import AddCategory from './components/AddCategory';



import GifGrid from './components/GifGrid';
// import PropTypes from 'prop-types'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () =>{
    //     // setCategories( ['Holas', ...categories] );
    //     setCategories( c => [...c, 'Hola'] );
    // }

  return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr/>
        
        <ol>
            {
                categories.map( c =>  (
                    <GifGrid category={ c }  key ={c} />
                ))
            }
        </ol>
      </>
  )
}

// GifExpertApp.propTypes = {}

export default GifExpertApp