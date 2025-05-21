import { Control, Controller } from 'react-hook-form';
import { CustomInput, CustomText } from '@shared/ui';
import { TextInputProps, View } from 'react-native';

interface ControlledInputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  error?: string;
}

export const ControlledInput = ({
  control,
  name,
  error,
  ...props
}: ControlledInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <View className="gap-0.5">
          <CustomInput
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
