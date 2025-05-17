import { useState } from 'react';
import { Pressable, TextInputProps, View } from 'react-native';
import { cn } from '@shared/lib/utils';
import { Eye, EyeClosed } from 'lucide-react-native';
import { CustomInput } from '@shared/ui/input/custom-input';

export const PasswordInput = ({
  className,
  secureTextEntry,
  ...props
}: TextInputProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <View className="relative">
      <CustomInput
        className={cn(className, {
          'pr-10': secureTextEntry,
        })}
        secureTextEntry={!show}
        {...props}
      />

      {secureTextEntry && (
        <Pressable
          className="absolute top-1/2 -translate-y-1/2 right-2.5"
          onPress={() => setShow((prevState) => !prevState)}
        >
          {show ? <EyeClosed color="#979797" /> : <Eye color="#979797" />}
        </Pressable>
      )}
    </View>
  );
};
