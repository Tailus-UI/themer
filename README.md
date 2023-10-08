# Tailus Themer: A Modern and Customizable Theming Library

## Overview

Tailus Themer is a theming library that provides modern and customizable themes for Marketing, Ecommerce websites, and Web Apps. It is built on top of Tailwind CSS and provides a variety of themes that can be easily customized to match your brand and style.

## Concept

Tailus Themer is based on the concept of component-level theming. This means that each component in your application has its own theme, which can be customized independently of the other components. This makes it easy to create applications with a consistent look and feel, while still allowing you to customize the individual components to meet your specific needs.

## Features

Tailus Themer offers a number of benefits over other theming solutions, including:

-   A wide variety of pre-built themes to choose from.
-   Easy customization of the themes to match your brand and style.
-   Support for component-level theming.
-   An online customizer for the global theme and specific component props.
-   A plugin to help customize consistently all the components and the feel and the look of the website orapplication you're building.
-   Generate a specific theme with a specific appearance, you can choose to entirely build your UI in light mode, dark mode or both and Only the utilities of your appearance will be generated in the DOM.
-   Support for React, Vue, Svelte, and all modern JS Frameworks.

## Benefits

Tailus Themer offers a number of benefits over other theming solutions, including:

-   **Modern and customizable themes:** Tailus Themer provides a variety of modern and customizable themes that can be easily adapted to match your brand and style.

-   **Component-level theming:** Tailus Themer supports component-level theming, which makes it easy to create applications with a consistent look and feel.

-   **Easy to use:** Tailus Themer is easy to use and can be used to create themes for applications of all sizes.

-   **Open source:** Tailus Themer is an open source project, which means that you can customize it to meet your specific needs and contribute to the community.

## Use

Tailus Themer is easy to use and can be used to create themes for applications of all sizes. To get started, simply install the Tailus Themer package, the needed component theme package and import it into your application. You can then customize the theme to match your brand and style using our `themer` plugin or our visual customizers.

### Installation

1. Install the Tailus Themer package:

```bash
npm install @tailus/themer
```

2. Add the themer as a tailwindcss plugin:

```js
// tailwind.config.js
import themer from "@tailus/themer";
export default = {
    theme: {
        extend: {
            // your theme here
        },
    },
    plugins: themer({
        // your customizations here
    }),
};
```

3. Add a path to the `@tailus` components themes:

```js
// tailwind.config.js
export default {
    content: [
        // ... other paths
        "./node_modules/@tailus/themer-**/**/*.{js,ts}",
    ],
};
```

4. Install the needed component theme package:

```bash
npm install @tailus/themer-card
```

5. Import the needed component theme package into your application:

```tsx
import { card } from "@tailus/themer-card";
```

6. Add the component theme to the component element:

```tsx
<div className={card}>
    <h3>Card Title</h3>
</div>
```

## Customization

Tailus Themer provides a number of ways to customize the themes to match your brand and style. You can customize the themes using the `themer` plugin or the visual customizers.

### Using the `themer` plugin

The `themer` plugin allows you to customize the themes using a simple and consistent API. To customize the themes, you can use the following syntax:

1. **Add options to the `themer` plugin**:

The `themer` plugin accepts two group of options:

#### Preconfigs :

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

#### Components :

You can use the `components` block to customize the components individually. The following components are supported:

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

##### Example

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

### Using the online customizers

Tailus Themer provides a two online customizers that allow you to customize the themes visually. To use the customizers, simply visit the following links:

-   [Global Theme Customizer](https://tailus.io/customizer/)
-   Find the specific component customization on its documentation page.

## Contribution

Tailus Themer is an open source project and we welcome contributions from the community. If you have any ideas or suggestions for how to improve Tailus Themer, please feel free to open an issue or submit a pull request.

## Support

If you have any questions or need help with using Tailus Themer, please feel free to reach out to us on Twitter.

## License

Tailus Themer is licensed under the MIT license.

## Credits

Tailus Themer is built on top of Tailwind CSS and uses the following open source libraries:

-   [Tailwind CSS](https://tailwindcss.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [PostCSS](https://postcss.org/)

**Additional Information**

We are responsive to user feedback, so if you have any suggestions or requests, you can be sure that they will be considered.
