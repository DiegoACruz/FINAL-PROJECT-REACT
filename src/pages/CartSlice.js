// Importamos createSlice de Redux Toolkit
import { createSlice, configureStore } from "@reduxjs/toolkit";

// Estado inicial del carrito
const initialState = {
  items: []
};

// Creamos el slice del carrito
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // Agregar producto
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    // Eliminar producto
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    }

  }
});

// Exportamos acciones
export const { addItem, removeItem } = cartSlice.actions;

// Creamos el store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});

// Exportamos el store
export default store;