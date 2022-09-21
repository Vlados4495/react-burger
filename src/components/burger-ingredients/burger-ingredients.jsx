import BurgerIngredientsStyles from './burger-ingredients.module.css';
import Tabs from '../tabs/tabs'
import IngredientCard from '../ingridient-card/ingredient-card';
import PropTypes from 'prop-types';

function BurgerIngredients({ ingredients }) {
    const buns = ingredients.filter(bun => bun.type === "bun");
    const sauces = ingredients.filter(sauce => sauce.type === "sauce");
    const main = ingredients.filter(main => main.type === "main");
    return (
        <section className={BurgerIngredientsStyles.main}>
            <h1 className={`${BurgerIngredientsStyles.title} text text_type_main-large`}>
                Соберите бургер
            </h1>
            <Tabs />
            <div className={BurgerIngredientsStyles.ingredientsContainer}>
                <h2
                    className={`${BurgerIngredientsStyles.ingredientSectionName} text text_type_main-medium`}
                    id="buns"
                >
                    Булки
                </h2>
                <ul className={BurgerIngredientsStyles.cardsContainer}>
                    {buns.map(ingredient => <IngredientCard ingredient={ingredient} key={ingredient._id} />)}
                </ul>

                <h2
                    className={`${BurgerIngredientsStyles.ingredientSectionName} text text_type_main-medium`}
                    id="sauces"
                >
                    Соусы
                </h2>
                <ul className={BurgerIngredientsStyles.cardsContainer}>
                    {sauces.map(ingredient => <IngredientCard ingredient={ingredient} key={ingredient._id} />)}
                </ul>

                <h2
                    className={`${BurgerIngredientsStyles.ingredientSectionName} text text_type_main-medium`}
                    id="main"
                >
                    Начинки
                </h2>
                <ul className={BurgerIngredientsStyles.cardsContainer}>
                    {main.map(ingredient => <IngredientCard ingredient={ingredient} key={ingredient._id} />)}
                </ul>
            </div>
        </section>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BurgerIngredients; 