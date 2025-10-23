
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ShoppingCart, Minus, Plus, X } from 'lucide-react';
// import { useCart } from '@/hooks/useCart';

// interface CartModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const CartModal = ({ isOpen, onClose }: CartModalProps) => {
//   const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold flex items-center gap-2">
//             <ShoppingCart className="h-6 w-6" />
//             Shopping Cart ({cartItems.length} items)
//           </DialogTitle>
//         </DialogHeader>

//         {cartItems.length === 0 ? (
//           <div className="text-center py-8">
//             <ShoppingCart className="h-16 w-16 mx-auto text-gray-500 mb-4" />
//             <p className="text-gray-400">Your cart is empty</p>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
//                 <img
//                   src={item.product_image}
//                   alt={item.product_name}
//                   className="h-16 w-16 object-cover rounded-lg"
//                 />
                
//                 <div className="flex-1">
//                   <h3 className="font-semibold">{item.product_name}</h3>
//                   <p className="text-orange-400 font-bold">${item.product_price}</p>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <Button
//                     size="sm"
//                     variant="outline"
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     className="h-8 w-8 p-0"
//                   >
//                     <Minus className="h-4 w-4" />
//                   </Button>
                  
//                   <Badge variant="outline" className="px-3">
//                     {item.quantity}
//                   </Badge>
                  
//                   <Button
//                     size="sm"
//                     variant="outline"
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     className="h-8 w-8 p-0"
//                   >
//                     <Plus className="h-4 w-4" />
//                   </Button>
//                 </div>

//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   onClick={() => removeFromCart(item.id)}
//                   className="h-8 w-8 p-0 text-red-400 hover:text-red-300"
//                 >
//                   <X className="h-4 w-4" />
//                 </Button>
//               </div>
//             ))}

//             <div className="border-t border-gray-600 pt-4">
//               <div className="flex justify-between items-center text-xl font-bold mb-4">
//                 <span>Total: ${getTotalPrice().toFixed(2)}</span>
//               </div>
              
//               <Button className="w-full gradient-sunset text-white hover:opacity-90">
//                 Proceed to Checkout
//               </Button>
//             </div>
//           </div>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// };
