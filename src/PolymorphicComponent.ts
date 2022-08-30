/**
 * ## Props with polymorphic as
 *
 * @see {@link PolymorphicComponent} and {@link PolymorphicComponentWithRef}
 */
export type PolymorphicProps<
  As extends React.ElementType,
  Props = {}
> = Props & {
  as?: As;
} & Omit<React.ComponentProps<As>, "as" | keyof Props>;

/**
 * ## Ref for polymorphic as
 *
 * @see {@link PolymorphicComponentWithRef}
 */
export type PolymorphicRef<As extends React.ElementType> =
  React.ComponentPropsWithRef<As>["ref"];

/**
 * ## Props with polymorphic as and ref
 *
 * @see {@link PolymorphicComponent} and {@link PolymorphicComponentWithRef}
 */
export type PolymorphicPropsWithRef<
  As extends React.ElementType,
  Props = {}
> = PolymorphicProps<As, Props> & {
  ref?: PolymorphicRef<As>;
};

/**
 * ## Component that can be polymorphic and handle as-prop
 *
 * Components, that are only used as layout component or not necessarily need to be a specific
 * element, could be polymorphic. Types for these components are a bit more complicated.
 * So here is an example of how to handle polymorphic as-prop in react components.
 *
 * @example
 * ```tsx
 * import type { PolymorphicComponent } from "@dnshpf/ts-utils";
 *
 * const Box: PolymorphicComponent<"div"> = ({ as: As, ...props }) => {
 *  const Component = As || "div";
 *  return <Component {...props} />;
 * }
 * ```
 *
 * @typeParam Default - The default element type used in the component (e.g. "div")
 */
export type PolymorphicComponent<Default extends React.ElementType> = <
  As extends React.ElementType = Default
>(
  props: PolymorphicProps<As>
) => React.ReactElement | null;

/**
 * ## Component that can be polymorphic and handle as-prop and ref
 *
 * Components, that are only used as layout component or not necessarily need to be a specific
 * element, could be polymorphic. Types for these components are a bit more complicated.
 * So here is an example of how to handle polymorphic as-prop in react components.
 *
 * @example
 * ```tsx
 * import { forwardRef } from "react";
 * import type { ElementType } from "react";
 * import type {
 *  PolymorphicComponentWithRef,
 *  PolymorphicProps,
 *  PolymorphicRef
 * } from "@dnshpf/ts-utils";
 *
 * const Box: PolymorphicComponentWithRef<"div"> = forwardRef(
 *  <As extends React.ElementType = "div">(
 *    { as: As, ...props }: PolymorphicProps<As>,
 *    ref: PolymorphicRef<As>
 *  ) => {
 *    const Element = As || "div";
 *    return <Element {...props} ref={ref} />;
 *  }
 * );
 * ```
 *
 * @typeParam Default - The default element type used in the component (e.g. "div")
 */
export type PolymorphicComponentWithRef<Default extends React.ElementType> = <
  As extends React.ElementType = Default
>(
  props: PolymorphicPropsWithRef<As>
) => React.ReactElement | null;
