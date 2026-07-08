import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Order from "./components/Order";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import { useCart } from "./hooks/useCart";

const NYC_TAX_RATE = 0.08875;

function App() {
  // Cart state is now backed by the real API (GetCart/updateCartItem/deleteFromCart)
  const { cartItems, addToCart, updateQuantity, removeItem, checkout } =
    useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const total = subtotal + subtotal * NYC_TAX_RATE;

  return (
    <div className="App">
      <Navbar cartItems={cartItems} />
      <Hero />
      <Menu onAddToCart={addToCart} />
      <About />
      <Order />
      <Contact />

      <Cart
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={() => setShowCheckout(true)}
      />

      {showCheckout && (
        <Checkout
          total={total}
          onSubmit={checkout}
          onClose={() => setShowCheckout(false)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
