import { View } from 'react-native';
import { CustomButton, CustomText, Divide, SectionCard } from '@shared/ui';
import { Book, ChevronRight, Star } from 'lucide-react-native';

export const ProfileMoreSection = () => {
  return (
    <SectionCard title="General">
      <View className="gap-2">
        <CustomButton variant="ghost" className="justify-between">
          <View className="flex-row items-center gap-3">
            <Star size={18} color="#9ca3af" />

            <View className="gap-0.5">
              <CustomText as="text-caption" className="font-dm-sans-medium">
                Rate Us
              </CustomText>
              <CustomText
                as="text-caption2"
                className="font-dm-sans-medium text-gray-400"
              >
                You will receive daily updates
              </CustomText>
            </View>
          </View>

          <ChevronRight color="#9ca3af" />
        </CustomButton>

        <Divide />

        <CustomButton variant="ghost" className="justify-between">
          <View className="flex-row items-center gap-3">
            <Book size={18} color="#9ca3af" />

            <View className="gap-0.5">
              <CustomText as="text-caption" className="font-dm-sans-medium">
                FAQ
              </CustomText>
              <CustomText
                as="text-caption2"
                className="font-dm-sans-medium text-gray-400"
              >
                Frequently Asked Questions
              </CustomText>
            </View>
          </View>

          <ChevronRight color="#9ca3af" />
        </CustomButton>
      </View>
    </SectionCard>
  );
};
