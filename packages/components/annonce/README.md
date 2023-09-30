# Annonce Component Theme

## Overview

The annonce component theme is a collection of Tailwindcss utilities that can be used to create annonce components with two variants: soft and outlined. Annonce components are used to display an announcement on top of the hero section.

## Installation

To install the annonce component theme, run the following command:

```bash
npm install @tailus/themer-annonce
```

## Importation

To import the annonce component theme, you can use the following import:

```tsx
import { annonce, outlinedAnnonce } from "@tailus/themer-annonce";
```

## Variants

The annonce component theme provides two variants:

-   `soft` (default): A variant with lighter background.
-   `annonce` (default): An outlined variant with rounded corners and lighter border colors.

## Reference

The annonce component theme contains the following properties:

```ts
Annonce = {
    root: string;
    concern: {
        primary: string;
        secondary: string;
        accent: string;
        danger: string;
        warning: string;
        info: string;
        success: string;
        gray: string;
        neutral: string;
    };
    message: string;
};
```

The annonce component theme object contains the following properties:

-   `root`: The Tailwindcss utilities for the root element of the annonce component.
-   `concern`: The Tailwindcss utilities for the concern element of the annonce component. The concern element is a small indicator that indicates the importance of the announcement. The concern element can have one of the following colors: `primary`, `secondary`, `accent`, `danger`, `warning`, `info`, `success`, `gray`, or `neutral`.
-   `message`: The Tailwindcss utilities for the message element of the annonce component. The message element is the main content of the annonce.

## Customization

The following property can be customized:

-   `borderRadius`

```ts
tailus: {
    components: {
        annonce: {
            borderRadius: "xl";
        }
    }
}
```

## Usage

To use the annonce component theme, simply import the appropriate variant and add the appropriate Tailwindcss utilities to the annonce element and its child elements. For example, to create a default annonce component, you would import the `annonce` variant and add its properties to the annonce element.

## Example

```tsx
import { annonce as annonceTheme } from "@tailus/themer-annonce";

const Annonce = () => (
    <a href="#" className={annonceTheme.root}>
        <span className={annonceTheme.concern.primary}>New</span>
        <span className={annonceTheme.message}>Introducing a all new Tailus !</span>
    </a>
);

export default Annonce;
```
