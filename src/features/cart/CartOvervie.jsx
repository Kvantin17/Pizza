import { Link } from 'react-router-dom';

const CartOverview = () => {
  return (
    <div className="bg-stone-800 uppercase text-stone-200">
      <p className="font-semibold text-stone-300">
        <span>Piza Cart Overview</span>
        <span>Price</span>
      </p>
      <Link to="/cart">Open</Link>
    </div>
  );
};

export default CartOverview;
