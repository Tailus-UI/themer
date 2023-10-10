# Button themes

The button theme is a collection of Tailwindcss CSS utilities that can be used to create buttons with different variants, colors, and sizes. The default variant is solid, but there are also soft, outlined, and ghost variants. Each variant has a default button (label only button), an icon only button, a leading icon button, and a trailing icon button.

## Usage

To use the button object, first install the theme package:

```bash
npm install @tailus/themer-button
```

Then import the package

```tsx
import { button } from "@tailus/themer-button";
```

Then, create a button element and add the appropriate Tailwindcss utilities:

```tsx
import { button } from "@tailus/themer-button";
const Button = () => (
    <button className={button.primary.sm}>
        <span>Button</span>
    </button>
);
```

## Variants

The available variants are:

-   `solid`: The default variant. This creates a solid button with a background color.
-   `soft`: This creates a soft button with a slightly transparent background color.
-   `outlined`: This creates an outlined button with a border but no background color.
-   `ghost`: This creates a ghost button with no background color or border.

## Colors

The available colors are:

-   `primary`: The default color. This creates a button with the primary color of your theme.
-   `secondary`: This creates a button with the secondary color of your theme.
-   `accent`: This creates a button with the accent color of your theme.
-   `danger`: This creates a button with the danger color of your theme.
-   `success`: This creates a button with the success color of your theme.
-   `warning`: This creates a button with the warning color of your theme.
-   `gray`: This creates a button with the gray color of your theme.
-   `neutral`: This creates a button with the neutral color of your theme.

## Sizes

The available sizes are:

-   `xs`: Extra small
-   `sm`: Small
-   `md`: Medium
-   `lg`: Large
-   `xl`: Extra large

## Icons

Icon only buttons, leading icon buttons, and trailing icon buttons have an icon object that contains icon sizes (xs, sm, md, lg, and xl). To use an icon, simply add the `icon.[size]` object property to the icon element. For example, to add a small icon to a button, you would add the `button.icon.sm` object.

### Example

```tsx
import { iconButton } from "@tailus/themer-button";
import { BoltIcon } from "@radix-ui/react-icons";

const Button = () => (
    <button className={iconButton.primary.sm}>
        <BoltIcon className={iconButton.icon.sm} />
    </button>
);
```

This would create a small primary button with a bolt icon.

## Importable Objects

The following objects can be imported from the `@tailus/themer-button` package:

-   `button`
-   `iconButton`
-   `leadingIconButton`
-   `trailingIconButton`
-   `softButton`
-   `softIconButton`
-   `softLeadingIconButton`
-   `softTrailingIconButton`
-   `outlinedButton`
-   `outlinedIconButton`
-   `outlinedLeadingIconButton`
-   `outlinedTrailingIconButton`
-   `ghostButton`
-   `ghostIconButton`
-   `ghostLeadingIconButton`
-   `ghostTrailingIconButton`

Each of these objects is a collection of Tailwind CSS utilities that can be used to create a button with the specified variant, color, and size.

## Customization

The border-radius and border-width of the buttons can be customized.
**Note :** The borderWidth property is only applied to the outlined variant.

```js
tailus: {
    components: {
        button: {
            rounded: "xl",
            borderWith:"1.5",
        },
    },
},
```
