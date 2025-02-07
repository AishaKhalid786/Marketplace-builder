'use client';
import { ReactNode } from "react";
import { createContext, useContext, useState, } from "react";

type CartItem = {
    id: string,
    title: string,
    price: number,
    quantity: number,
    image: string,
};

type CartContextType = {
    cart: CartItem[];
    AddToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity:number) => void;
    clearCart: () => void;
};

const Cartcontext =
createContext<CartContextType | undefined> (undefined);

export const CartProvider = ({ children }:
    { children: ReactNode }) => {
        const [cart, setCart] =
        useState<CartItem[]>([]);

        const AddToCart = (item: CartItem) => {
             setCart((prev) => {
                const existingItem = prev.find((cartItem) => cartItem.id === item.id);
                if (existingItem) {
                    return prev.map((cartItem) =>
                     cartItem.id === item.id
                     ? {...cartItem,quantity:
                    cartItem.quantity + 1}
                    : cartItem
                    );
                }
                return [...prev, {...item, quantity: 1}];
            });
        };
        const removeFromCart = (id: string ) => {
            setCart ((prev) => prev.filter ((cartItem) => cartItem.id !== id));
        };

            const updateQuantity = (id: string ,quantity: number) => {
                setCart((prev) => 
                prev.map((cartItem) => 
                cartItem.id === id ? {...cartItem, quantity } : cartItem
                )
                );
            };
            const clearCart = () => setCart ([]);
            return(
                <Cartcontext.Provider value={{ cart, AddToCart, removeFromCart, updateQuantity, clearCart}}>
                    {children}
                    </Cartcontext.Provider>
            );
            };

            export const useCart = () => {
                const context = useContext(Cartcontext);
                if (!context) {
                    throw new Error ('useCart must be used within a CartProvider');
                }
                return context;
            };
            