import React from "react"

import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
// const ingredients = ["oregano","thyme","curry"]


export default function Main() { 
    const [ingredients, setIsIngredients] = React.useState(["all main spices","pasta","ground beeef","tomato paste"])
    const [recipeShown, setRecipeShown] = React.useState(false)

    const mapIngrdients = ingredients.map(ingredient =>(
        <li key={ingredient}> {ingredient} </li>  ))  

    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient")
        setIsIngredients(prev => [...prev, newIngredient])
        console.log(newIngredient)
    }

    function handleGetRecipe(){
        setRecipeShown(prev => !prev)
    }
    return ( 
        <main className='main'>
            <form action={handleSubmit} className='add-ingredient-form'>
                <input type="text" placeholder="e.g oregano" name="ingredient" aria-label="Add ingredient"/>
                <button type="submit">Add ingredient</button>
            </form>
        
            {ingredients.length > 0 && 
            <IngredientsList
                mapIngrdients = {mapIngrdients} 
                ingredients = {ingredients}
                handleGetRecipe = {handleGetRecipe}
            /> }
            { recipeShown ? <ClaudeRecipe/> : null}
        </main>
    );
};
