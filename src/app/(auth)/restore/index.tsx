import { Container, CustomText } from '@shared/ui';
import { Pressable, View } from 'react-native';

import AuthImg from '@assets/img/auth/auth.svg';
import { RestoreForm } from '@features/auth/ui';
import { useRouter } from 'expo-router';

export default function RestoreScreen() {
  const router = useRouter();

  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Container>
        <View className="h-screen items-center justify-center gap-12 pb-20 relative">
          <AuthImg />

          <View className="w-full gap-6">
            <View className="items-center justify-center gap-2">
              <CustomText as="h3" className="text-center">
                Forgot your password?
              </CustomText>
              <CustomText className="text-gray-500 text-center">
                We’ll send a reset link to your email
              </CustomText>
            </View>

            <View className="gap-4">
              <RestoreForm />

              <Pressable
                onPress={() => router.push('/(auth)/login')}
                className="self-center active:opacity-80"
              >
                <CustomText
                  as="text-caption"
                  className="text-orange-400 font-dm-sans-medium"
                >
                  Back
                </CustomText>
              </Pressable>
            </View>
          </View>
        </View>
      </Container>
    </View>
  );
}
