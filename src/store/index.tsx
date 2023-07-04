import { create } from "zustand";

// Products
export const useProductsStore = create((set) => ({
  // State
  products: [],
  // Actions
  setProducts: (info: any) => set(() => ({ products: info })),
}));

// Cart
export const useCartStore = create((set) => ({
  // State
  cart: [],
  // Actions
  setCart: (info: any) => set(() => ({ cart: info })),
}));

// Darkmod
export const useDarkModeStore = create((set) => ({
  // State
  darkMode: false,
  // Actions
  setDarkMode: (info: any) => set(() => ({ darkMode: info })),
}));
