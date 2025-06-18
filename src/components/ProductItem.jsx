import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="border p-4 rounded">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p>${product.price}</p>
      <div className="flex justify-between mt-2">
        <Link to={`/product/${product.id}`} className="text-blue-500">
          View
        </Link>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-green-500 text-white px-2 py-1 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
