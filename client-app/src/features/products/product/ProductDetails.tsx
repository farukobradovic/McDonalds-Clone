import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import { RootStoreContext } from "../../../app/stores/rootStore";
import { ProductInfo } from "./ProductInfo";
import { ProductReviews } from "./ProductReviews";
import { ProductTable } from "./ProductTable";

interface DetailParams {
  id: string;
}

const ProductDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
}) => {
  const rootStore = useContext(RootStoreContext);
  const {
    loadingProduct,
    product,
    loadProduct,
    clearProduct,
  } = rootStore.productStore;
  useEffect(() => {
    loadProduct(match.params.id);
    // return () => {
    //   clearProduct();
    // };
  }, [loadProduct, match.params.id]);

  if (loadingProduct) return <LoadingComponent content='Loading product' />;

  return (
    <div className='container'>
      <ProductInfo product={product!} key={product!.id} />
      <ProductTable product={product!} key={product!.name} />
      <ProductReviews />
    </div>
  );
};

export default observer(ProductDetails);
