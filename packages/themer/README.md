# Tailus Themer Documentation

## Overview

Tailus Themer is a Tailwind CSS plugin that helps to customize all of the `@tailus/` themes. It provides a simple and consistent way to override the default `@tailus` themes.

## Features and Benefits

-   Customize all of the `@tailus/` themes
-   Generate a theme according to your preferences, either light mode only, dark mode only or both, regardless of the `darkMode` property in Tailwind CSS.

## Installation and

To install Tailus Themer, run the following command:

```bash
npm install @tailus/themer
```

## Usage

To use Tailus Themer, you will need to add it to your Tailwind CSS configuration file (`tailwind.config.js`).

1. Import the `themer` plugin:

```javascript
import themer from "@tailus/themer";
```

2. Add a path to the `@tailus` themes:

```javascript
export default {
    content: [
        // ... other paths
        "./node_modules/@tailus/themer-**/**/*.{js,ts}",
    ],
};
```

3. Add the `themer` plugin to the `plugins` block:

```javascript
module.exports = {
    plugins: [
        // ... other plugins
        themer,
    ],
};
```

4. Add options to the `themer` plugin:

The `themer` plugin accepts two group of options:

### Preconfigs :

You can use the `preconfigs` to add consitent customizations to how the components looks.

-   `appearance` : Generate a theme according to your preferences, either light mode only, dark mode only or both, regardless of the `darkMode` property in Tailwind CSS.

    **Accepts** : "light" | "dark" | "both",

-   `background` : Add consistent background colors to your theme.

    **Accepts** : "light" | "lighter" | "hight" | "higher",

-   `padding` : Add consistent padding to your theme.

    **Accepts** : "small" | "medium" | "large" | "larger" | "largest",

-   `border` : Add consistent border colors to your theme.

    **Accepts** : "lighter" | "light" | "high" | "higher",

-   `radius` : Add consistent border radius to your theme.

    **Accepts** : "boxy" | "sharp" | "smooth" | "smoothest",

-   `shadow` : Add consistent shadow to your theme.

    **Accepts** : `{ size: "sm" | "md" | "lg" | "xl" | "xxl", opacity: number }`,

### Components :

You can use the `components` to customize the components individually. The following components are supported:

-   `accordion`
-   `alert`
-   `annonce`
-   `avatar`
-   `badge`
-   `button`
-   `card`
-   `feedback` : Customizations for feedback components.
-   `field`
-   `flag`
-   `menu` : Customizations for menu components.
-   `popover`
-   `select`
-   `switch`
-   `tabs`
-   `tost`
-   `tooltip`
-   `ui` : Border colors for accordion, annonce, card and separator components.

```javascript
module.exports = {
    plugins: [
        themer({
            appearance: "light", // light | dark | both
            background: "lighter", // light | lighter | hight | higher
            padding: "largest", // small | medium | large | larger | largest
            border: "light", // lighter | light | high | higher
            radius: "smoothest", // boxy | sharp | smooth | smoothest
            shadow: {
                size: "md",
                opacity: 5,
            },
            components: {
                // ... components specific options
            },
        }),
    ],
};
```

Once you have added Tailus Themer to your Tailwind CSS configuration file, you can customize all the components with our preconfigs or specific components options.

## Example

The following example shows how to customize the accordion theme:

```javascript
module.exports = {
    plugins: [
        themer({
            appearance: "light", // light | dark | both
            background: "lighter", // light | lighter | hight | higher
            padding: "largest", // small | medium | large | larger | largest
            border: "light", // lighter | light | high | higher
            radius: "smoothest", // boxy | sharp | smooth | smoothest
            shadow: {
                size: "md",
                opacity: 5,
            },
            components: {
                accordion: {
                    rounded: "xl",
                    softBg: "100",
                    ghostBg: "100",
                    shadow: {
                        size: "xxl",
                        opacity: 5,
                    },
                    dark: {
                        softBg: "900",
                        ghostBg: "900",
                        elevatedBg: "900",
                    },
                },
            },
        }),
    ],
};
```

This code will override the `accordion` default theme with the following values:

```javascript
{
    rounded: "xl",
    softBg: "100",
    ghostBg: "100",
    shadow: {
        size: "xxl",
        opacity: 5,
    },
    dark: {
        softBg: "900",
        ghostBg: "900",
        elevatedBg: "900",
    },
}
```
