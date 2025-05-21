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
import Toast from 'react-native-toast-message';
import { toastConfig } from '@shared/config/toast.config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

SplashScreen.preventAutoHideAsync();

const routesWithNave = [
  '/',
  '/orders',
  '/cart',
  '/profile',
  '/partner-details',
];

const privateRoutes = ['/', '/orders', '/cart', '/profile', '/partner-details'];

const queryClient = new QueryClient();

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

  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const hasSeen = await AsyncStorage.getItem('hasSeenOnboarding');

        if (hasSeen !== 'true') {
          if (pathname !== '/onboarding') {
            router.replace('/onboarding');
            return;
          }
        }

        if (
          privateRoutes.includes(pathname) &&
          !accessToken &&
          hasSeen === 'true'
        ) {
          if (pathname !== '/login') {
            router.replace('/login');
            return;
          }
        }
      } catch (e) {
        console.error('Initialization error:', e);
      } finally {
        setAppReady(true);
      }
    };

    if (fontsLoaded || fontsError) {
      initializeApp();
    }
  }, [fontsLoaded, fontsError, pathname]);

  useEffect(() => {
    if ((fontsLoaded || fontsError) && isAppReady) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError, isAppReady]);

  if (!fontsLoaded || !isAppReady) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <GestureHandlerRootView className="flex-1">
          <Stack screenOptions={{ headerShown: false }} />
          {routesWithNave.includes(pathname) && <Nav />}
          <Toast config={toastConfig} />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
