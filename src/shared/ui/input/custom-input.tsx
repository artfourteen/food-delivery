import { TextInput, TextInputProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@shared/lib/utils';

interface CustomInputProps
  extends TextInputProps,
    VariantProps<typeof inputVariants> {}

const inputVariants = cva('', {
  variants: {
    variant: {
      default:
        'bg-gray-100 w-full rounded-2xl px-6 py-4 placeholder:text-gray-400',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const CustomInput = ({
  className,
  variant,
  ...props
}: CustomInputProps) => {
  return (
    <TextInput
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  );
};
