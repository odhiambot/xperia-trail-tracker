
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

interface WishlistItem {
  id: string;
  product_id: number;
  product_name: string;
  product_price: number;
  product_image: string;
}

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchWishlistItems();
    } else {
      setWishlistItems([]);
    }
  }, [user]);

  const fetchWishlistItems = async () => {
    if (!user) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from('wishlist_items')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching wishlist items:', error);
    } else {
      setWishlistItems(data || []);
    }
    setLoading(false);
  };

  const toggleWishlist = async (item: {
    id: number;
    name: string;
    price: number;
    image: string;
  }) => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to log in to add items to your wishlist.",
        variant: "destructive"
      });
      return;
    }

    const existingItem = wishlistItems.find(wishlistItem => wishlistItem.product_id === item.id);

    if (existingItem) {
      // Remove from wishlist
      const { error } = await supabase
        .from('wishlist_items')
        .delete()
        .eq('id', existingItem.id);

      if (!error) {
        fetchWishlistItems();
        toast({
          title: "Removed from wishlist",
          description: `${item.name} has been removed from your wishlist.`,
        });
      }
    } else {
      // Add to wishlist
      const { error } = await supabase
        .from('wishlist_items')
        .insert({
          user_id: user.id,
          product_id: item.id,
          product_name: item.name,
          product_price: item.price,
          product_image: item.image
        });

      if (!error) {
        fetchWishlistItems();
        toast({
          title: "Added to wishlist!",
          description: `${item.name} has been added to your wishlist.`,
        });
      }
    }
  };

  const isInWishlist = (productId: number) => {
    return wishlistItems.some(item => item.product_id === productId);
  };

  return {
    wishlistItems,
    loading,
    toggleWishlist,
    isInWishlist
  };
};
