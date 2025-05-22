import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from '@widgets/header';
import { CategoriesSection } from '@widgets/main/categories-section';
import { PartnersSection } from '@widgets/main/partners-section';
import { FilterPartnersSection } from '@widgets/main/filter-partners-section';
import { PartnersSheet } from '@widgets/main/partners-sheet';
import { useRef, useState } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { CategoriesSheet } from '@widgets/main/categories-sheet';
import { PartnerDetailsItemDetailsSheet } from '@widgets/partner-details';

export default function MainScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedItemId, setSelectedItemId] = useState<string>('');
  const partnersSheetRef = useRef<BottomSheetMethods>(null);
  const categoriesSheetRef = useRef<BottomSheetMethods>(null);
  const itemDetailsSheetRef = useRef<BottomSheetMethods>(null);

  const handleCategoriesSheetOpen = () => categoriesSheetRef.current?.expand();
  const handleOpenPartnersSheet = () => partnersSheetRef.current?.expand();
  const handleItemDetailsOpen = (itemId: string) => {
    setSelectedItemId(itemId);
    itemDetailsSheetRef.current?.expand();
  };
  const handleItemDetailsClose = () => itemDetailsSheetRef.current?.close();

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-4 pb-9">
          <Header />

          <CategoriesSection
            setSelectedCategory={setSelectedCategory}
            openSheet={handleCategoriesSheetOpen}
          />

          <PartnersSection handleOpenSheet={handleOpenPartnersSheet} />

          <FilterPartnersSection />

          <StatusBar style="auto" backgroundColor="white" />
        </View>
      </ScrollView>

      <PartnersSheet ref={partnersSheetRef} />
      <CategoriesSheet
        ref={categoriesSheetRef}
        category={selectedCategory}
        itemDetailsOpen={handleItemDetailsOpen}
      />
      <PartnerDetailsItemDetailsSheet
        ref={itemDetailsSheetRef}
        id={selectedItemId}
        close={handleItemDetailsClose}
      />
    </>
  );
}
