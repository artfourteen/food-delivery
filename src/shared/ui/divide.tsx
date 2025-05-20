import { View, ViewProps } from 'react-native';
import { cn } from '@shared/lib/utils';

export const Divide = ({ className, ...props }: ViewProps) => {
  return (
    <View className={cn('h-px w-full bg-gray-100', className)} {...props} />
  );
};
