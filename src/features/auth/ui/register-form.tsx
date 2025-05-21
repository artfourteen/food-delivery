import { View } from 'react-native';
import {
  ControlledInput,
  ControlledPasswordInput,
  CustomButton,
  CustomText,
} from '@shared/ui';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { handleError } from '@shared/lib/utils';
import { authService } from '@features/auth/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';

const registerScheme = z
  .object({
    username: z.string().min(3, 'Username should be at least 3 characters'),
    email: z
      .string()
      .min(1, 'Email field is required')
      .email('Invalid email address'),
    password: z.string().min(8, 'Password should be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Confirm password field is required'),
  })
  .refine((data) => data.password === data.password, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerScheme>;

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerScheme),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const router = useRouter();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await authService.register(data);

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
          name="username"
          autoComplete="username-new"
          placeholder="Your name"
          control={control}
          error={errors.username?.message}
        />

        <ControlledInput
          name="email"
          autoComplete="email"
          keyboardType="email-address"
          inputMode="email"
          placeholder="Email"
          control={control}
          error={errors.email?.message}
        />

        <ControlledPasswordInput
          name="password"
          autoComplete="new-password"
          placeholder="Password"
          control={control}
          error={errors.password?.message}
        />

        <ControlledPasswordInput
          name="confirmPassword"
          autoComplete="new-password"
          placeholder="Confirm password"
          control={control}
          error={errors.confirmPassword?.message}
        />
      </View>

      <CustomButton onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
        <CustomText className="text-white font-dm-sans-medium">
          Sign up
        </CustomText>
      </CustomButton>
    </View>
  );
};
