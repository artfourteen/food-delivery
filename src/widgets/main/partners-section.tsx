import { Pressable, ScrollView, View } from 'react-native';
import { Container, CustomText } from '@shared/ui';
import { PartnerCardSm } from '@entities/partners/ui';
import { useRouter } from 'expo-router';
import { getPartnersQuery } from '@shared/hooks/query/partners/get-partners-query';
import { cn } from '@shared/lib/utils';

interface PartnersSectionProps {
  handleOpenSheet: () => void;
}

export const LoadingPartners = () => {
  return (
    <CustomText className="text-center flex-1 py-9 text-gray-400">
      Loading...
    </CustomText>
  );
};

export const PartnersNotFound = () => {
  return (
    <CustomText className="text-center flex-1 py-9 text-gray-400">
      No partners found
    </CustomText>
  );
};

export const PartnersSection = ({ handleOpenSheet }: PartnersSectionProps) => {
  const { data: partners, isPending } = getPartnersQuery();
  const router = useRouter();

  const renderContent = () => {
    if (isPending) {
      return <LoadingPartners />;
    } else if (!partners || !partners.length) {
      return <PartnersNotFound />;
    } else {
      return partners?.map((partner, index) => (
        <View className="flex-row">
          <Pressable
            key={partner.id}
            onPress={() => router.push(`/partner-details/${partner.id}`)}
            className={cn('active:opacity-80 mr-5', {
              'mr-0': partners.length - 1 === index,
            })}
          >
            <PartnerCardSm {...partner} />
          </Pressable>
        </View>
      ));
    }
  };

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
            {renderContent()}
          </ScrollView>
        </View>
      </Container>
    </>
  );
};
