import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
// import Cocktail from "../components/Cocktail";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState([]);

  const FetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const Data = await response.json();
      const { drinks } = Data;
      if (!drinks) {
        setCocktail([]);
      } else {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strGlass,
          strAlcoholic,
          strCategory,
          strIngredient1,
          strIngredient2,
        } = drinks[0];


        const newArray = {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          Glass: strGlass,
          info: strAlcoholic,
          category:strCategory,
          tarkibi1:strIngredient1,
          tarkibi2:strIngredient2,
        };
        setCocktail(newArray);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    FetchData();
  }, [id]);

  if(loading){
    return <Loading />
  }


  return (
    <section className="section cocktail-section">
      <Link to="/"  className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{cocktail.name}</h2>
      <div className="drink">
        <img src={cocktail.image} alt={cocktail.name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>{cocktail.name}
          </p>
          <p>
            <span className="drink-data">category:</span>{cocktail.category}
          </p>
          <p>
            <span className="drink-data">info:</span>{cocktail.info}
          </p>
          <p>
            <span className="drink-data">glass:</span>{cocktail.Glass}
          </p>
          <p>
            <span className="drink-data">Ingredient:</span>{cocktail.tarkibi1} {cocktail.tarkibi2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
