import { useEffect, useState } from 'react';
import AddCancelButton from '../../components/AddCancelButton/addCancelButton';
import AddProductForm from '../../components/Form/addProductForm';
import Header from '../../components/Header/header';
import Modal from '../../components/Modal/modal';
import Subtitle from '../../components/Subtitle/subtitle';
import Title from '../../components/Title/title';
import './styles.css';

function AddProduct() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 3000);

  }, [modal])

  return (
    <div className="container-add-product">
      <Header />

      <div className='main__content'>
        <Title />
        <Subtitle subtitle={"Adicionar produto"} />
        <AddProductForm />
        <AddCancelButton modal={modal} setModal={setModal} />

        {modal && <Modal />}
      </div>
    </div>
  );
}

export default AddProduct;