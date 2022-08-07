[![npm version](https://badge.fury.io/js/@dnshpf%2Fts-utils.svg)](https://badge.fury.io/js/@dnshpf%2Fts-utils)

# ts-utils

A collection of typescript utility types. Includes all type of stuff for mostly plain ts or react code.

## What's inside?

### `WithAsProp`

To handle polymorphic as-prop in react components

```tsx
import { WithAsProp } from "@dnshpf/ts-utils";

function Box<As extends React.ElementType = "div">({
  as: As,
  ...props
}: WithAsProp<As>) {
  const Component = As || "div";
  return <Component {...props} />;
}
```
