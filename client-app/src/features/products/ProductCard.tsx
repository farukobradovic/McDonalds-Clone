import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../app/models/product";

interface IProps {
  product: IProduct;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <Fragment>
      <Link to={`/products/${product.id}`} className='product-card'>
        <img src={product.photo.url} alt='image' />
        <p>{product.name}</p>
      </Link>
    </Fragment>
  );
};

export default ProductCard;
