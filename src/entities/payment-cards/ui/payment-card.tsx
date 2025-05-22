import { CustomButton, CustomText } from '@shared/ui';
import { View } from 'react-native';
import { Banknote, ChevronRight, CreditCard } from 'lucide-react-native';

interface PaymentCardProps {
  variant?: 'preview' | 'pressable';
  type?: 'cash' | 'card';
  title: string;
  subTitle?: string;
  onPress?: () => void;
}

export const PaymentCard = ({
  variant = 'preview',
  type = 'card',
  title,
  subTitle,
  onPress,
}: PaymentCardProps) => {
  if (variant === 'preview') {
    return (
      <View className="flex-row items-center justify-between w-full bg-transparent border border-gray-200 py-4 px-4 rounded-2xl">
        <View className="flex-row items-center gap-3">
          <View className="w-12 h-12 rounded-full items-center justify-center bg-gray-100">
            {type === 'card' ? (
              <CreditCard width={24} height={24} />
            ) : (
              <Banknote width={24} height={24} />
            )}
          </View>

          <View>
            <CustomText as="text-subhead" className="font-dm-sans-medium">
              {title}
            </CustomText>
            {!!subTitle && (
              <CustomText className="text-gray-400">{subTitle}</CustomText>
            )}
          </View>
        </View>
      </View>
    );
  }

  return (
    <CustomButton
      variant="outline"
      className="justify-between"
      onPress={onPress}
    >
      <View className="flex-row items-center gap-3">
        <View className="w-12 h-12 rounded-full items-center justify-center bg-gray-100">
          {type === 'card' ? (
            <CreditCard width={24} height={24} />
          ) : (
            <Banknote width={24} height={24} />
          )}
        </View>

        <View>
          <CustomText as="text-subhead" className="font-dm-sans-medium">
            {title}
          </CustomText>
          {!!subTitle && (
            <CustomText className="text-gray-400">{subTitle}</CustomText>
          )}
        </View>
      </View>

      <ChevronRight color="#9ca3af" />
    </CustomButton>
  );
};
