import { View, ViewProps } from 'react-native';
import { cn } from '@shared/lib/utils';
import { CustomText } from '@shared/ui';

interface SectionCardProps extends ViewProps {
  title?: string;
}

export const SectionCard = ({
  className,
  children,
  title,
  ...props
}: SectionCardProps) => {
  return (
    <View
      className={cn('bg-white py-4 px-5 rounded-2xl gap-4', className)}
      {...props}
    >
      {!!title && (
        <View className="border-b border-gray-100 pb-4">
          <CustomText as="text-caption" className="font-dm-sans-bold">
            {title}
          </CustomText>
        </View>
      )}

      {children}
    </View>
  );
};
