# Badge themes

## Overview

The badge component theme is a collection of Tailwindcss Utilities that can be used to create badge components with different variants, colors, and sizes. The default variant is solid, but there are also soft and outlined variants. Each variant has four sizes: small, medium and large.

## Installation

To install the badge component theme, run the following command:

```bash
npm install @tailus/themer-badge
```

## Importation

To import the badge component theme, you can use one of the following imports:

```tsx
import { badge } from "@tailus/themer-badge";
import { softBadge } from "@tailus/themer-badge";
import { outlinedBadge } from "@tailus/themer-badge";
```

## Usage

To use the badge component theme, simply add the appropriate object properties to the badge element. For example, to create a solid primary badge, you would add the `badge.primary.md` property to the badge element.

### Example

#### React

```
<span className={badge.primary.md}>
  new
</span>
```

#### Vue

```
<span :class="badge.primary.md">
  new
</span>
```

#### Svelte

```
<span class={badge.primary.md}>
  new
</span>
```

## Variants

The following variants are available:

-   `solid`: The default variant.
-   `soft`: A softer variant with rounded corners.
-   `outlined`: A variant with an outline and no background color.

## Sizes

The following sizes are available:

-   `sm` : small
-   `md` : medium
-   `lg` : large

## Customization

The following properties can be customized:

-   border radius

```
tailus: {
    components: {
        badge: {
            borderRadius: "md",
        },
    },
},
```
