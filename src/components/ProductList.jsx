import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";

export default function ProductList() {
  const { products, error } = useFetchProducts();
  if (error) return <p>{error}</p>;
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
