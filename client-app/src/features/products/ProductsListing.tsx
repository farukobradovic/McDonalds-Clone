import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { LoadingComponent } from "../../app/layout/LoadingComponent";
import { ICategory, IProduct } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface IProps {
  category: ICategory;
}

const ProductsListing: React.FC<IProps> = ({ category }) => {
  return (
    <Fragment>
      {category && (
        <h2 className='heading-products' id={category.name}>
          {category.name}
        </h2>
      )}
      {/* <h2 className='heading-products'>Sendviči</h2> */}
      <div className='products-listing'>
        {category &&
          category.products.map((p) => <ProductCard product={p} key={p.id} />)}
      </div>
    </Fragment>
  );
};

export default observer(ProductsListing);
