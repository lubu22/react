
import PopularPropuct from './popular-product';

import './popular-products.css'


const PopularProducts = () => {
    return (
        <div className="container">
            <div className="catalog">
                <h2 className="title__catalog">ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
                <div className="block-popular-products">
                    <PopularPropuct icondiscount={'discount'} />
                    <PopularPropuct icondiscount={'hit'} />
                    <PopularPropuct icondiscount={'discount'} />
                    <PopularPropuct icondiscount={'discount'} />
                    <PopularPropuct icondiscount={'hit'} />
                    <PopularPropuct icondiscount={'discount'} />
                    <PopularPropuct icondiscount={'hit'} />
                    <PopularPropuct icondiscount={'discount'} />
                </div>
            </div>
            <div className="popular-more-products">
                <a href="#" className="popular-more__btn">Показать еще</a>
            </div>
        </div>
    )
}

export default PopularProducts;