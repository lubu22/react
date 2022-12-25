

import '../contacts/contacts.css';

import imageOne from '../resurses/contacts/image1.png';
import imageTwo from '../resurses/contacts/image2.png';


const Contacts = () => {
    return (
        <div className="container">
            <div className="block-contacts">
                <div className="contacts">
                    <div className="contacts-content">
                        <div className="contacts__title">наши контакты</div>
                        <div className="contacts__adress">
                            <p>Краснодар, Московская 144 корпус -1</p>
                        </div>
                        <div className="contacts__number">
                            <a href="#">+7 961-525-91-91</a>
                        </div>
                        <div className="contacts__btn">
                            <button>ЗАДАТЬ ВОПРОС</button>
                        </div>
                    </div>

                </div>
                <div className="contacts-map">
                    <img src={imageTwo} alt="image" className="contacts__map" />
                </div>
            </div>
        </div>
    )
}

export default Contacts;