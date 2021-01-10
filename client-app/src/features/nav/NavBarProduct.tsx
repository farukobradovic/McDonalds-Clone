import { observer } from "mobx-react-lite";
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../app/models/product";
import { RootStoreContext } from "../../app/stores/rootStore";

export interface IProps {
  product: IProduct;
  quantity: number;
}

const NavBarProduct: React.FC<IProps> = ({ product, quantity }) => {
  const rootStore = useContext(RootStoreContext);
  const { removeFromBucket } = rootStore.productStore;
  return (
    <Fragment>
      <Link to={`/products/${product.id}`} className='bucket-item'>
        <div className='left'>
          <img src={product.photo.url} alt='' />
        </div>
        <div className='right'>
          <div className='upper'>
            <h2> {product.name}</h2>
            <button type='submit' onClick={() => removeFromBucket(product.id)}>
              <i className='fas fa-times'></i>
            </button>
          </div>
          <div className='down'>
            <p>Količina: {quantity}</p>
            <p>{product.price} BAM</p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default observer(NavBarProduct);
