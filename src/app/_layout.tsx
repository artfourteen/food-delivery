import { SplashScreen, Stack, usePathname, useRouter } from 'expo-router';
import './global.css';
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
  DMSans_700Bold,
  DMSans_800ExtraBold,
  DMSans_900Black,
  useFonts,
} from '@expo-google-fonts/dm-sans';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Nav } from '@widgets/nav';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const [fontsLoaded, fontsError] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold,
    DMSans_800ExtraBold,
    DMSans_900Black,
  });
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const prepare = async () => {
      const hasSeen = await AsyncStorage.getItem('hasSeenOnboarding');

      if (hasSeen !== 'true' && pathname !== '/onboarding') {
        router.replace('/onboarding');
      }

      setIsReady(true);
    };

    prepare();
  }, []);

  useEffect(() => {
    if ((fontsLoaded || fontsError) && isReady) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError, isReady]);

  if (!fontsLoaded || !isReady) return null;

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <Stack screenOptions={{ headerShown: false }} />
        <Nav />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
