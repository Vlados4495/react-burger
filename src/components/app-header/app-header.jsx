import AppHeaderStyles from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <header className={AppHeaderStyles.main}>
      <ul className={AppHeaderStyles.navbar}>
        <ul className={AppHeaderStyles.navbarItemContainer}>
          <li className={`${AppHeaderStyles.navbarItem} text text_type_main-default`}>
            <BurgerIcon type="primary" />
            <a className={AppHeaderStyles.link} href="index.html">
              Конструктор
            </a>
          </li>

          <li className={`${AppHeaderStyles.navbarItem} text text_type_main-default text_color_inactive`}>
            <ListIcon type="secondary" />
            <a className={AppHeaderStyles.link} href="index.html">
              Лента заказов
            </a>
          </li>
        </ul>

        <li className={`${AppHeaderStyles.navbarItem} ${AppHeaderStyles.navbarItem_type_logo}`}>
          <a className={AppHeaderStyles.link} href="index.html">
            <Logo />
          </a>
        </li>

        <li className={`${AppHeaderStyles.navbarItem} text text_type_main-default text_color_inactive`}>
          <ProfileIcon type="secondary" />
          <a className={AppHeaderStyles.link} href="index.html">
            Личный кабинет
          </a>
        </li>
      </ul>
    </header>
  )
}

export default AppHeader;