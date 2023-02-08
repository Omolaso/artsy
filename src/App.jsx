import Routers from "./Routers";
import ScrollTop from "./components/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { totalInCart } from "./reduxSlice/CartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalInCart());
  }, [cartItems]);

  return (
    <>
      <ScrollTop />
      <Routers />
    </>
  );
}
export default App;
