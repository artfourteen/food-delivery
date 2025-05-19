import { Image, View } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useMemo, useRef, useState } from 'react';
import { bottomSheetStyles } from '@shared/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import burgerKingDetails from '@assets/img/partners/burger-king-details.png';
import {
  PartnerDetailsDeliverySection,
  PartnerDetailsInfoSection,
  PartnerDetailsReviewsSection,
  PartnerDetailsTabsSection,
  TabType,
} from '@widgets/partner-details';
import { PartnerDetailsItemDetailsSheet } from '@widgets/partner-details/partner-details-item-details-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

export default function PartnerDetailsScreen() {
  const snapPoints = useMemo(() => ['81%', '100%'], []);
  const { top } = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState<TabType>('delivery');
  const itemDetailsSheetRef = useRef<BottomSheetMethods>(null);

  const handleItemDetailsOpen = () => itemDetailsSheetRef.current?.expand();

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
          <PartnerDetailsInfoSection />

          <PartnerDetailsTabsSection
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />

          {selectedTab === 'delivery' && (
            <PartnerDetailsDeliverySection handleOpen={handleItemDetailsOpen} />
          )}

          {selectedTab === 'review' && <PartnerDetailsReviewsSection />}
        </BottomSheetScrollView>
      </BottomSheet>

      <PartnerDetailsItemDetailsSheet ref={itemDetailsSheetRef} />
    </>
  );
}
