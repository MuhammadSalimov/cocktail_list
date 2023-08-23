import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = (props) => {
  const {id }  = props
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={props.image} alt='cocktail' />
      </div>
      <div className='cocktail-footer'>
        <h3>{props.name}</h3>
        <h4>{props.Glass}</h4>
        <p>{props.info}</p>
        <Link to={`/cocktails/${id}`} className='btn btn-primary btn-details' >Details</Link>
      </div>
    </article>
  )
}

export default Cocktail
