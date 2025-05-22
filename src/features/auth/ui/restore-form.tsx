import { View } from 'react-native';
import {
  ControlledInput,
  CustomButton,
  CustomInput,
  CustomText,
} from '@shared/ui';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { handleError } from '@shared/lib/utils';
import Toast from 'react-native-toast-message';
import { authService } from '@features/auth/api';

const restoreSchema = z.object({
  email: z
    .string()
    .min(1, 'Email field is required')
    .email('Invalid email address'),
});

type RestoreFormData = z.infer<typeof restoreSchema>;

export const RestoreForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RestoreFormData>({
    resolver: zodResolver(restoreSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: RestoreFormData) => {
    try {
      const res = await authService.restore(data);

      Toast.show({
        type: 'success',
        text1: res.message,
      });
    } catch (e) {
      console.error('Restore error:', e);
      const errorMessage = await handleError(e);
      Toast.show({
        type: 'error',
        text1: errorMessage,
      });
    }
  };

  return (
    <View className="gap-4">
      <ControlledInput
        name="email"
        control={control}
        keyboardType="email-address"
        inputMode="email"
        placeholder="Email"
        error={errors.email?.message}
      />

      <CustomButton onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
        <CustomText className="text-white font-dm-sans-medium">
          Send Reset Link
        </CustomText>
      </CustomButton>
    </View>
  );
};
