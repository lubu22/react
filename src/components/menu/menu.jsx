
import '../menu/menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <div className="container">
                <div className="menu-items">
                    <ul className='menu-list-item'>
                        <li className="menu__item">
                            <a href="#" className="menu__text">Кухни</a>
                            <div className="block-drop-down">
                                <ul className="drop-down-list">
                                    <li className="drop-down__item"><a href="#" className="drop-down__text">Модульные кухни</a></li>
                                    <li className="drop-down__item"><a href="#" className="drop-down__text">Готовые комплекты</a></li>
                                    <li className="drop-down__item"><a href="#" className="drop-down__text">Маленькие кухни</a></li>
                                    <li className="drop-down__item"><a href="#" className="drop-down__text">Угловые кухни</a></li>
                                    <li className="drop-down__item"><a href="#" className="drop-down__text">Кухонные уголки</a></li>
                                    <li className="drop-down__item"><a href="#" className="drop-down__text">Столы кухонные</a></li>
                                    <li className="drop-down__item"><a href="#" className="drop-down__text">Стулья для кухни</a></li>
                                    <li className="drop-down__item"><a href="#" className="drop-down__text">Комплектующие</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__text">Гостинные</a>
                        </li>
                        <li className="menu__item"><a href="#" className="menu__text">Спальни</a></li>
                        <li className="menu__item"><a href="#" className="menu__text">Прихожие</a></li>
                        <li className="menu__item"><a href="#" className="menu__text">Шкафы-купе</a></li>
                        <li className="menu__item"><a href="#" className="menu__text">Детские</a></li>
                        <li className="menu__item"><a href="#" className="menu__text">Диваны</a></li>
                        <li className="menu__item"><a href="#" className="menu__text text__where__show">Где посмотреть</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Menu;