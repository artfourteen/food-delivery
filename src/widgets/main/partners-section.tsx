import { Pressable, ScrollView, View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import { Container } from '@shared/ui/container';
import { PartnerCardSm } from '@entities/partners/ui';
import { mockPartners } from '@shared/constants/partners';

export const PartnersSection = () => {
  return (
    <Container>
      <View className="bg-white rounded-2xl">
        <View className="flex-row justify-between items-center p-4 border-b border-gray-100">
          <CustomText as="text-caption" className="font-dm-sans-bold">
            Our Partners
          </CustomText>
          <Pressable>
            <CustomText as="text-caption2" className="font-dm-sans-medium">
              See all
            </CustomText>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="flex-grow p-4"
        >
          <View className="flex-row gap-5">
            {mockPartners.map((partner) => (
              <PartnerCardSm key={partner.id} {...partner} />
            ))}
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
