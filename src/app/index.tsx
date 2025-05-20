import { ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { Container, CustomButton } from '@shared/ui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '@widgets/header';
import { CategoriesSection } from '@widgets/main/categories-section';
import { PartnersSection } from '@widgets/main/partners-section';
import { FilterPartnersSection } from '@widgets/main/filter-partners-section';
import { PartnersSheet } from '@widgets/main/partners-sheet';
import { useRef } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

export default function MainScreen() {
  const router = useRouter();
  const partnersSheetRef = useRef<BottomSheetMethods>(null);

  const handleClear = async () => {
    await AsyncStorage.removeItem('hasSeenOnboarding');
    router.push('/onboarding');
  };

  const handleOpenPartnersSheet = () => partnersSheetRef.current?.expand();

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-4 pb-9">
          <Header />

          <CategoriesSection />

          <PartnersSection handleOpenSheet={handleOpenPartnersSheet} />

          <FilterPartnersSection />

          <Container className="mt-10">
            <View className="items-center justify-center gap-3">
              <Text>React Native Init</Text>
              <CustomButton onPress={() => router.push('/onboarding')}>
                <Text className="text-white">Onboarding</Text>
              </CustomButton>
              <CustomButton onPress={() => router.push('/(auth)/login')}>
                <Text className="text-white">Login</Text>
              </CustomButton>
              <CustomButton onPress={() => router.push('/(auth)/register')}>
                <Text className="text-white">Register</Text>
              </CustomButton>
              <CustomButton onPress={() => router.push('/(auth)/address')}>
                <Text className="text-white">Address</Text>
              </CustomButton>
              <CustomButton variant="secondary" onPress={handleClear}>
                <Text>Clear storage</Text>
              </CustomButton>
            </View>
          </Container>
          <StatusBar style="auto" backgroundColor="white" />
        </View>
      </ScrollView>

      <PartnersSheet ref={partnersSheetRef} />
    </>
  );
}
