import { Text, TextProps } from 'react-native';
import { cn } from '@shared/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

interface CustomTextProps
  extends TextProps,
    VariantProps<typeof textVariants> {}

const textVariants = cva('font-dm-sans', {
  variants: {
    as: {
      h1: 'font-dm-sans-medium text-[2.125rem] leading-10',
      h2: 'font-dm-sans-bold text-[1.75rem] leading-9',
      h3: 'font-dm-sans-bold text-2xl',
      headline: 'font-dm-sans-bold text-3xl',
      'text-body': 'font-dm-sans-normal text-sm',
      'text-subhead': 'font-dm-sans-medium text-xl',
      'text-caption': 'font-dm-sans-normal text-base',
      'text-caption2': 'font-dm-sans-medium text-xs',
    },
  },
  defaultVariants: {
    as: 'text-body',
  },
});

export const CustomText = ({
  as = 'text-body',
  children,
  className,
  ...props
}: CustomTextProps) => {
  return (
    <Text className={cn(textVariants({ as, className }))} {...props}>
      {children}
    </Text>
  );
};
