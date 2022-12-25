
import imgOne from '../resurses/image1.png';
import imgTwo from '../resurses/image2.png';
import imgTree from '../resurses/image3.png';
import imgFour from '../resurses/image4.png';
import imgFive from '../resurses/image5.png';
import imgSix from '../resurses/image6.png';
import imgSeven from '../resurses/image7.png';
import imgEight from '../resurses/image8.png';

import '../catalog/catalog.css';

const Catalog = () => {
    return (
        <div className="container">
            <div className="catalog">
                <h2 className="title__catalog">Каталог</h2>

                <div className="block-catalog-products">
                    <div className="catalog-item">
                        <img src={imgOne} alt="img" />
                        <span className="catalog__text__img">КУХНИ</span>
                    </div>
                    <div className="catalog-item">
                        <img src={imgTwo} alt="img" />
                        <span className="catalog__text__img">ГОСТИННЫЕ</span>
                    </div>
                    <div className="catalog-item">
                        <img src={imgTree} alt="img" />
                        <span className="catalog__text__img">СПАЛЬНИ</span>
                    </div>
                    <div className="catalog-item">
                        <img src={imgFour} alt="img" />
                        <span className="catalog__text__img">ПРИХОЖИЕ</span>
                    </div>
                    <div className="catalog-item">
                        <img src={imgFive} alt="img" />
                        <span className="catalog__text__img">ШКАФЫ-КУПЕ</span>
                    </div>
                    <div className="catalog-item">
                        <img src={imgSix} alt="img" />
                        <span className="catalog__text__img">ДЕТСКИЕ</span>
                    </div>
                    <div className="catalog-item">
                        <img src={imgSeven} alt="img" />
                        <span className="catalog__text__img">ДИВАНЫ</span>
                    </div>
                    <div className="catalog-item">
                        <img src={imgEight} alt="img" />
                        <span className="catalog__text__img">СТОЛЫ И СТУЛЬЯ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog;