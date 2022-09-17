import AppStyles from './App.module.css';
import AppHeader from '../app-header/app-header'

const App = () => {
    return (
        <div className={AppStyles.wrapper}>
            <AppHeader />
        </div>
    )
}

export default App;