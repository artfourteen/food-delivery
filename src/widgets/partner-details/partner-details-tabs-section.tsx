import { Pressable, View } from 'react-native';
import { Container, CustomText } from '@shared/ui';
import { cn } from '@shared/lib/utils';
import { Dispatch, SetStateAction } from 'react';

export type TabType = 'delivery' | 'review';

const tabs: TabType[] = ['delivery', 'review'];

interface PartnerDetailsTabProps {
  selectedTab: TabType;
  setSelectedTab: Dispatch<SetStateAction<TabType>>;
}

export const PartnerDetailsTabsSection = ({
  setSelectedTab,
  selectedTab,
}: PartnerDetailsTabProps) => {
  return (
    <View className="border-y border-gray-100">
      <Container className="max-w-[85%]">
        <View className="flex-row items-center justify-between gap-1">
          {tabs.map((tab) => (
            <Pressable
              key={tab}
              className={cn('py-5 w-2/5', {
                'border-b border-orange-400 ': selectedTab === tab,
              })}
              onPress={() => setSelectedTab(tab)}
            >
              <CustomText
                as="text-caption"
                className={cn('capitalize text-center font-dm-sans-medium', {
                  'text-orange-400': selectedTab === tab,
                })}
              >
                {tab}
              </CustomText>
            </Pressable>
          ))}
        </View>
      </Container>
    </View>
  );
};
