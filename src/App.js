
import HeaderUp from './components/header/header-up';
import HeaderInfo from './components/header/header-info';
import Menu from './components/menu/menu';
import Slider from './components/slider/slider';
import Advantages from './components/advantages/advantages';
import Catalog from './components/catalog/catalog';
import PopularProducts from './components/popular-products/popular-products';
import PopularCategory from './components/popular-category/popular-category';
import ProductsDiscounts from './components/products-discounts/product-discounts';
import OurWorks from './components/our-works/our-works';
import Contacts from './components/contacts/contacts';

import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderUp />
      <HeaderInfo />
      <Menu />
      <Slider />
      <Advantages />
      <Catalog />
      <PopularProducts />
      <PopularCategory />
      <ProductsDiscounts />
      <OurWorks />
      <Contacts />
    </div>
  );
}

export default App;
