import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Pressable, View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import { bottomSheetStyles, mockPartners } from '@shared/constants';
import { PartnerCardMd } from '@entities/partners/ui/partner-card-md';
import { forwardRef, useMemo } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container } from '@shared/ui/container';
import { useRouter } from 'expo-router';

export const PartnersSheet = forwardRef<BottomSheetMethods>((_, ref) => {
  const snapPoints = useMemo(() => ['100%'], []);
  const router = useRouter();
  const { top } = useSafeAreaInsets();

  return (
    <BottomSheet
      index={-1}
      enablePanDownToClose
      ref={ref}
      snapPoints={snapPoints}
      topInset={top}
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
            {mockPartners.map((partner) => (
              <Pressable
                key={partner.id}
                onPress={() => router.push(`/partners-details/${partner.id}`)}
                className="active:opacity-80 py-4"
              >
                <PartnerCardMd key={partner.id} {...partner} />
              </Pressable>
            ))}
          </BottomSheetScrollView>
        </Container>
      </View>
    </BottomSheet>
  );
});

PartnersSheet.displayName = 'PartnersSheet';
