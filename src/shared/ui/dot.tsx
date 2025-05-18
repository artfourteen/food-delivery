import { View } from 'react-native';
import { cn } from '@shared/lib/utils';

export const Dot = ({ className }: { className?: string }) => {
  return <View className={cn('w-1 h-1 bg-gray-200 rounded-full', className)} />;
};
