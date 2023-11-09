import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { openModal } from '../features/modal/modalSlice';
// import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bug</h2>
          <h4 className="empty-cart">Is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bug</h2>
      </header>
      <div>
        {cartItems.map((item) => <CartItem key={item.id} {...item} />)}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            {' '}
            <span>
              $
              {total}
            </span>
          </h4>
        </div>
        <button type="button" className="btn clear-btn" onClick={() => dispatch(openModal())}>
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
