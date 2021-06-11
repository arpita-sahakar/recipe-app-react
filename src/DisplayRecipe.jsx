import React from "react";

function DisplayRecipe({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => {
        console.log(recipe);
        return (
          <div>
            <img src={recipe.recipe.image} alt=""/>
            <h1>{recipe.recipe.label}</h1>
            <h3>{recipe.recipe.calories}</h3>
            <div>{recipe.recipe.ingredientLines.map(el=>{
                return <p>{el}</p>
            })}</div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayRecipe;
