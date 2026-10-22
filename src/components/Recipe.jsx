export default function Recipe(props){
const ingredientList = props.ingredients.map((ingredient) => {
    if (ingredient.unit.length > 3){
        return(<li>{ingredient.name}: {ingredient.amount} {ingredient.unit}</li>)
    } else {
    return(<li>{ingredient.name}: {ingredient.amount}{ingredient.unit}</li>)
    }
})
const instructionList = props.instructions.map((step) => {
    return(<li>{step}</li>)
})

    return(
        <>
        <article className="recipe">
            <img className="recipe-image" src={props.img} alt={props.name}/>
            <div className="recipe-info">
            <h1>{props.name}</h1>
            <div className="recipe-tags">
            <p>{props.category}</p>
            <p>{props.difficulty}</p>
            </div>
            <div className="recipe-time">
            <p>Prep: {props.prepTime} minutes</p>
            <p>Cook: {props.cookTime} minutes</p>
            </div>
            <div className="recipe-macros">
            <p>Servings: {props.servings}</p>
            <p>{props.calories} calories</p>
            <p>{props.protein}g of Protein</p>
            </div>

            <h2>Ingredients:</h2>
            <ul className="ingredients">
                {ingredientList}
            </ul>
            <h2>Instructions:</h2>
            <ol>
                {instructionList}
            </ol>
            </div>
        </article>
        </>
    )
}