import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (items.length === 0) return <p className="p-4">Cart is empty</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {items.map((item) => (
        <div key={item.id} className="border p-2 mb-2 flex justify-between">
          <div>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
