import React, { useState, useContext, useEffect } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading , setLoading] = useState(false)
  const [searchTerm , SetSearchterm] = useState('a')
  const [item , setItem] = useState([])

  const FetchData =async ()=> {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const Data = await response.json()
      const {drinks} = Data
      if(!drinks){
        setItem([])
      }else{
        const newArray = drinks.map((item)=>{
          const {idDrink ,strDrink,strDrinkThumb ,strGlass , strAlcoholic } = item
          return {
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            Glass:strGlass,
            info:strAlcoholic
          }
        })
        setItem(newArray)
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }
  useEffect(()=>{
    FetchData()
  } , [searchTerm])
  
  return <AppContext.Provider value={{
    loading,
    SetSearchterm,
    item
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
