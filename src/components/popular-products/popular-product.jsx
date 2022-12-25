
import '../popular-products/popular-products.css'

import imageOne from '../resurses/popular/image1.png';

const PopularPropuct = ({ icondiscount }) => {


    let disount;
    if (icondiscount == 'hit') {
        disount = <span className="popular__hit">хит</span>
    } else if (icondiscount == 'discount') {
        disount = <span className="popular-discount__icon">
            <svg width="63" height="30" viewBox="0 0 63 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.8535 3.27246L60.9239 5.57556C60.9525 5.77875 60.967 5.98478 60.967 6.1927C60.967 6.19272 60.967 6.19275 60.967 6.19277L60.9669 6.98227L61.2573 16.4758L61.2577 16.4888L61.2575 16.4888L61.2575 24.7699L61.2575 24.9305L61.1487 25.0557L58.1271 28.5333C58.6104 28.3344 59.0608 28.0815 59.4689 27.7832C60.871 26.7582 61.7632 25.2031 61.7635 23.4704L60.8535 3.27246ZM60.8535 3.27246C61.4471 4.13535 61.7643 5.13032 61.7648 6.17123C61.7648 6.17132 61.7648 6.1714 61.7648 6.17148L61.7635 23.4703L60.8535 3.27246ZM56.7331 28.9364L55.3102 28.279L55.5311 27.3867C57.9483 27.3868 59.9136 25.6262 59.914 23.4713L59.9153 6.97488L59.8742 5.63039C59.7456 4.79412 59.3191 4.02452 58.641 3.41795C57.8183 2.68273 56.7256 2.27622 55.557 2.27669L55.5567 2.27669L16.6323 2.27495L15.4041 2.31372C15.417 2.4524 15.4637 2.64901 15.5349 2.91925C15.5399 2.93845 15.5451 2.95797 15.5503 2.97778C15.6292 3.27636 15.7256 3.64094 15.7457 3.97332C15.7665 4.31887 15.7151 4.77784 15.3015 5.08014C15.2694 5.10365 15.2054 5.14801 15.1141 5.17906L18.2725 8.32052L18.5906 8.6369L18.2837 8.95015C18.0316 9.20748 17.6278 9.47368 17.1653 9.73807C16.6922 10.0085 16.116 10.3 15.4866 10.6032C14.8405 10.9143 14.1012 11.2547 13.348 11.6016C13.3012 11.6231 13.2543 11.6447 13.2074 11.6663L14.0091 14.1781L14.0297 14.2427L14.0297 14.3096L14.0297 16.6145C14.095 16.7037 14.1118 16.7885 14.1167 16.8137C14.1288 16.8764 14.1269 16.932 14.1247 16.9646C14.1166 17.0871 14.0726 17.265 14.0141 17.4747L13.754 17.4409C13.7483 17.4487 13.7425 17.4567 13.7367 17.4648C13.6729 17.5527 13.5974 17.6569 13.5175 17.762C13.3074 18.0386 13.0105 18.4007 12.6736 18.6248C12.5037 18.7378 12.2699 18.8527 11.9901 18.8592C11.7121 18.8657 11.4665 18.7642 11.2718 18.5934L6.42679 16.0123L6.35291 15.973L6.29611 15.9149C6.1219 15.737 6.01721 15.5235 6.00524 15.2872C5.99376 15.0605 6.06942 14.8521 6.17592 14.673C6.3825 14.3256 6.7629 13.9926 7.20094 13.6817C8.09034 13.0504 9.42779 12.3669 10.8258 11.7014C11.2217 11.513 11.6169 11.3285 12.0085 11.1472L12.3885 3.86288L12.2341 3.70927L12.3959 3.72101L12.4918 1.88334L12.514 1.45812L12.9872 1.44317L14.9176 1.38223C15.0333 1.3447 15.1552 1.32939 15.274 1.32934L15.2743 1.32934L16.5912 1.3294L34.897 0.751482L34.9062 0.751191L34.9154 0.751192L49.0351 0.751193L55.3646 0.751193L55.4552 0.751195L55.5413 0.778494L59.8168 2.13473C58.6615 1.15911 57.1576 0.62238 55.5557 0.62211L56.7331 28.9364ZM56.7331 28.9364C56.3442 29.0047 55.9426 29.0405 55.5318 29.0406C55.5317 29.0406 55.5317 29.0406 55.5316 29.0406L15.2729 29.0396C13.4738 29.0392 11.7695 28.345 10.5947 27.1397L10.5945 27.1396L2.15924 18.4932L2.15855 18.4925C0.124141 16.4152 0.115419 13.2674 2.16615 11.1734L2.16677 11.1728L10.6018 2.52798L10.6021 2.52769C11.7834 1.31492 13.4968 0.620793 15.2959 0.6203C15.296 0.620301 15.2961 0.6203 15.2961 0.6203L55.5556 0.62211L56.7331 28.9364ZM59.7993 3.18125C59.7759 3.15479 59.7521 3.12851 59.728 3.10242L59.7976 3.12449L59.7993 3.18125ZM14.9746 9.76748C14.3761 10.0557 13.742 10.3487 13.0883 10.6496L13.3904 4.85937L17.1436 8.59247C16.9949 8.69486 16.8098 8.8099 16.5875 8.93698C16.1463 9.18918 15.5962 9.46816 14.9746 9.76748ZM13.5349 3.80366L13.4458 3.79719L13.5201 2.3732L14.3548 2.34685C14.3751 2.59946 14.4474 2.87369 14.5076 3.10222L14.5118 3.11822L14.5184 3.1434C14.605 3.47211 14.6809 3.76001 14.6956 4.00412C14.6965 4.01915 14.6971 4.03352 14.6975 4.04727C14.4321 3.93244 14.0653 3.84214 13.5349 3.80366Z" fill="#E13B3F" stroke="#E13B3F" />
                <path d="M10.7664 11.5215L10.7436 11.5215C9.75452 11.5215 8.82473 11.8662 8.11967 12.4952C7.41715 13.1241 7.03304 13.9561 7.03285 14.8402M10.7664 11.5215L10.7204 18.1397C8.68304 18.1394 7.03262 16.6582 7.03285 14.8402M10.7664 11.5215C12.7771 11.5332 14.4048 12.9855 14.4297 14.7765L14.4297 14.8207C14.4299 15.8518 13.8995 16.7794 13.0622 17.3915C12.4218 17.8596 11.6066 18.1395 10.7206 18.1397L10.7664 11.5215ZM7.03285 14.8402L6.50704 14.8299M7.03285 14.8402L6.50704 14.8299M6.50704 14.8299C6.50677 16.9151 8.40192 18.6122 10.7319 18.6125L7.74497 12.1563C6.94713 12.8704 6.50726 13.8199 6.50704 14.8299ZM13.6326 14.3658L13.6329 14.8402C13.6337 16.2718 12.3378 17.4307 10.7424 17.4299C9.14024 17.4298 7.82983 16.26 7.82962 14.8205L13.6326 14.3658ZM13.6326 14.3658L13.5845 14.365M13.6326 14.3658L13.5845 14.365M13.5845 14.365C13.3341 13.1522 12.142 12.2317 10.7205 12.2314L10.7203 12.2314C10.047 12.2314 9.40893 12.4357 8.89497 12.8114C8.81855 12.8673 8.74703 12.9259 8.67973 12.9852L8.67971 12.9851L8.67682 12.9877C8.13211 13.4749 7.82927 14.1262 7.82962 14.8202L13.5845 14.365Z" fill="#E13B3F" stroke="#E13B3F" />
                <path d="M19.944 14.8H23.816V15.984H19.944V14.8ZM28.5096 19.072C28.8723 19.072 29.2083 19.0187 29.5176 18.912C29.827 18.8053 30.0936 18.6507 30.3176 18.448C30.5416 18.2347 30.7176 17.984 30.8456 17.696C30.9736 17.408 31.0376 17.0933 31.0376 16.752C31.0376 16.0053 30.8136 15.4507 30.3656 15.088C29.9283 14.7253 29.3203 14.544 28.5416 14.544H27.3576V14.08L29.6616 10.528L30.3976 9.824L29.3576 9.984H26.1896V8.8H31.9016V9.264L29.3576 13.088L28.7976 13.552V13.584L29.3416 13.472C29.7683 13.4827 30.163 13.5627 30.5256 13.712C30.8883 13.8507 31.203 14.0587 31.4696 14.336C31.7363 14.6027 31.9443 14.928 32.0936 15.312C32.243 15.6853 32.3176 16.112 32.3176 16.592C32.3176 17.168 32.2163 17.68 32.0136 18.128C31.811 18.576 31.5336 18.9547 31.1816 19.264C30.8403 19.5627 30.435 19.792 29.9656 19.952C29.4963 20.112 29.0003 20.192 28.4776 20.192C27.9976 20.192 27.5656 20.1547 27.1816 20.08C26.7976 20.0053 26.4616 19.9093 26.1736 19.792L26.5096 18.656C26.755 18.7733 27.043 18.8747 27.3736 18.96C27.715 19.0347 28.0936 19.072 28.5096 19.072ZM34.1724 14.4C34.1724 12.48 34.4817 11.0347 35.1004 10.064C35.7297 9.09333 36.6417 8.608 37.8364 8.608C39.127 8.608 40.0604 9.088 40.6364 10.048C41.223 10.9973 41.5164 12.448 41.5164 14.4C41.5164 16.32 41.2017 17.7653 40.5724 18.736C39.9537 19.7067 39.0417 20.192 37.8364 20.192C36.567 20.192 35.639 19.6853 35.0524 18.672C34.4657 17.6587 34.1724 16.2347 34.1724 14.4ZM35.5004 14.4C35.5004 15.0933 35.543 15.728 35.6284 16.304C35.7244 16.8693 35.8684 17.36 36.0604 17.776C36.2524 18.1813 36.4924 18.5013 36.7804 18.736C37.079 18.96 37.431 19.072 37.8364 19.072C38.647 19.072 39.239 18.6987 39.6124 17.952C39.9964 17.1947 40.1884 16.0107 40.1884 14.4C40.1884 13.7173 40.1457 13.088 40.0604 12.512C39.9857 11.936 39.8524 11.44 39.6604 11.024C39.479 10.608 39.239 10.288 38.9404 10.064C38.6417 9.84 38.2737 9.728 37.8364 9.728C37.0364 9.728 36.4444 10.1067 36.0604 10.864C35.687 11.6213 35.5004 12.8 35.5004 14.4ZM43.3231 11.328C43.3231 10.848 43.3871 10.4373 43.5151 10.096C43.6431 9.75467 43.8138 9.472 44.0271 9.248C44.2511 9.024 44.5125 8.864 44.8111 8.768C45.1205 8.66133 45.4511 8.608 45.8031 8.608C46.1551 8.608 46.4805 8.656 46.7791 8.752C47.0885 8.848 47.3498 9.00267 47.5631 9.216C47.7871 9.42933 47.9631 9.712 48.0911 10.064C48.2191 10.4053 48.2831 10.8267 48.2831 11.328C48.2831 11.8293 48.2191 12.256 48.0911 12.608C47.9631 12.9493 47.7871 13.2267 47.5631 13.44C47.3498 13.6533 47.0885 13.808 46.7791 13.904C46.4805 14 46.1551 14.048 45.8031 14.048C45.4511 14.048 45.1205 14 44.8111 13.904C44.5125 13.808 44.2511 13.6533 44.0271 13.44C43.8138 13.2267 43.6431 12.9493 43.5151 12.608C43.3871 12.256 43.3231 11.8293 43.3231 11.328ZM44.5071 11.328C44.5071 11.968 44.6191 12.4267 44.8431 12.704C45.0778 12.9813 45.3978 13.12 45.8031 13.12C46.0058 13.12 46.1871 13.0933 46.3471 13.04C46.5071 12.976 46.6405 12.88 46.7471 12.752C46.8645 12.6133 46.9498 12.432 47.0031 12.208C47.0671 11.9733 47.0991 11.68 47.0991 11.328C47.0991 10.976 47.0671 10.688 47.0031 10.464C46.9498 10.2293 46.8645 10.048 46.7471 9.92C46.6405 9.78133 46.5071 9.68533 46.3471 9.632C46.1871 9.568 46.0058 9.536 45.8031 9.536C45.3978 9.536 45.0778 9.664 44.8431 9.92C44.6191 10.1653 44.5071 10.6347 44.5071 11.328ZM49.0351 17.264C49.0351 16.784 49.0991 16.3733 49.2271 16.032C49.3551 15.6907 49.5258 15.408 49.7391 15.184C49.9631 14.96 50.2245 14.8 50.5231 14.704C50.8325 14.5973 51.1631 14.544 51.5151 14.544C51.8671 14.544 52.1925 14.592 52.4911 14.688C52.8005 14.784 53.0618 14.9387 53.2751 15.152C53.4991 15.3653 53.6751 15.648 53.8031 16C53.9311 16.3413 53.9951 16.7627 53.9951 17.264C53.9951 17.7653 53.9311 18.192 53.8031 18.544C53.6751 18.8853 53.4991 19.1627 53.2751 19.376C53.0618 19.5893 52.8005 19.744 52.4911 19.84C52.1925 19.936 51.8671 19.984 51.5151 19.984C51.1631 19.984 50.8325 19.936 50.5231 19.84C50.2245 19.744 49.9631 19.5893 49.7391 19.376C49.5258 19.1627 49.3551 18.8853 49.2271 18.544C49.0991 18.192 49.0351 17.7653 49.0351 17.264ZM50.2191 17.264C50.2191 17.904 50.3311 18.3627 50.5551 18.64C50.7898 18.9173 51.1098 19.056 51.5151 19.056C51.7178 19.056 51.8991 19.0293 52.0591 18.976C52.2191 18.912 52.3525 18.816 52.4591 18.688C52.5765 18.5493 52.6618 18.368 52.7151 18.144C52.7791 17.9093 52.8111 17.616 52.8111 17.264C52.8111 16.912 52.7791 16.624 52.7151 16.4C52.6618 16.1653 52.5765 15.984 52.4591 15.856C52.3525 15.7173 52.2191 15.6213 52.0591 15.568C51.8991 15.504 51.7178 15.472 51.5151 15.472C51.1098 15.472 50.7898 15.6 50.5551 15.856C50.3311 16.1013 50.2191 16.5707 50.2191 17.264ZM52.3951 8.592L53.1791 9.2L44.9711 20.192L44.1711 19.568L52.3951 8.592Z" fill="white" />
            </svg>
        </span>
    }
    return (
        <div className="popular-product-content">
            <div className="popular-products-item">
                <div className="popular-products-item-content">
                    <div className="popular-product-img">
                        <img src={imageOne} alt="image" className="popular__img" />
                        {disount}
                        <div className="pouplar-elements-img">
                            <span className="popular-element__img"></span>
                            <span className="popular-element__img"></span>
                            <span className="popular-element__img"></span>
                        </div>
                    </div>
                    <div className="popular-descr">
                        <p className="popular__title">Гостиная модульная Lucido</p>
                        <div className="popular-selected-colors">
                            <span className="popular__color popular__color_green"></span>
                            <span className="popular__color popular__color_red"></span>
                            <span className="popular__color popular__color_blue"></span>
                        </div>
                        <div className="popular-prices">
                            <span className="popular__discount">7159 руб.</span>
                            <span className="popular__price">5170 руб.</span>
                        </div>
                        <div className="popular-buy">
                            <button className="popular-buy__btn">Купить</button>
                            <span className='popular__favorites'>
                                <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.0001 29C16.6794 29.0066 16.3648 28.8764 16.098 28.6266L2.6297 15.2561C-0.87494 11.7696 -0.87494 6.09992 2.6297 2.60068C4.51207 0.842412 6.73304 -0.0651634 8.99399 -1.92152e-05C11.2564 -0.0595561 13.4775 0.854693 15.3583 2.61966L17.0001 4.24589L18.6419 2.61966C22.1511 -0.866919 27.8613 -0.866919 31.3705 2.61966C34.8796 6.10624 34.8796 11.7696 31.3705 15.2751L17.9067 28.6266C17.6383 28.8766 17.3222 29.0067 17.0001 29V29ZM8.99399 2.53107C7.37429 2.49605 5.78587 3.15861 4.44292 4.42939C1.93058 6.92252 1.93058 10.9786 4.44292 13.4717L17.0001 25.9437L29.5618 13.4591C32.0696 10.9659 32.0696 6.90987 29.5618 4.41674C27.054 1.92361 22.9675 1.8983 20.4506 4.42939L17.9067 6.96049C17.6378 7.2038 17.3246 7.3332 17.0046 7.3332C16.6846 7.3332 16.3714 7.2038 16.1025 6.96049L13.5315 4.42939C12.1923 3.16269 10.6091 2.50035 8.99399 2.53107V2.53107Z" fill="#E13B3F" />
                                </svg>
                            </span>
                        </div>
                        <div className="popular-sizes">
                            <div className="popular-size__title">Размеры:</div>
                            <div className="popular-sizies__counts">
                                <div className="popular-sizies-content">
                                    <p className="popular-sizies__text">Ширина<br /> 1635 мм</p>
                                </div>
                                <div className="popular-sizies-content">
                                    <p className="popular-sizies__text">Высота<br /> 650 мм</p>
                                </div><div className="popular-sizies-content">
                                    <p className="popular-sizies__text">Глубина<br /> 2032 мм</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default PopularPropuct;