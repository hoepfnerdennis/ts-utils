import type { ComponentProps, ElementType } from "react";

/**
 * To handle polymorphic as-prop in react components
 * @example
 * import { WithAsProp } from "@dnshpf/ts-utils";
 *
 * function Box<As extends React.ElementType = "div">({
 *    as: As,
 *    ...props
 * }: WithAsProp<As>) {
 *    const Component = As || "div";
 *    return <Component {...props} />;
 * }
 */
export type WithAsProp<As extends ElementType, Props = {}> = Props & {
  as?: As;
} & Omit<ComponentProps<As>, "as" | keyof Props>;
