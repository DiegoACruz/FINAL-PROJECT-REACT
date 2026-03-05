// Importamos React y hooks
import React, { createContext, useState, useEffect } from "react";

// Creamos el contexto del carrito
export const CartContext = createContext();

// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {

  // Inicializamos el carrito leyendo localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardamos el carrito cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Función para agregar productos
  const addToCart = (product) => {

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {

      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));

    } else {

      setCart([...cart, { ...product, quantity: 1 }]);

    }

  };

  // Aumentar cantidad
  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // Disminuir cantidad
  const decreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  // Eliminar producto
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calcular total
  const getTotal = () => {
    return cart.reduce((total, item) =>
      total + item.price * item.quantity, 0
    );
  };

  // Retornamos el provider
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        getTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};