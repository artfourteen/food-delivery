import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Pressable, View } from 'react-native';
import { Container, CustomText } from '@shared/ui';
import { bottomSheetStyles } from '@shared/constants';
import { PartnerCardMd } from '@entities/partners/ui';
import { forwardRef, useMemo } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { getPartnersQuery } from '@shared/hooks/query';
import {
  LoadingPartners,
  PartnersNotFound,
} from '@widgets/main/partners-section';
import { cn } from '@shared/lib/utils';

export const PartnersSheet = forwardRef<BottomSheetMethods>((_, ref) => {
  const { data: partners, isPending } = getPartnersQuery();
  const snapPoints = useMemo(() => ['100%'], []);
  const router = useRouter();
  const { top } = useSafeAreaInsets();

  const renderContent = () => {
    if (isPending) {
      return <LoadingPartners />;
    } else if (!partners || !partners.length) {
      return <PartnersNotFound />;
    } else {
      return (
        <View>
          {partners.map((partner, index) => (
            <Pressable
              key={partner.id}
              onPress={() => router.push(`/partner-details/${partner.id}`)}
              className="active:opacity-80 py-2"
            >
              <PartnerCardMd
                {...partner}
                withUnderLine={partners.length - 1 !== index}
                className={cn('pb-4', {
                  'pb-0': partners.length - 1 === index,
                })}
              />
            </Pressable>
          ))}
        </View>
      );
    }
  };

  return (
    <BottomSheet
      index={-1}
      enablePanDownToClose
      ref={ref}
      snapPoints={snapPoints}
      topInset={top}
      enableDynamicSizing={false}
      style={bottomSheetStyles.base}
      handleStyle={bottomSheetStyles.handle}
      handleIndicatorStyle={bottomSheetStyles.handleIndicator}
    >
      <View>
        <View className="border-b border-gray-100 py-6">
          <CustomText
            as="text-caption"
            className="text-center font-dm-sans-bold"
          >
            Our Partners
          </CustomText>
        </View>

        <Container>
          <BottomSheetScrollView
            className="pt-6"
            showsVerticalScrollIndicator={false}
          >
            {renderContent()}
          </BottomSheetScrollView>
        </Container>
      </View>
    </BottomSheet>
  );
});

PartnersSheet.displayName = 'PartnersSheet';
