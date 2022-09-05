import AddProductsButton from '../../components/AddProductsButton/addProductsButton';
import Header from '../../components/Header/header';
import ProductCard from '../../components/ProductCard/productCard';
import Subtitle from '../../components/Subtitle/subtitle';
import Title from '../../components/Title/title';
import './styles.css';

function Main() {
  return (
    <div className="container-main">
      <Header />

      <div className='main__content'>
        <Title />

        <div className='your-products'>
          <Subtitle subtitle={"Seus produtos"} />
          <AddProductsButton />
        </div>

        <div className='cards'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Main;