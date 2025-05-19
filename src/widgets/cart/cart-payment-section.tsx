import { Container } from '@shared/ui/container';
import { CustomButton } from '@shared/ui/custom-button';
import { View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import { Banknote, ChevronRight, CreditCard, Plus } from 'lucide-react-native';

interface CartPaymentSectionProps {
  handlePaymentSheetOpen: () => void;
}

export const CartPaymentSection = ({
  handlePaymentSheetOpen,
}: CartPaymentSectionProps) => {
  return (
    <View className="bg-white pt-9 pb-14 mt-4">
      <Container className="max-w-[85%] gap-4">
        <CustomButton variant="outline" className="justify-between">
          <View className="flex-row items-center gap-3">
            <View className="w-12 h-12 rounded-full items-center justify-center bg-gray-100">
              <Banknote width={24} height={24} />
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

        <CustomButton variant="outline" className="justify-between">
          <View className="flex-row items-center gap-3">
            <View className="w-12 h-12 rounded-full items-center justify-center bg-gray-100">
              <CreditCard width={24} height={24} />
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

        <CustomButton
          onPress={handlePaymentSheetOpen}
          variant="outline"
          className="justify-between"
        >
          <View className="flex-row items-center gap-3">
            <View className="w-12 h-12 rounded-full items-center justify-center bg-gray-100">
              <Plus width={24} height={24} />
            </View>

            <CustomText as="text-caption" className="font-dm-sans-medium">
              Add payment method
            </CustomText>
          </View>

          <ChevronRight color="#9ca3af" />
        </CustomButton>
      </Container>
    </View>
  );
};
