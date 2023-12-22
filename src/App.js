import CartContainer from './components/CartContainer';
import NavBar from './components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/CartSlice';
import { useEffect } from 'react';
function App() {
  const {CartItems} = useSelector((store)=> store.cart)
 const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(calculateTotals())
  },[CartItems])

  return (
    <main>
      <NavBar/>
      <CartContainer />
    </main>
  );
}

export default App;
