import { Pressable, ScrollView, View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import { Container } from '@shared/ui/container';
import { PartnerCardSm } from '@entities/partners/ui';
import { mockPartners } from '@shared/constants';
import { useRouter } from 'expo-router';

interface PartnersSectionProps {
  handleOpenSheet: () => void;
}

export const PartnersSection = ({ handleOpenSheet }: PartnersSectionProps) => {
  const router = useRouter();

  return (
    <>
      <Container>
        <View className="bg-white rounded-2xl overflow-hidden">
          <View className="flex-row justify-between items-center pl-4 py-1 border-b border-gray-100">
            <CustomText as="text-caption" className="font-dm-sans-bold">
              Our Partners
            </CustomText>
            <Pressable
              onPress={handleOpenSheet}
              className="p-4 items-center justify-center"
            >
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
    </>
  );
};
