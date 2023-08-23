import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {SetSearchterm} = useGlobalContext()
  const ValueForm = useRef()
  const SearchForm =(e)=>{
    SetSearchterm(ValueForm.current.value)
  }
  return (
    <section className='section search'>
      <form className='search-form'>
      <div className='form-control'> 
      <label htmlFor='name'>Search Your Favorite Cocktail</label>
      <input id='name' type='text' ref={ValueForm} onChange={SearchForm} />
      </div>
      </form>
    </section>
  )
}

export default SearchForm
