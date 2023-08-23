import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading , item} = useGlobalContext()

  if(loading){
    return <Loading />
  }

  if(item.length < 1){
    return <h1 className='section-title'>
      No Cocktails Matched Your Criteria
    </h1>
  }

  return (
    <div>
      <h1 className='section-title'>
      Cocktails
      </h1>
     <div className='cocktails-center'>
     {
      item.map((item)=>{
        return <Cocktail key={item.id}  id={item.id} name={item.name} image={item.image} Glass={item.Glass} info={item.info} />
      })
     }
     </div>
    </div>
  )
}

export default CocktailList
