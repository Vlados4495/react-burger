import AppStyles from './App.module.css';
import AppHeader from '../app-header/app-header';
import { burgerIngredientsData } from '../../utils/data';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstrucor from '../burger-constructor/burger-constructor';

function App() {
    return (
        <div className={AppStyles.wrapper}>
            <AppHeader />
            <BurgerIngredients ingredients={burgerIngredientsData} />
            <BurgerConstrucor ingredients={burgerIngredientsData} />
        </div>
    )
}

export default App;