import React from "react";

function DisplayRecipe({ recipes }) {
  return (
    <div>
      {recipes.map((recipe, i) => {
        console.log(recipe);
        return (
          <div key={i}>
            <img src={recipe.recipe.image} alt=""/>
            <h3>Name : {recipe.recipe.label}</h3>
            <h3>calories : {recipe.recipe.calories}</h3>
            <h3>Ingredients : </h3>
            <ul>{recipe.recipe.ingredientLines.map((el, i)=>{
                return <li key={i}>{el}</li>
            })}</ul>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayRecipe;
