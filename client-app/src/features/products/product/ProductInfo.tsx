import React, { Fragment } from "react";
import { IProduct } from "../../../app/models/product";

interface IProps {
  product: IProduct;
}

export const ProductInfo: React.FC<IProps> = ({ product }) => {
  return (
    <Fragment>
      {product && (
        <div className='product'>
          <div className='left'>
            <img src={product.photo.url} alt='product' />
          </div>
          <div className='right'>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className='inputs'>
              <form>
                <input type='number' />
                <button type='submit'>Kupi</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
