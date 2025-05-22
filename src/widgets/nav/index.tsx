import { Pressable, View } from 'react-native';
import {
  House,
  ReceiptText,
  ShoppingCart,
  UserRound,
} from 'lucide-react-native';
import { CustomText } from '@shared/ui';
import { usePathname, useRouter } from 'expo-router';
import { cn } from '@shared/lib/utils';
import { useCartQuery } from '@shared/hooks/query/cart/use-cart-query';

export const Nav = () => {
  const { data: cart } = useCartQuery();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View className="fixed bottom-0 z-10 overflow-hidden flex-row justify-around w-full border-t border-gray-200">
      <Pressable
        className="items-center py-4 w-1/4"
        onPress={() => router.push('/')}
      >
        <House color={pathname === '/' ? '#fb923c' : '#9ca3af'} />
        <CustomText
          as="text-caption2"
          className={cn('text-gray-400', {
            'text-orange-400 font-dm-sans-semibold': pathname === '/',
          })}
        >
          Home
        </CustomText>
      </Pressable>

      <Pressable
        className="items-center py-4 w-1/4"
        onPress={() => router.push('/orders')}
      >
        <ReceiptText color={pathname === '/orders' ? '#fb923c' : '#9ca3af'} />
        <CustomText
          as="text-caption2"
          className={cn('text-gray-400', {
            'text-orange-400 font-dm-sans-semibold': pathname === '/orders',
          })}
        >
          Orders
        </CustomText>
      </Pressable>

      <Pressable
        className="items-center py-4 w-1/4 relative"
        onPress={() => router.push('/cart')}
      >
        {cart && !!cart.items.length && (
          <View className="absolute top-2 right-9 z-10 bg-orange-400 w-5 h-5 rounded-full items-center justify-center">
            <CustomText as="text-caption2" className="text-white">
              {cart.items.length}
            </CustomText>
          </View>
        )}
        <ShoppingCart color={pathname === '/cart' ? '#fb923c' : '#9ca3af'} />
        <CustomText
          as="text-caption2"
          className={cn('text-gray-400', {
            'text-orange-400 font-dm-sans-semibold': pathname === '/cart',
          })}
        >
          Cart
        </CustomText>
      </Pressable>

      <Pressable
        className="items-center py-4 w-1/4"
        onPress={() => router.push('/profile')}
      >
        <UserRound color={pathname === '/profile' ? '#fb923c' : '#9ca3af'} />
        <CustomText
          as="text-caption2"
          className={cn('text-gray-400', {
            'text-orange-400 font-dm-sans-semibold': pathname === '/profile',
          })}
        >
          Profile
        </CustomText>
      </Pressable>
    </View>
  );
};
