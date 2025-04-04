import {useSelector, useDispatch} from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {Fragment, useEffect} from 'react';
// import {uiActions} from './store/ui-slice';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-slice';

let isInitial = true;

function App () {
  const dispatch = useDispatch;
  const showCart = useSelector (state => state.ui.cartIsVisible);
  const cart = useSelector (state => state.cart);
  const notification = useSelector (state => state.ui.notification);

  useEffect (
    () => {
      if (isInitial) {
        isInitial = false;
        return;
      }
      dispatch(sendCartData(cart))
    },
    [cart, dispatch]
  );

  return (
    <Fragment>
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />}
      <Layout>
        {showCart && <Cart />} <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

// const sendCartData = async () => {
//   // dispatch (
//   //   uiActions.showNotification ({
//   //     status: 'pending',
//   //     title: 'Sending....',
//   //     message: 'Sending cart data',
//   //   })
//   // );
//   // const response = await fetch (
//   //   'https://react-http-advance-redux-default-rtdb.firebaseio.com/cart.json',
//   //   {method: 'PUT', body: JSON.stringify(cart)}
//   // );

//   // if (!response.ok) {
//   //   throw new Error ('Sending cart data failed');
//   // }

//   // const responseData = await response.json ();

//   // dispatch (
//   //   uiActions.showNotification ({
//   //     status: 'success',
//   //     title: 'Success',
//   //     message: 'Sent cart data successfully',
//   //   })
//   // );
// };

// if (isInitial) {
//   isInitial = false;
//   return;
// }
// sendCartData ().catch (error => {
//   // dispatch (
//   //   uiActions.showNotification ({
//   //     status: 'error',
//   //     title: 'Error',
//   //     message: 'Sending cart data failed!',
//   //   })
//   // );
// });
