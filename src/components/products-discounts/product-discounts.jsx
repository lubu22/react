

import PopularPropuct from '../popular-products/popular-product';

import '../products-discounts/product-discounts.css'

const ProductsDiscounts = () => {
    return (
        <div className="container">
            <h2 className="title__catalog">Товары по акции</h2>

            <div className="block-products-discount">
                <button className="popular-discount__btn btn__prev__discount"></button>
                <PopularPropuct />
                <PopularPropuct />
                <PopularPropuct />
                <PopularPropuct />

                <button className="popular-discount__btn btn__next__discount"></button>
            </div>
        </div>
    )
}

export default ProductsDiscounts;