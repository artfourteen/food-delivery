import {
  Keyboard,
  Pressable,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Container } from '@shared/ui/container';
import { CustomText } from '@shared/ui/custom-text';
import { useState } from 'react';
import { cn } from '@shared/lib/utils';
import { PartnerCardMd } from '@entities/partners/ui/partner-card-md';
import { mockPartners } from '@shared/constants';
import { useRouter } from 'expo-router';

type TabType = 'nearby' | 'sales' | 'rate' | 'fast';

const tabs: TabType[] = ['nearby', 'sales', 'rate', 'fast'];

export const FilterPartnersSection = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>('nearby');
  const router = useRouter();

  return (
    <Container>
      <View className="bg-white rounded-2xl">
        <View className="flex-row justify-between items-center px-8 border-b border-gray-100">
          {tabs.map((tab) => (
            <Pressable
              key={tab}
              className={cn('py-6 w-16 flex items-center justify-center', {
                'border-b border-orange-400': selectedTab === tab,
              })}
              onPress={() => setSelectedTab(tab)}
            >
              <CustomText
                className={cn('capitalize font-dm-sans-medium', {
                  'text-orange-400': selectedTab === tab,
                })}
              >
                {tab}
              </CustomText>
            </Pressable>
          ))}
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            {mockPartners.map((partner, index) => (
              <Pressable
                key={partner.id}
                onPress={() => router.push(`/partners-details/${partner.id}`)}
                className="active:opacity-80"
              >
                <PartnerCardMd
                  {...partner}
                  withUnderLine={mockPartners.length - 1 !== index}
                  className="p-8"
                />
              </Pressable>
            ))}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Container>
  );
};
