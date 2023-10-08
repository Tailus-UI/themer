# Toggle Component Theme

## Overview

The toggle component theme is a collection of Tailwind CSS utilities that can be used to create toggles with different colors, sizes, and variants. Toggles are used to allow users to switch between two states, such as on and off, or enabled and disabled.

## Installation

To install the toggle component theme, run the following command:

```bash
npm install @tailus/themer-toggle
```

## Importation

To import the toggle component theme, you can use the following import:

```tsx
import { toggle, highlightRootToggle } from "@tailus/themer-toggle";
```

## Variants

The toggle component theme provides two variants:

-   `default`: The default variant.
-   `highlightRootVariant`: A variant with a highlighted root element.

## Sizes

The toggle component theme provides five sizes:

-   `xs`
-   `sm`
-   `md`
-   `lg`
-   `xl`

## Colors

The toggle component theme provides eight colors:

-   `primary`
-   `secondary`
-   `accent`
-   `danger`
-   `warning`
-   `success`
-   `info`
-   `gray`
-   `neutral`

## Props

The toggle component theme object contains the following properties:

-   `root`: The Tailwind CSS utilities for the root element of the toggle component.
-   `icon`: The Tailwind CSS utilities for the icon element of the toggle component.
-   `iconBefore`: The Tailwind CSS utilities for the icon before the toggle component.
-   `iconAfter`: The Tailwind CSS utilities for the icon after the toggle component.

For the `highlightRootVariant` :

-   the `root` prop also accepts a color as a prefix.
-   the `iconAfter` prop accepts a size as a prefix.

### Default Variant

```ts
toggle = {
    root: {
        xs,
        sm,
        md,
        lg,
        xl,
    },
    icon: {
        xs,
        sm,
        md,
        lg,
        xl,
    },
    iconBefore: {
        xs,
        sm,
        md,
        lg,
        xl,
    },
    iconAfter: {
        primary: Sizes,
        secondary: Sizes,
        accent: Sizes,
        danger: Sizes,
        warning: Sizes,
        success: Sizes,
        info: Sizes,
        gray: Sizes,
        neutral: Sizes,
    },
};
```

### Highlight Root Variant

```ts
highlightRootToggle = {
    root: {
        primary: Sizes,
        secondary: Sizes,
        accent: Sizes,
        danger: Sizes,
        warning: Sizes,
        success: Sizes,
        info: Sizes,
        gray: Sizes,
        neutral: Sizes,
    },
    icon: {
        xs,
        sm,
        md,
        lg,
        xl,
    },
    iconBefore: {
        xs,
        sm,
        md,
        lg,
        xl,
    },
    iconAfter: {
        xs,
        sm,
        md,
        lg,
        xl,
    },
};
```

## Usage

To use the toggle component theme, simply import the appropriate variant and add its properties to the toggle element and its child elements. For example, to create a default toggle component, you would import the default `toggle` variant and add its properties to the toggle element.

```tsx
import { toggle as toggleTheme } from "@tailus/themer-toggle";
import * as Toggle from "@radix-ui/react-toggle";

const ToggleUI = () => (
    <Toggle.Root aria-label="bookmark" className={toggleTheme.root.md}>
        <BookmarkIcon className={toggleTheme.iconBefore.md} strokeWidth={1.5} aria-hidden />
        <BookmarkFilledIcon className={toggleTheme.iconAfter.accent.md} aria-hidden />
    </Toggle.Root>
);

export default ToggleUI;
```

## Highlight Root Variant

To create a highlight root variant toggle, you would import the `highlightRootToggle` variant and add its properties to the toggle element.

```tsx
import { highlightRootToggle as toggleTheme } from "@tailus/themer-toggle";
import * as Toggle from "@radix-ui/react-toggle";

const ToggleUI = () => (
    <Toggle.Root aria-label="bookmark" className={toggleTheme.root.accent.md}>
        <BookmarkIcon className={toggleTheme.iconBefore.md} strokeWidth={1.5} aria-hidden />
        <BookmarkFilledIcon className={toggleTheme.iconAfter.md} aria-hidden />
    </Toggle.Root>
);

export default ToggleUI;
```

## Customization

The border radius of the toggle component depends on the border radius of the button component.
