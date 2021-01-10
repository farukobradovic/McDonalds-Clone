import { observer } from "mobx-react-lite";
import React, { Fragment, useContext } from "react";
import { IProduct } from "../../../app/models/product";
import { RootStoreContext } from "../../../app/stores/rootStore";

export interface IProps {
  product: IProduct;
  quantity: number;
}

const ProductOrder: React.FC<IProps> = ({ product, quantity }) => {
  const rootStore = useContext(RootStoreContext);
  const { removeFromBucket } = rootStore.productStore;
  return (
    <Fragment>
      <tr>
        <td style={{ display: "flex", alignItems: "center" }}>
          <img src={product.photo.url} alt='' />
          <span>{product.name}</span>
        </td>
        <td>
          <button
            onClick={() => removeFromBucket(product.id)}
            style={{
              backgroundColor: "none",
              border: "none",
              fontSize: "1.5rem",
              color: "#da291c",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <i className='fas fa-trash-alt'></i>
          </button>
        </td>
        <td>{quantity}</td>
        <td>{product.price} BAM</td>
      </tr>
    </Fragment>
  );
};

export default observer(ProductOrder);
