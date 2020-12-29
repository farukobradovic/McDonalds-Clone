import React, { Fragment, useContext, useState } from "react";
import { IProduct } from "../../../app/models/product";
import { RootStoreContext } from "../../../app/stores/rootStore";

interface IProps {
  product: IProduct;
}

export const ProductInfo: React.FC<IProps> = ({ product }) => {
  const rootStore = useContext(RootStoreContext);
  const { orderProduct } = rootStore.productStore;
  const [quantity, setQuantity] = useState(3);
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
              <form onSubmit={(e) => e.preventDefault()}>
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  style={{ width: "5rem" }}
                >
                  -
                </button>
                <input
                  type='number'
                  defaultValue={quantity}
                  style={{ marginRight: 0 }}
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ width: "5rem", marginRight: "2rem" }}
                >
                  +
                </button>
                <button
                  // type='submit'
                  onClick={() => orderProduct(product, quantity)}
                >
                  Kupi
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
