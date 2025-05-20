import { CustomButton, CustomText, SectionCard } from '@shared/ui';
import { View } from 'react-native';
import { Bell, ChevronRight } from 'lucide-react-native';

export const ProfileNotificationSection = () => {
  return (
    <SectionCard title="Notifications">
      <CustomButton variant="ghost" className="justify-between">
        <View className="flex-row items-center gap-3">
          <Bell size={18} color="#9ca3af" />

          <View className="gap-0.5">
            <CustomText as="text-caption" className="font-dm-sans-medium">
              Notifications
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
    </SectionCard>
  );
};
