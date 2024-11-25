import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';
import { TbCheck, TbChevronDown, TbChevronUp } from 'react-icons/tb';

import { cn } from '@/lib/utils';

type SelectItemType = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

interface SelectProps extends React.ComponentProps<typeof SelectPrimitive.Root> {
  placeholder?: string;
  items?: SelectItemType[];
  icon?: React.ReactNode;
  className?: string;
  value?: string;
  id?: string;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ placeholder, items = [], icon, className, value, id, ...props }, ref) => {
    console.log(value);
    return (
      <SelectPrimitive.Root {...props} value={value}>
        <SelectTrigger id={id} ref={ref} icon={value ? icon : ''} className={className}>
          <SelectValue placeholder={placeholder || '-'} value={value} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value} icon={item.icon}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPrimitive.Root>
    );
  }
);
Select.displayName = 'Select';

interface SelectValueProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value> {
  placeholder?: string;
  value?: string;
}

const SelectGroup = SelectPrimitive.Group;
const SelectValue = React.forwardRef<HTMLButtonElement, SelectValueProps>(
  ({ placeholder, value, ...props }, ref) => {
    console.log(placeholder);
    return (
      <SelectPrimitive.Value ref={ref} placeholder={value ? undefined : placeholder} {...props} />
    );
  }
);
SelectValue.displayName = SelectPrimitive.Value.displayName;

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  icon?: React.ReactNode;
  className?: string;
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, icon, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex w-full items-center justify-between rounded-md',
      'border border-gray-300 bg-white',
      'px-3 py-2 text-sm',
      'focus:outline-none focus:ring-1 focus:ring-blue-500',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'group',
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-2">
      {icon}
      {children}
    </div>
    <SelectPrimitive.Icon asChild>
      <TbChevronDown className="h-4 w-4 group-aria-expanded:rotate-180" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <TbChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <TbChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  icon?: React.ReactNode;
}

const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, SelectItemProps>(
  ({ className, children, icon, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex w-full cursor-default select-none items-center',
        'rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
        'focus:bg-gray-50 hover:bg-gray-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <TbCheck className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <div className="flex items-center gap-2">
        {icon}
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </div>
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
