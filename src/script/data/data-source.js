//Import const meals dari meals.js
import meals from './meals.js';

//Definisi Class DataSource
class DataSource {
    static searchMeal(keyword) {
        return new Promise((resolve, reject) => {
            const filteredMeals = meals.filter(meal => 
                meal.name.toUpperCase().includes(keyword.toUpperCase()));
        
            if (filteredMeals.length) {
                resolve(filteredMeals);
            } else {
                reject(`"${keyword}" belum tersedia di Menu kami, Silahkan cari Menu yang lain ya!"`)
            }
        });
        
    }
}
// Export Class DataSource
export default DataSource;