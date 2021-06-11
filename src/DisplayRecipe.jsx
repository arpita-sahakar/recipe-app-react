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
