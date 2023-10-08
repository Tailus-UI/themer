# Toggle Group Component Theme

## Overview

The toggle group component theme is a collection of Tailwind CSS utilities that can be used to create toggles with different colors, sizes, and variants. Toggles are used to allow users to switch between two states, such as on and off, or enabled and disabled.

## Installation

To install the toggle group component theme, run the following command:

```bash
npm install @tailus/themer-toggle-group
```

## Importation

To import the toggle group component theme, you can use the following import:

```tsx
import { toggleGroup, highlightToggleGroup } from "@tailus/themer-toggle-group";
```

## Variants

The toggle group component theme provides two variants:

-   `toggleGroup`: The default variant.
-   `highlightToggleGroup`: A variant with a highlighted item element.

## Sizes

The toggle group component theme provides five sizes:

-   `xs`
-   `sm`
-   `md`
-   `lg`
-   `xl`

## Colors

The toggle group component theme provides eight colors:

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

The toggle group component theme object contains the following properties:

-   `root` : The Tailwind CSS utilities for the root element of the toggle group component.
-   `item`: The Tailwind CSS utilities for the parent element of the toggle component.
-   `icon`: The Tailwind CSS utilities for the icon element of the toggle component.
-   `iconBefore`: The Tailwind CSS utilities for the icon before the toggle component.
-   `iconAfter`: The Tailwind CSS utilities for the icon after the toggle component.

For the `highlightToggleGroup` :

-   The `item` prop also accepts a color as a prefix.
-   The `iconAfter` prop accepts a size as a prefix.

### Default Variant

```ts
toggleGroup = {
    root,
    item: {
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

### Highlight Toggle Group

```ts
highlightToggleGroup = {
    root,
    item: {
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

To use the toggle group component theme, simply import the appropriate variant and add its properties to the toggle group element and its child elements. For example, to create a default toggle group component, you would import the default `toggleGroup` variant and add its properties to the toggle element.

```tsx
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { toggleGroup as toggleTheme } from "@tailus/themer-toggle-group";

const ToggleGroupUI = () => (
    <ToggleGroup.Root
        className={toggleTheme.root}
        type="single"
        defaultValue="like"
        aria-label="User feedback"
    >
        <ToggleGroup.Item className={toggleTheme.item.md} value="like" aria-label="I like it">
            <ThumbUpIcon className={toggleTheme.iconBefore.md} aria-hidden strokeWidth={1.5} />
            <ThumbUpFilledIcon className={toggleTheme.iconAfter.primary.md} aria-hidden />
        </ToggleGroup.Item>
        <ToggleGroup.Item className={toggleTheme.item.md} value="dislike" aria-label="I dislike it">
            <ThumbDownIcon className={toggleTheme.iconBefore.md} aria-hidden strokeWidth={1.5} />
            <ThumbDownFilledIcon className={toggleTheme.iconAfter.primary.md} aria-hidden />
        </ToggleGroup.Item>
    </ToggleGroup.Root>
);

export default ToggleGroupUI;
```

## Highlight Root Variant

To create a highlight root variant toggle, you would import the `highlightRootToggle` variant and add its properties to the toggle element.

```tsx
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { highlightToggleGroup as toggleTheme } from "@tailus/themer-toggle-group";

const ToggleGroupUI = () => (
    <ToggleGroup.Root
        className={toggleTheme.root}
        type="single"
        defaultValue="like"
        aria-label="User feedback"
    >
        <ToggleGroup.Item
            className={toggleTheme.item.primary.md}
            value="like"
            aria-label="I like it"
        >
            <ThumbUpIcon className={toggleTheme.iconBefore.md} aria-hidden strokeWidth={1.5} />
            <ThumbUpFilledIcon className={toggleTheme.iconAfter.md} aria-hidden />
        </ToggleGroup.Item>
        <ToggleGroup.Item
            className={toggleTheme.item.primary.md}
            value="dislike"
            aria-label="I dislike it"
        >
            <ThumbDownIcon className={toggleTheme.iconBefore.md} aria-hidden strokeWidth={1.5} />
            <ThumbDownFilledIcon className={toggleTheme.iconAfter.md} aria-hidden />
        </ToggleGroup.Item>
    </ToggleGroup.Root>
);

export default ToggleGroupUI;
```

## Customization

The border radius of the toggle component depends on the border radius of the button component.
