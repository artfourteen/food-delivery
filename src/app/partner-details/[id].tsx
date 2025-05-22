import { Image, View } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useMemo, useRef, useState } from 'react';
import { bottomSheetStyles } from '@shared/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import burgerKingDetails from '@assets/img/partners/burger-king-details.png';
import {
  PartnerDetailsDeliverySection,
  PartnerDetailsInfoSection,
  PartnerDetailsItemDetailsSheet,
  PartnerDetailsReviewsSection,
  PartnerDetailsTabsSection,
  TabType,
} from '@widgets/partner-details';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useLocalSearchParams } from 'expo-router';
import { getPartnerQuery } from '@shared/hooks/query';
import { CustomText } from '@shared/ui';
import { ReviewSheet } from '@features/review/ui';

export default function PartnerDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { data: partner, isPending } = getPartnerQuery(id as string);
  const snapPoints = useMemo(() => ['81%', '100%'], []);
  const { top } = useSafeAreaInsets();
  const [selectedItemId, setSelectedItemId] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<TabType>('delivery');

  const reviewSheetRef = useRef<BottomSheetMethods>(null);
  const itemDetailsSheetRef = useRef<BottomSheetMethods>(null);

  const handleItemDetailsOpen = () => itemDetailsSheetRef.current?.expand();
  const handleItemDetailsClose = () => itemDetailsSheetRef.current?.close();
  const handleReviewSheetOpen = () => reviewSheetRef.current?.expand();
  const handleReviewSheetClose = () => reviewSheetRef.current?.close();

  if (isPending) {
    return (
      <View className="flex-1 items-center justify-center">
        <CustomText className="text-center text-gray-400">
          Loading...
        </CustomText>
      </View>
    );
  }

  if (!partner) {
    return (
      <View className="flex-1 items-center justify-center">
        <CustomText className="text-center text-gray-400">
          Partner not found
        </CustomText>
      </View>
    );
  }

  return (
    <>
      <View className="flex-1">
        <Image source={burgerKingDetails} className="w-full" />
      </View>

      <BottomSheet
        snapPoints={snapPoints}
        style={bottomSheetStyles.base}
        handleStyle={bottomSheetStyles.handle}
        handleIndicatorStyle={bottomSheetStyles.handleIndicator}
        topInset={top}
        index={0}
        enableDynamicSizing={false}
      >
        <BottomSheetScrollView showsVerticalScrollIndicator={false}>
          <PartnerDetailsInfoSection {...partner} />

          <PartnerDetailsTabsSection
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />

          {selectedTab === 'delivery' && (
            <PartnerDetailsDeliverySection
              handleOpen={handleItemDetailsOpen}
              partnerId={partner.id}
              setSelectedId={setSelectedItemId}
            />
          )}

          {selectedTab === 'review' && (
            <PartnerDetailsReviewsSection
              partnerId={id as string}
              reviewSheetOpen={handleReviewSheetOpen}
            />
          )}
        </BottomSheetScrollView>
      </BottomSheet>

      <PartnerDetailsItemDetailsSheet
        ref={itemDetailsSheetRef}
        id={selectedItemId}
        close={handleItemDetailsClose}
      />

      <ReviewSheet
        partnerId={id as string}
        ref={reviewSheetRef}
        partnerName={partner.name}
        close={handleReviewSheetClose}
      />
    </>
  );
}
