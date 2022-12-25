

import '../our-works/our-works.css'

import image1 from '../resurses/our-work/image1.png'
import image2 from '../resurses/our-work/image2.png'
import image3 from '../resurses/our-work/image3.png'
import image4 from '../resurses/our-work/image4.png'


const OurWorks = () => {
    return (
        <div className="container">
            <div className="catalog">
                <h2 className="title__catalog">наши работы</h2>
                <a href="#" className="our-works__show__all__btn">Смотреть все работы</a>
                <div className="block-our-works">
                    <div className="our-works-image-item">
                        <img src={image1} alt="image" className="our-work__img" />
                        <span className="our-work__img__text">Кухня глетчер</span>
                    </div>
                    <div className="our-works-image-item">
                        <img src={image2} alt="image" className="our-work__img" />
                        <span className="our-work__img__text">ГОСТИННАЯ ДЕНВЕР</span>
                    </div>
                    <div className="our-works-image-item">
                        <img src={image3} alt="image" className="our-work__img" />
                        <span className="our-work__img__text">КУХНЯ АМЕЛИ</span>
                    </div>
                    <div className="our-works-image-item">
                        <img src={image4} alt="image" className="our-work__img" />
                        <span className="our-work__img__text">КУХНЯ ЛОНДОН</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurWorks;