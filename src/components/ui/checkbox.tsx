import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';
import { TbCheck } from 'react-icons/tb';

import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-5 w-5 shrink-0 rounded border',
      'border-gray-300',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-gray-600 data-[state=checked]:border-gray-600',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
      <TbCheck className="h-4 w-4 text-white" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
