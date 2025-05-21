import { View } from 'react-native';
import { CustomButton, CustomText } from '@shared/ui';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledInput, ControlledPasswordInput } from '@shared/ui/input';
import { handleError } from '@shared/lib/utils';
import Toast from 'react-native-toast-message';
import { authService } from '@features/auth/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const loginScheme = z.object({
  email: z
    .string()
    .min(1, 'Email field is required')
    .email('Invalid email address'),
  password: z.string().min(1, 'Password field is required'),
});

type LoginFormData = z.infer<typeof loginScheme>;

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginScheme),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await authService.login(data);

      await AsyncStorage.setItem('accessToken', res.accessToken);

      router.push('/');
    } catch (e) {
      const errorMessage = await handleError(e);
      Toast.show({
        type: 'error',
        text1: errorMessage,
      });
    }
  };

  return (
    <View className="gap-4">
      <View className="w-full gap-2">
        <ControlledInput
          name="email"
          control={control}
          keyboardType="email-address"
          inputMode="email"
          autoComplete="email"
          placeholder="Email"
          error={errors.email?.message}
        />
        <ControlledPasswordInput
          name="password"
          control={control}
          autoComplete="current-password"
          placeholder="Password"
          secureTextEntry
          error={errors.password?.message}
        />
      </View>

      <CustomButton disabled={isSubmitting} onPress={handleSubmit(onSubmit)}>
        <CustomText className="text-white font-dm-sans-medium">
          Sign in
        </CustomText>
      </CustomButton>
    </View>
  );
};
