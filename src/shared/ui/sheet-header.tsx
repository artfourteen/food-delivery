import { CustomText } from '@shared/ui/custom-text';
import { View, ViewProps } from 'react-native';
import { cn } from '@shared/lib/utils';

interface SheetHeaderProps extends ViewProps {
  title: string;
}

export const SheetHeader = ({
  title,
  className,
  ...props
}: SheetHeaderProps) => {
  return (
    <View
      className={cn('border-b border-b-gray-100 pb-6', className)}
      {...props}
    >
      <CustomText as="text-subhead" className="text-center font-dm-sans-bold">
        {title}
      </CustomText>
    </View>
  );
};
