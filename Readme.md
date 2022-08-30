[![npm version](https://badge.fury.io/js/@dnshpf%2Fts-utils.svg)](https://badge.fury.io/js/@dnshpf%2Fts-utils)

# ts-utils

A collection of typescript utility types. Includes all type of stuff for mostly plain ts or react code.

## What's inside?

### PolymorphicComponents

To handle polymorphic as-prop in react components

First create your polymorphic component

```tsx
import type { PolymorphicComponent } from "@dnshpf/ts-utils";

const Box: PolymorphicComponent<"div"> = ({ as: As, ...props }) => {
  const Component = As || "div";
  return <Component {...props} />;
};
```

Then use it with the element you need

```tsx
const Container = () => {
  return <Box as="span">Hello there!</Box>;
};
```

or another component

```tsx
import Link from "my-components";

const Container = () => {
  return (
    <Box as={Link} href="/path">
      Hello there!
    </Box>
  );
};
```
