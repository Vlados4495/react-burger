import AppStyles from './App.module.css';
import AppHeader from '../app-header/app-header';
import { burgerIngredientsData } from '../../utils/data';
import BurgerIngredients from '../burger-ingredients/burger-ingredients'

function App() {
    return (
        <div className={AppStyles.wrapper}>
            <AppHeader />
            <BurgerIngredients ingredients={burgerIngredientsData} />
        </div>
    )
}

export default App;