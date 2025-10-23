
// import { useState, useEffect } from 'react';
// import { supabase } from '@/integrations/node/apiservice';
// import { useAuth } from './useAuth';
// import { useToast } from '@/hooks/use-toast';

// interface CartItem {
//   id: string;
//   product_id: number;
//   product_name: string;
//   product_price: number;
//   product_image: string;
//   quantity: number;
// }

// export const useCart = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const { user } = useAuth();
//   const { toast } = useToast();

//   useEffect(() => {
//     if (user) {
//       fetchCartItems();
//     } else {
//       setCartItems([]);
//     }
//   }, [user]);

//   const fetchCartItems = async () => {
//     if (!user) return;
    
//     setLoading(true);
//     const { data, error } = await supabase
//       .from('cart_items')
//       .select('*')
//       .eq('user_id', user.id);

//     if (error) {
//       console.error('Error fetching cart items:', error);
//     } else {
//       setCartItems(data || []);
//     }
//     setLoading(false);
//   };

//   const addToCart = async (item: {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
//   }) => {
//     if (!user) {
//       toast({
//         title: "Please log in",
//         description: "You need to log in to add items to your cart.",
//         variant: "destructive"
//       });
//       return;
//     }

//     const existingItem = cartItems.find(cartItem => cartItem.product_id === item.id);

//     if (existingItem) {
//       // Update quantity
//       const { error } = await supabase
//         .from('cart_items')
//         .update({ quantity: existingItem.quantity + 1 })
//         .eq('id', existingItem.id);

//       if (!error) {
//         fetchCartItems();
//         toast({
//           title: "Cart updated!",
//           description: `${item.name} quantity increased.`,
//         });
//       }
//     } else {
//       // Add new item
//       const { error } = await supabase
//         .from('cart_items')
//         .insert({
//           user_id: user.id,
//           product_id: item.id,
//           product_name: item.name,
//           product_price: item.price,
//           product_image: item.image,
//           quantity: 1
//         });

//       if (!error) {
//         fetchCartItems();
//         toast({
//           title: "Added to cart!",
//           description: `${item.name} has been added to your cart.`,
//         });
//       }
//     }
//   };

//   const removeFromCart = async (itemId: string) => {
//     const { error } = await supabase
//       .from('cart_items')
//       .delete()
//       .eq('id', itemId);

//     if (!error) {
//       fetchCartItems();
//       toast({
//         title: "Removed from cart",
//         description: "Item has been removed from your cart.",
//       });
//     }
//   };

//   const updateQuantity = async (itemId: string, quantity: number) => {
//     if (quantity <= 0) {
//       removeFromCart(itemId);
//       return;
//     }

//     const { error } = await supabase
//       .from('cart_items')
//       .update({ quantity })
//       .eq('id', itemId);

//     if (!error) {
//       fetchCartItems();
//     }
//   };

//   const getTotalItems = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + (item.product_price * item.quantity), 0);
//   };

//   return {
//     cartItems,
//     loading,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     getTotalItems,
//     getTotalPrice
//   };
// };
