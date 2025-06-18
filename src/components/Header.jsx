import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const cartCount = useSelector((state) => state.cart.items.length);
  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">ShoppyGlobe</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}
