import { Pressable, View } from 'react-native';
import {
  House,
  UserRound,
  ShoppingCart,
  ReceiptText,
} from 'lucide-react-native';
import { CustomText } from '@shared/ui/custom-text';
import { usePathname, useRouter } from 'expo-router';
import { cn } from '@shared/lib/utils';

export const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View
      className="fixed bottom-0 z-10 overflow-hidden rounded-t-[30px] flex-row justify-around w-full"
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      }}
    >
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
        className="items-center py-4 w-1/4"
        onPress={() => router.push('/cart')}
      >
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
