import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div>
      <p>
        <span>Piza Cart Overview</span>
      </p>
      <Link to="/cart">Open</Link>
    </div>
  );
};

export default CartOverview;
