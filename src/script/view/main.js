//import komponen meal-list dari meal-list.js
import "../component/meal-list.js";

//import komponen Search-Bar dari searc-bar.js
import "../component/search-bar.js";

//Import DataSource dari data-source.js
import DataSource from '../data/data-source.js';
import meals from "../data/meals.js";

//Definisi Const main
const main = () => {
    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMeal(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        mealListElement.meals = results;
    };

    const fallbackResult = message => {
        mealListElement.renderError(message);    
    };

    searchElement.clickEvent = onButtonSearchClicked;
}
//Export const Main
export default main;