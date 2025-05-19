import { ScrollView, View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container } from '@shared/ui/container';
import { ItemCartCard } from '@entities/items/ui';
import { cn } from '@shared/lib/utils';
import { CustomButton } from '@shared/ui/custom-button';
import { ChevronRight } from 'lucide-react-native';

import PinLocation from '@assets/img/icons/pin-location.svg';
import Cash from '@assets/img/cart/cash.svg';
import PayPal from '@assets/img/cart/paypal.svg';
import Mastercard from '@assets/img/cart/mastercard.svg';

export default function CartScreen() {
  return (
    <View>
      <SafeAreaView className="bg-white">
        <CustomText
          as="text-subhead"
          className="fixed top-0 z-10 text-center font-dm-sans-medium"
        >
          Cart
        </CustomText>
      </SafeAreaView>

      <ScrollView
        className="mt-4"
        contentContainerClassName="pb-20"
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <View className="gap-4">
            <View className="bg-white rounded-2xl">
              <View className="p-5 border-b border-gray-200">
                <CustomText as="text-subhead" className="font-dm-sans-bold">
                  Deliver to
                </CustomText>
              </View>

              <View className="flex-row items-stretch gap-3 p-5">
                <View className="w-20 h-20 rounded-2xl bg-orange-50" />

                <View className="justify-between flex-1">
                  <CustomText
                    as="text-caption"
                    className="font-dm-sans-medium text-pretty"
                  >
                    (323) 238-0678 909-1/2 E 49th St Los Angeles,
                    California(CA), 90011
                  </CustomText>

                  <View className="flex-row gap-1 items-center">
                    <PinLocation />
                    <CustomText
                      as="text-caption"
                      className="font-dm-sans-medium"
                    >
                      1.5 km
                    </CustomText>
                  </View>
                </View>
              </View>
            </View>

            <View className="bg-white rounded-2xl">
              <View className="p-5 border-b border-gray-100">
                <CustomText as="text-subhead" className="font-dm-sans-bold">
                  Your order
                </CustomText>

                <View>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <ItemCartCard
                      key={i}
                      className={cn('py-5', {
                        'border-b border-gray-100': i !== 2,
                      })}
                    />
                  ))}
                </View>
              </View>

              <View className="p-5">
                <View className="flex-row items-center justify-between pb-4 border-b border-gray-100">
                  <CustomText as="text-caption">Subtotal (3 items)</CustomText>
                  <CustomText as="text-caption">$36.98</CustomText>
                </View>
                <View className="flex-row items-center justify-between py-4 border-b border-gray-100">
                  <CustomText as="text-caption">Delivery</CustomText>
                  <CustomText as="text-caption">$0.00</CustomText>
                </View>
                <View className="flex-row items-center justify-between pt-4">
                  <CustomText as="text-subhead" className="font-dm-sans-medium">
                    Total
                  </CustomText>
                  <CustomText
                    as="text-subhead"
                    className="font-dm-sans-medium text-orange-400"
                  >
                    $36.98
                  </CustomText>
                </View>
              </View>
            </View>
          </View>
        </Container>

        <View className="bg-white py-9 mt-4">
          <Container className="max-w-[85%] gap-4">
            <CustomButton variant="secondary" className="justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-12 h-12 rounded-full items-center justify-center bg-white">
                  <Cash width={24} height={24} />
                </View>

                <View>
                  <CustomText as="text-subhead" className="font-dm-sans-medium">
                    $36.98
                  </CustomText>
                  <CustomText>Cash</CustomText>
                </View>
              </View>

              <ChevronRight color="#9ca3af" />
            </CustomButton>

            <CustomButton variant="secondary" className="justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-12 h-12 rounded-full items-center justify-center bg-white">
                  <PayPal width={24} height={24} />
                </View>

                <View>
                  <CustomText as="text-subhead" className="font-dm-sans-medium">
                    $36.98
                  </CustomText>
                  <CustomText>PayPal</CustomText>
                </View>
              </View>

              <ChevronRight color="#9ca3af" />
            </CustomButton>
          </Container>
        </View>
      </ScrollView>
    </View>
  );
}
