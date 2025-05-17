import { View } from 'react-native';
import { Container } from '@shared/ui/container';
import { CustomText } from '@shared/ui/custom-text';
import { useState } from 'react';
import { cn } from '@shared/lib/utils';
import { CustomButton } from '@shared/ui/custom-button';
import { ChevronRight } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

import Onboarding1 from '@assets/img/onboarding/onboarding-1.svg';
import Onboarding2 from '@assets/img/onboarding/onboarding-2.svg';
import Onboarding3 from '@assets/img/onboarding/onboarding-3.svg';
import { StatusBar } from 'expo-status-bar';

export default function OnboardingScreen() {
  const [step, setStep] = useState<number>(1);
  const router = useRouter();

  const handleFinish = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    router.push('/(auth)/login');
  };

  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Container>
        <View className="h-full items-center justify-between pt-40 pb-20 relative">
          {step !== 3 && (
            <CustomButton
              variant="link"
              className="absolute top-10 right-0 w-fit"
              onPress={handleFinish}
            >
              <CustomText>Skip</CustomText>
              <ChevronRight size={14} />
            </CustomButton>
          )}

          {step == 1 && <Onboarding1 width={305} height={305} />}
          {step == 2 && <Onboarding2 width={305} height={305} />}
          {step == 3 && <Onboarding3 width={305} height={305} />}

          <View className="items-center gap-10">
            <View className="gap-3">
              <CustomText as="h3" className="text-black text-center">
                {step === 1 && 'Diverse & sparkling food'}
                {step === 2 && 'Free shipping on all orders'}
                {step === 3 && '+24K Restaurants'}
              </CustomText>
              <CustomText className="text-gray-500 text-center">
                {step === 1 &&
                  'We use the best local ingredients to create fresh and delicious food and drinks.'}
                {step === 2 &&
                  'Free shipping on the primary order whilst the usage of CaPay fee method.'}
                {step === 3 &&
                  'Easily find your favorite food and have it delivered in record time.'}
              </CustomText>
            </View>

            <View className="flex-row items-center gap-2">
              <View
                className={cn('bg-gray-200 h-1.5 w-4 rounded-full', {
                  'bg-orange-400 w-10': step === 1,
                })}
              />
              <View
                className={cn('bg-gray-200 h-1.5 w-4 rounded-full', {
                  'bg-orange-400 w-10': step === 2,
                })}
              />
              <View
                className={cn('bg-gray-200 h-1.5 w-4 rounded-full', {
                  'bg-orange-400 w-10': step === 3,
                })}
              />
            </View>
          </View>

          <View className="flex-row items-center justify-between gap-3 w-full">
            {step > 1 && (
              <CustomButton
                variant="secondary"
                className="w-1/2"
                onPress={() => setStep((prevState) => prevState - 1)}
              >
                <CustomText className="font-dm-sans-medium">
                  Previous
                </CustomText>
              </CustomButton>
            )}

            {(step === 1 || step === 2) && (
              <CustomButton
                className={cn('w-full', {
                  'w-1/2': step === 2,
                })}
                variant="default"
                onPress={() => setStep((prevState) => prevState + 1)}
              >
                <CustomText className="font-dm-sans-medium text-white">
                  Next
                </CustomText>
              </CustomButton>
            )}

            {step === 3 && (
              <CustomButton
                variant="default"
                className="w-1/2"
                onPress={handleFinish}
              >
                <CustomText className="font-dm-sans-medium text-white">
                  Get started
                </CustomText>
              </CustomButton>
            )}
          </View>
        </View>
      </Container>
      <StatusBar style="auto" />
    </View>
  );
}
