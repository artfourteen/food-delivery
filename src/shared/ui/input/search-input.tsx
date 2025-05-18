import { Pressable, TextInputProps, View } from 'react-native';
import { CustomInput } from '@shared/ui/input/custom-input';
import { CircleX, MapPin } from 'lucide-react-native';
import { cn } from '@shared/lib/utils';

interface AddressInputProps extends TextInputProps {
  onClear?: () => void;
  withIcon?: boolean;
}

export const SearchInput = ({
  className,
  onClear,
  withIcon = false,
  ...props
}: AddressInputProps) => {
  return (
    <View className="relative">
      {withIcon && (
        <View className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10">
          <MapPin color="#979797" />
        </View>
      )}
      <CustomInput
        className={cn(
          'pr-12',
          {
            'pl-12': withIcon,
          },
          className,
        )}
        {...props}
      />
      <Pressable
        onPress={onClear}
        className="absolute right-2.5 top-1/2 -translate-y-1/2"
      >
        <CircleX color="#fff" fill="#42526E" />
      </Pressable>
    </View>
  );
};
