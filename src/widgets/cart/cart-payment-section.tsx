import { Container, CustomButton, CustomText } from '@shared/ui';
import { View } from 'react-native';
import { ChevronRight, Plus } from 'lucide-react-native';
import { PaymentCard } from '@features/payment/ui';

interface CartPaymentSectionProps {
  handlePaymentSheetOpen: () => void;
}

export const CartPaymentSection = ({
  handlePaymentSheetOpen,
}: CartPaymentSectionProps) => {
  return (
    <View className="bg-white pt-9 pb-14 mt-4">
      <Container className="max-w-[85%] gap-4">
        <PaymentCard
          title="$36.98"
          subTitle="Cash"
          variant="pressable"
          type="card"
        />

        <PaymentCard title="$36.98" subTitle="Cash" variant="pressable" />

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
