import type { ComponentProps, ElementType } from "react";

export type WithAsProp<As extends ElementType, Props = {}> = Props & {
  as?: As;
} & Omit<ComponentProps<As>, "as" | keyof Props>;
