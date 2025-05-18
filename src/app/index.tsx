import { ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { CustomButton } from '@shared/ui/custom-button';
import { Container } from '@shared/ui/container';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '@widgets/header';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CategoriesSection } from '@widgets/main/categories-section';
import { PartnersSection } from '@widgets/main/partners-section';
import { FilterPartnersSection } from '@widgets/main/filter-partners-section';

export default function MainScreen() {
  const router = useRouter();

  const handleClear = async () => {
    await AsyncStorage.removeItem('hasSeenOnboarding');
    router.push('/onboarding');
  };

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View className="gap-4 bg-gray-100">
          <Header />

          <CategoriesSection />

          <PartnersSection />

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
    </GestureHandlerRootView>
  );
}
