# Card Component Theme

## Overview

The card component theme is a collection of Tailwind CSS utilities that can be used to create cards with different styles, and variants. Cards are used to group and display content in a way that is easily readable.

## Installation

To install the card component theme, run the following command:

```bash
npm install @tailus/themer-card
```

## Importation

To import the card component theme, you can use the following import:

```tsx
import {
    card,
    outlinedVariant,
    elevatedVariant,
    softVariant,
    mixedVariant,
    softGradientVariant,
    elevatedGradientVariant,
} from "@tailus/themer-card";
```

## Variants

The card component theme provides six variants:

-   `Outlined` (default): The default variant.
-   `Elevated`: A variant with a drop shadow.
-   `Soft`: A variant with rounded corners and lighter background colors.
-   `Mixed`: A variant that combines the outlined and elevated variants.
-   `SoftGradient`: A variant with a lighter backhround and gradient border.
-   `ElevatedGradient`: A variant with a drop shadow and gradient border.

## Props

The softGradient and elevatedGradient variants have two props:

-   `outer`: Gradient border and border radius.
-   `inner`: Contains the padding and the content of the card.

## Customization

The following properties can be customized in the card component theme:

-   `rounded`
-   `padding`

```js
// tailwind.config.js
import themer from "@tailus/themer";
export default = {
    theme: {
        extend: {},
    },
    plugins: [
        themer({
            components: {
                card: {
                    rounded: "rounded-lg",
                    padding: "p-4",
                },
            },
        }),
    ],
};
```

**Note:** The border color is customized in the `ui` group.

## Usage

To use the card component theme, simply import the appropriate variant and add it to the card element. For example, to create a default card component, you would import the `card` variant and add it to the card element.

### Example (React)

```tsx
<div className={card}>
    <h3>Outlined Card Title</h3>
</div>
```

### SoftGradient Card

To create a soft gradient card, you would import the `softGradient` variant and add its properties to the card element. You would also need to specify the outer and inner properties.

```tsx
<div className={softGradientVariant.outer}>
    <div className={softGradientVariant.inner}>
        <h3>Soft Gradient Card Title</h3>
    </div>
</div>
```
