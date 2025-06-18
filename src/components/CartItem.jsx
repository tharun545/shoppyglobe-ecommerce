import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="border p-3 rounded flex justify-between items-center shadow-sm">
      <div>
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-gray-700">${item.price}</p>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
}
