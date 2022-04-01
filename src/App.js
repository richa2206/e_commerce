import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const addHandleToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log("app.js ka products");
  console.log(cart, "cart");
  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      {/*<Products products={products} onAddToCart={addHandleToCart} />*/}
      <Cart cart={cart} />
    </div>
  );
};

export default App;
