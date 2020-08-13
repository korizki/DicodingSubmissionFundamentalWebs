//import meal item dari meal-item.js
import './meal-item.js';

class MealList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

        set meals(meals) {
            this._meals = meals;
            this.render();
        }
    renderError(message) {
        this.shadowDOM.innerHTML = "";
        this.shadowDOM.innerHTML += `<h2 style="color:white; text-align:center;"> ${message} </h2>`
    }
    render() {
        this.shadowDOM.innerHTML = "";
        this._meals.forEach(meal => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meal = meal
            this.shadowDOM.appendChild(mealItemElement);
        })
    }
   
}
customElements.define("meal-list", MealList);