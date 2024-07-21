import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';

const Cart = () => {
  return (
    <div className="px-4 py-3">
      <LinkButton
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </LinkButton>
      <h2 className="mt-7 text-xl font-semibold">cart</h2>
      <div>
        <Button to="/order/new" type="primary">
          Order
        </Button>
      </div>
    </div>
  );
};

export default Cart;
