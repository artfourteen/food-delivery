import { CustomText } from '@shared/ui';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import { cn } from '@shared/lib/utils';

interface ScreenHeaderProps extends SafeAreaViewProps {
  title: string;
}

export const ScreenHeader = ({
  title,
  className,
  ...props
}: ScreenHeaderProps) => {
  return (
    <SafeAreaView
      className={cn('fixed top-0 bg-white border-b border-gray-200', className)}
      {...props}
    >
      <CustomText as="text-subhead" className="text-center font-dm-sans-medium">
        {title}
      </CustomText>
    </SafeAreaView>
  );
};
