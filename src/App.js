import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { calculateTotals } from './features/cart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cartItems]);

  return (
    <main>
      { isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
