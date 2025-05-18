import { View, ViewProps } from 'react-native';
import { cn } from '../lib/utils';

export const Container = ({ children, className }: ViewProps) => {
  return (
    <View className={cn('max-w-[90%] w-full mx-auto', className)}>
      {children}
    </View>
  );
};
