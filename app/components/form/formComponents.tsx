import { cn } from "~/lib/utils";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import type { ComponentPropsWithoutRef } from "react";

export function FormInput({ className, ...props }: ComponentPropsWithoutRef<typeof Input>) {
  return (
    <Input
      className={cn(
        "w-full rounded-lg bg-white px-4 py-2",
        className
      )}
      {...props}
    />
  );
}

export function FormSelect(props: ComponentPropsWithoutRef<typeof Select>) {
  return <Select {...props} />;
}

export function FormSelectTrigger({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof SelectTrigger>) {
  return (
    <SelectTrigger
      className={cn(
        "w-full rounded-lg bg-white px-4 py-2",
        className
      )}
      {...props}
    />
  );
}

export function FormSelectContent({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof SelectContent>) {
  return (
    <SelectContent
      className={cn(
        "w-full rounded-lg bg-white",
        className
      )}
      {...props}
    />
  );
}

export function FormSelectItem({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof SelectItem>) {
  return (
    <SelectItem
      className={cn(
        "rounded-lg px-4 py-2",
        className
      )}
      {...props}
    />
  );
}

export const FormSelectValue = SelectValue; 