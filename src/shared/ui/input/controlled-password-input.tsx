import { Control, Controller } from 'react-hook-form';
import { TextInputProps, View } from 'react-native';
import { CustomText, PasswordInput } from '@shared/ui';

interface ControlledPassWordInputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  error?: string;
}

export const ControlledPasswordInput = ({
  name,
  control,
  error,
  ...props
}: ControlledPassWordInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <View className="gap-0.5">
          <PasswordInput
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            {...props}
          />

          {error && (
            <CustomText
              as="text-caption2"
              className="text-red-500 font-dm-sans-medium"
            >
              {error}
            </CustomText>
          )}
        </View>
      )}
    />
  );
};
