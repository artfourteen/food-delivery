import { View } from 'react-native';
import { CustomButton, CustomText, Divide, SectionCard } from '@shared/ui';
import {
  ChevronRight,
  CreditCard,
  Lock,
  MapPin,
  User2,
} from 'lucide-react-native';

interface ProfileGeneralSectionProps {
  openAccountInfoSheet: () => void;
  openChangePasswordSheet: () => void;
  openPaymentMethodsSheet: () => void;
}

export const ProfileGeneralSection = ({
  openAccountInfoSheet,
  openChangePasswordSheet,
  openPaymentMethodsSheet,
}: ProfileGeneralSectionProps) => {
  return (
    <SectionCard title="General">
      <View className="gap-2">
        <CustomButton
          variant="ghost"
          className="justify-between"
          onPress={openAccountInfoSheet}
        >
          <View className="flex-row items-center gap-3">
            <User2 size={18} color="#9ca3af" />

            <View className="gap-0.5">
              <CustomText as="text-caption" className="font-dm-sans-medium">
                Account information
              </CustomText>
              <CustomText
                as="text-caption2"
                className="font-dm-sans-medium text-gray-400"
              >
                Change your Account information
              </CustomText>
            </View>
          </View>

          <ChevronRight color="#9ca3af" />
        </CustomButton>

        <Divide />

        <CustomButton
          variant="ghost"
          className="justify-between"
          onPress={openChangePasswordSheet}
        >
          <View className="flex-row items-center gap-3">
            <Lock size={18} color="#9ca3af" />

            <View className="gap-0.5">
              <CustomText as="text-caption" className="font-dm-sans-medium">
                Password
              </CustomText>
              <CustomText
                as="text-caption2"
                className="font-dm-sans-medium text-gray-400"
              >
                Change your Password
              </CustomText>
            </View>
          </View>

          <ChevronRight color="#9ca3af" />
        </CustomButton>

        <Divide />

        <CustomButton
          variant="ghost"
          className="justify-between"
          onPress={openPaymentMethodsSheet}
        >
          <View className="flex-row items-center gap-3">
            <CreditCard size={18} color="#9ca3af" />

            <View className="gap-0.5">
              <CustomText as="text-caption" className="font-dm-sans-medium">
                Payment Methods
              </CustomText>
              <CustomText
                as="text-caption2"
                className="font-dm-sans-medium text-gray-400"
              >
                Add your Credit & Debit cards
              </CustomText>
            </View>
          </View>

          <ChevronRight color="#9ca3af" />
        </CustomButton>

        <Divide />

        <CustomButton variant="ghost" className="justify-between">
          <View className="flex-row items-center gap-3">
            <MapPin size={18} color="#9ca3af" />

            <View className="gap-0.5">
              <CustomText as="text-caption" className="font-dm-sans-medium">
                Delivery Locations
              </CustomText>
              <CustomText
                as="text-caption2"
                className="font-dm-sans-medium text-gray-400"
              >
                Change your Delivery Locations
              </CustomText>
            </View>
          </View>

          <ChevronRight color="#9ca3af" />
        </CustomButton>
      </View>
    </SectionCard>
  );
};
