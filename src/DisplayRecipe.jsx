import React from "react";

function DisplayRecipe({ recipes }) {
  return (
    <div>
      {recipes.map((recipe, i) => {
        console.log(recipe);
        return (
          <div key={i}>
            <img src={recipe.recipe.image} alt=""/>
            <h1>{recipe.recipe.label}</h1>
            <h3>{recipe.recipe.calories}</h3>
            <div>{recipe.recipe.ingredientLines.map((el, i)=>{
                return <p key={i}>{el}</p>
            })}</div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayRecipe;
