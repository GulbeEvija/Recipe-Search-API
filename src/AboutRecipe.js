function AboutRecipe({label, image, calories, ingredients, cuisine, type, link, portions}) {

    return (
        <div className="recipe">
            <div>
                <h2>{label}</h2>
            </div>

            <div className="labels">
                <p className="info">{cuisine}</p>
                <p className="info">{type}</p>
                <p className="info">{portions} portions</p>
                <p className="info">{calories.toFixed()} calories</p>
            </div>

            <div>
                <img className="image" src={image} alt="Recipe" />
            </div>

        <div>
            <h3>Ingredients:</h3>
        </div>

            <div className="ingredientCont">
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                        {ingredient}</li>
                    ))}
                </ul>
                <p className="linkMore">Full recipe <a href={link} target="_blank" rel="noreferrer" className="moviePlot">HERE</a></p>
            </div>
        </div>
    )
}

export default AboutRecipe;